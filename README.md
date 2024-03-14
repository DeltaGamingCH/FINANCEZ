# FINANCEZ 
This is FINANCEZ, *(or FinanceZ)*, *(pronounced Financé or Finance Z)* a tool used to track your finances seperately from your e-banking or any other finance tools. 

## Introduction
FINANCEZ is a school project, laying focus on the app's backend, with NodeJS, Express, and the templating tool EJS. 
As of right now 3/14/2024, FinanceZ is not 

### Developer Note
Are you a developer and would like to try it out? Follow the steps below to get it working. 
#### Download Node Dependencies
In order for the platform to work, install the following node-packages.
Make sure you have NodeJS installed on your local machine. 
- **MongoDB** `npm i mongodb`
- **EJS** `npm i ejs`
- **Express** `npm i express`
- **Express Flash** `npm i express-flash`
- **Express Session** `npm i express-session`
- *(optional)* **Nodemon** `npm i --save-dev nodemon`

#### MongoDB Connection
- Make sure you create a config folder in the main directory.
- Create a `mongodblink.js` and add the code below. 
- `const mongodbLink = 'mongodb+srv://<username>:<password>@<clusterLink>';
module.exports = mongodbLink;`
- Make sure to replace the url `username`, `password`, and `clusterLink` with your own MongoDB cridentials. 
