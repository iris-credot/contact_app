# Contact App API

This is the documentation for the Contact App API, which allows you to manage contacts through HTTP requests.

## Getting Started

To get started using the Contact App API, follow the instructions below.

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:

2. Navigate into the project directory:


3. Install dependencies:


4. Configure environment variables by creating a `.env` file in the root directory:


### Running the Server

To start the server, run:


The server will start running at `http://localhost:3000`.

## API Endpoints

### Create a Contact


Request Body:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "workPhone": "987-654-3210",
  "address": "123 Main St, City",
  "company": "ABC Inc.",
  "profilePicture": "https://example.com/profile.jpg"
}
GET /api/contacts
GET /api/contacts/:id
PUT /api/contacts/:id
{
  "email": "newemail@example.com"
}

DELETE /api/contacts/:id
RESPONSE FORMAT

{
  "_id": "6111cde5e5bcfca04c849f94",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "workPhone": "987-654-3210",
  "address": "123 Main St, City",
  "company": "ABC Inc.",
  "profilePicture": "https://example.com/profile.jpg",
  "createdAt": "2021-08-09T13:27:01.098Z",
  "updatedAt": "2021-08-09T13:27:01.098Z"
}

