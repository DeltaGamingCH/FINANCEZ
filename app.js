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



//UserData MongoDB
const User = require('./models/User')

//Error Messages
const messageInvalidUsernameorPass = 'Invalid Username or Password.';
const messageError = 'An unexpected error occured. Please try again later.'

//Register
app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            req.flash('error', 'Username or email already exists.');
            return res.redirect('/register');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        req.flash('success', 'User registered successfully.');
        res.redirect('/login');
    } catch (error) {
        console.error('Error registering new user.', error);
        req.flash(error, messageError);
        res.redirect('/register');
    }
})


//Login
app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { usernameOrEmail, password } = req.body;
    try {
        const user = await User.findOne([{ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] }]);
        if (!user) {
            req.flash('error', messageInvalidUsernameorPass);
            return res.redirect('/login');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            req.flash('error', messageInvalidUsernameorPass);
            return res.redirect('/login');
        }
        req.session.UserId = user._id;
        req.flash('success', 'Logged in Successfully.');
        res.redirect('/');
    } catch (error) {
        console.error('Error logging in:', error);
        req.flash('error', messageError);
        res.redirect('/login');
    }
});


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