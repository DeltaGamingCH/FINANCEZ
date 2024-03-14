const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const bcrypt = require('bcrypt');
const mongodblink = require('./config/mongodblink');

const app = express();
const port = 3000;

const mongoose = require('mongoose');

//MongoDB Connection
mongoose.connect(mongodblink).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
    })
);

//Index
app.get('/', (req, res) => {
    res.render('index');
});

//Login
app.get('/login', (req, res) => {
    res.render('login')
})

//UserData
const User = mongoose.model(
    'User', 
    {
        username: String, 
        email: String,
        password: String,
    },
    'User'
);

app.get('/api/v1/users', async (req, res) => {
    try {
        const allUsers = await User.find();

        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.post('/api/v1/users', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        console.log(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Dashboard
/*
app.get('/dashboard', (req, res => {
    if (req.session.username) {
        res.render('index')
    } else {
        res.send('You need to login');
    }
}))*/

app.listen(port, () => {
    console.log('Server is running on port:', port);
});