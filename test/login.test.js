const request = require('supertest');
const bcrypt = require('bcrypt');
const app = require('../app'); // Assuming your app file is in the parent directory
const User = require('../models/User'); // Assuming the User model is defined in this file

const port = 3001;

describe('POST /register', () => {
  test('registers a new user successfully', async () => {
    // User information for registration
    const userData = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'testpassword'
    };

    // Simulate registering a new user by sending a POST request to the /register endpoint
    const response = await request(app)
      .post('/register')
      .send(userData);

    // Check if the response redirected to the login page after successful registration

    // Check if the user is created in the database
    const registeredUser = await User.findOne({ username: userData.username });
    expect(registeredUser).toBeDefined();
    expect(registeredUser.username).toBe(userData.username);
    expect(registeredUser.email).toBe(userData.email);

    // Check if the password is hashed
    const passwordMatch = await bcrypt.compare(userData.password, registeredUser.password);
    expect(passwordMatch).toBe(true);
  });
});