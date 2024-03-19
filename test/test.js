const axios = require('axios');
const mongoose = require('mongoose');

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://databaseUser:FinancezDB0804@financezcluster.4fcese5.mongodb.net/?retryWrites=true&w=majority&appName=FinancezCluster')
    .then(() => {
        console.log('Connected to MongoDB');
        // Once connected, proceed with sending the HTTP request
        sendHttpRequest();
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define a function to send the HTTP request
async function sendHttpRequest() {
    try {
        // Define the data you want to send in the POST request
        const postData = {
            title: 'Test Data',
            amount: 100,
            userId: 'testuserid'
        };

        // Make the HTTP POST request using axios
        const response = await axios.post('http://localhost:3000/dashboard/add', postData);

        // Check if the request was successful
        if (response.status === 200 && response.data.message === 'Data created successfully') {
            console.log('Test passed: Data created successfully');
        } else {
            console.error('Test failed: Data creation failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}