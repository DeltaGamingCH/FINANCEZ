# FINANCEZ 
This is FINANCEZ, *(or FinanceZ)*, *(pronounced Financé or Finance Z)* is an application used to track your finances seperately from your e-banking. 

## Introduction
FINANCEZ is a school project, laying focus on the app's backend, with NodeJS, Express, and the templating tool EJS. 
As of 3/19/2023, Financez is not a fully fleshed-out product. It should simply visualize the back-end, through simple Express and templating. 

### Developer Note
Are you a developer and would like to try it out? Follow the steps below to get it working. 
#### Download Node Dependencies
In order for the platform to work, install the following node-packages.
Make sure you have NodeJS installed on your local machine. 
<details>
<summary><b>MongoDB</b> <code>npm i mongodb mongoose</code></summary>
  Used to connect with an external database, to be able to login, or create data. 
</details>
<details>
<summary><b>EJS</b> <code>npm i ejs</code></summary>
  Templating engine, used to display data on the client.  
</details>
<details>
<summary><b>Express</b> <code>npm i express express-flash express-session</code></summary>
  Complete backend logic bases on Express, like sessions, and routing.   
</details>

- **MongoDB** `npm i mongodb mongoose`
- **EJS** `npm i ejs`
- **Express** `npm i express`
- **Express Flash** `npm i express-flash`
- **Express Session** `npm i express-session`
- **Axion** `npm i axion`
- *(optional)* **Nodemon** `npm i --save-dev nodemon`
- *(optional)* **JEST & Supertest** `npm i --save-dev supertest jest`

*More information on the individual packets and where they're used is coming soon.*

#### MongoDB Connection
~~
- Create a config folder in the main directory.
- Create a `mongodblink.js` file inside your created folder and add the code below. 
- `const mongodbLink = 'mongodb+srv://<username>:<password>@<clusterLink>';
module.exports = mongodbLink;`
- Make sure to replace the url `username`, `password`, and `clusterLink` with your own MongoDB cridentials.
~~
**This no longer works, as moved to dotenv variables. Please hold tight while I rework this section.**

### Testing
When testing, make sure not to run both the server and the test. 
Simply run the test, as it runs the server simultaniously. Attempting to start the test while the server is running, will lead to a failed test. 
- Run the test by using `npx jest login.test.js` in your terminal. 

## User Interface & User Experience
### UI / UX
Financez should be minimal, modern and easy to use application. Users should have a haptic feeling when using the app. The use of the app should be easy to understand and act as expected. 

### Typography
The fonts used 'Metropolis' belongs to the Unlicensed font License and can be viewed [here](https://google.com). 

### Iconography
All icons seen in Financez is created by me, through Figma. 
Please do not use, share or restribute any of the icons you see on the platform, without contacting me first. 

