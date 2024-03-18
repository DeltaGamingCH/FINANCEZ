# FINANCEZ 
This is FINANCEZ, *(or FinanceZ)*, *(pronounced Financé or Finance Z)* is an application used to track your finances seperately from your e-banking. 

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

## User Interface & User Experience
### UI / UX
Financez should be minimal, modern and easy to use. Users should have a haptic feeling when using the app. The use of the app should be easy to understand and act as expected. 

### Typography
The fonts used 'Metropolis' belongs to the Unlicensed font License and can be viewed [here](https://google.com). 

### Iconography
All icons seen in Financez is created by me, through Figma. 
Please do not use, share or restribute any of the icons you see on the platform, without contacting me first. 

