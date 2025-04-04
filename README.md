# Todoist

Todoist is an app used for managing todos.

## Installation

1. First, clone the repository

    ```bash
    git clone https://github.com/00017965/todoist
    cd todoist
    ```

2. To run it locally, go to mongodb.com and create a mongodb cluster. Choose X509 certificate as a connection method. Grab the certificate and put it inside of the todoist folder.

3. Then, create a .env file and paste MONGODB_URI and MONGODB_CA_PATH there:

    ```env
    MONGODB_URI='<mongo-connection-string>'
    MONGODB_CA_PATH='./X509-cert-1234234234234.pem'
    ```

4. Install `node` packages and run the app:

    ```bash
    npm install
    npm run start
    ```

5. Open localhost:3000 in your browser

## Dependencies

- Nodejs
- Express.js
- Bootstrap
- Mongodb
- EJS

## Links

- [Github link](https://github.com/00017965/todoist)
- [Live demo](localhost:3000)
