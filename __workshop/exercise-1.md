# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

//stock

| `/stock` | `GET` | Retrieves a list stock items. |
| `/stock/:id` | `GET` | Retrieves a specific stock item by ID. |
| `/stock` | `POST` | Creates a new stock item. |
| `/stock/:id` | `PUT` | Update/modify entire stock item by ID |
| `/stock/:id` | `PATCH` | Partially updates stock item ID. |
| `/stock/:id` | `DELETE` | Deletes a stock item by ID. |

//customers

| `/customers` | `GET` | Retrieves a list customers. |
| `/customers/:id` | `GET` | Retrieves a specific customer by ID. |
| `/customers` | `POST` | Creates a new customer. |
| `/customers/:id` | `PUT` | Update/modify an existing customer by ID |
| `/customers/:id` | `PATCH` | Partially updates an exisiting customer by ID. |
| `/customers/:id` | `DELETE` | Deletes an existing customer. |

//seating

| `/seating` | `GET` | Retrieves a list of seating furniture. |
| `/seating/:id` | `GET` | Retrieves a specific stock item by ID. |
| `/seating/` | `POST` | Creates new seating furniture. |
| `/seating/:id` | `PUT` | Update/modify furniture by ID. |
| `/seating/:id` | `PATCH` | Partially updates futinure by ID. |
| `/seating/:id` | `DELETE` | Deletes furniture for seating. |
