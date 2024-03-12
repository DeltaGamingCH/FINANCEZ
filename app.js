
const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;


/*const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];*/

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
    })
);

app.get('/', (req,res) => {
    res.render('index');
});




app.listen(port, () => {
    console.log('Server is running on port:', port);
});