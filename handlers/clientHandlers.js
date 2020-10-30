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
    const { id } = req.params;
    let clientExists = false;
    let index = null
    clients.forEach((client, i) => {
      if (client.id === id) {
        clientExists = true;
        index = i;
      }
    })
    if (clientExists) {
      clients.splice(index, 1);
      //console.log(clients)
      res.status(202).json({ status: 202, data: id, error: 'This client has been deleted.' })
    } else {
      res.status(400).json({ status: 400, data: id, error: 'Client not found. Cannot delete.' })
    }
  };


module.exports = { handleAllClients, handleGetClientById, handleCreateNewClient, handleDeleteClient }