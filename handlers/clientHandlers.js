const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');

//Access list of all clients with GET method
const handleAllClients = (req, res) => {
    res.status(200).json({ status: 200, data: clients })
    //console.log(clients)
}

//Access one client based on ID with GET method
const handleGetClientById = (req, res) => {
    let found = false;
    clients.forEach((client) => {
        //console.log(found)
        if (client.id === req.params.id) {
            res.status(200).json({ status: 200, data: client })
            found = true;
        }
    });
    if (!found) {
        res.status(400).json({ status: 400, error: 'Customer does not exist.' })
    }
}

//Add new client with POST method
const handleCreateNewClient = (req, res) => {
    let newClientData = req.body;
    let clientExists = false;
    
    clients.forEach((client) => {
        if (client.email === req.params.email) {
            clientExists = true
        }
    });
    if (clientExists) {
        res.status(400).json({ status: 400, error: 'This email has already been registered.' })
    } else {
        const id = uuidv4();
        newClientData = id;
        //console.log(id)
        clients.push(newClientData);
        res.status(201).json({ status: 201, error: 'The client has been registered.' })
    }
}

//Delete current client with DELETE method
const handleDeleteClient = (req, res) => {
    let found = false;
    clients.forEach((client) => {
        //console.log(client)
        if (client.id === req.params.id) {
            //console.log(req.params.id)
            res.status(200).json({ status: 200, data: client })
            found = true
        }
    });
    if (!found) {
        res.status(400).json({ status: 400, error: 'Cannot find this client.' })
    };
}


module.exports = { handleAllClients, handleGetClientById, handleCreateNewClient, handleDeleteClient }