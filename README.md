# FINANCEZ 
This is FINANCEZ, *(or FinanceZ)*, *(pronounced Financé or Finance Z)* is an application used to track your finances seperately from your e-banking. 

## Introduction
FINANCEZ is a school project, laying focus on the app's backend, with NodeJS, Express, and the templating tool EJS. 
As of 3/19/2023, Financez is not a fully fleshed-out product. It should simply visualize the back-end, through simple Express and templating. 
### Visit Financez
You can check out Financez for yourself, over at [financez.zngr-dynamics.ch](https://financez.zngr-dynamics.ch/). 
The project is hosted on [Render](https://render.com) and displayed on a custom domain. 

### Developer Note
Are you a developer and would like to try it out? Follow the steps below to get it working. 
#### Download Node Dependencies
In order for the platform to work, install the following node-packages.
Make sure you have NodeJS installed on your local machine. 
<details>
<summary><b>MongoDB</b> <code>npm i mongodb mongoose</code></summary>
<br>
Used to connect with an external database, to be able to login, or create data. 
</details>
<details>
<summary><b>EJS</b> <code>npm i ejs</code></summary>
<br>
Templating engine, used to display data on the client.  
</details>
<details>
<summary><b>Express</b> <code>npm i express express-flash express-session</code></summary>
<br>
Complete backend logic bases on Express, like sessions, and routing.   
</details>
<details>
<summary><b>Axion</b> <code>npm i axion</code></summary>
<br>
Used to redirect to another page after dataset deletion.    
</details>
<details>
<summary><i>(optional)</i> <b>Nodemon</b> <code>npm i nodemon --save-dev</code></summary>
<br>
Nodemon is used to continously run the app/server, when editing the code. Makes developing easier. This is not needed to run the application
</details>
<details>
<summary><i>(optional)</i> <b>JEST & Supertest</b> <code>npm i jest supertest --save-dev</code></summary>
<br>
Used for Unit Testing inside the application, as required by the school project requirements. This is not needed to run the application. 
</details>

#### MongoDB Connection

- ~~Create a config folder in the main directory.~~
- ~~Create a `mongodblink.js` file inside your created folder and add the code below.~~
- ~~`const mongodbLink = 'mongodb+srv://<username>:<password>@<clusterLink>';
module.exports = mongodbLink;`~~
- ~~Make sure to replace the url `username`, `password`, and `clusterLink` with your own MongoDB cridentials.~~


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
All icons seen in Financez is created by me through Figma. 
Please do not use, share or restribute any of the icons you see on the platform, without contacting me first. 

