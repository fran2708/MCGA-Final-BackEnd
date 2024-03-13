# MCGA Final BackEnd

REST API with connection to a MongoDB database

Made only using JavaScript

## Installation

Open a terminal on the project root and run

> npm install

## .env configuration

Create a .env file, like the one provided as example

> MONGODB_URL = mongodb+srv://<username>:<password>@mcga-final.0uikbae.mongodb.net/?retryWrites=true&w=majority&appName=MCGA-Final

Enter your credentials replacing <username> and <password>

Specify the name of your database before the '?'

[More info on MongoDB's connection format](https://www.mongodb.com/docs/manual/reference/connection-string/)

## Run the application

After installing, simply run the command

> npm run dev

## Eslint

This repo uses Eslint to keep code clean and organized

You need to install the Eslint extension on VSCode to make use of the configuration file provided

You can finde the application [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[More info on Eslint](https://eslint.org/)

## Important libraries used

- Build
  - [ExpressJS](https://expressjs.com)
  - [Mongoose](https://mongoosejs.com/)
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [cors](https://www.npmjs.com/package/cors)
- Development
  - [nodemon](https://www.npmjs.com/package/nodemon)
