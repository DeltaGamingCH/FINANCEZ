const app = require('../app');
const User = require('../models/User');
const mongodblink = require('../config/mongodblink');

jest.mock('mongoose');

jest.mock('../models/User');

mongoose.connect(mongodblink).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

describe('Login functionality', () => {
    aftereach(() => {
        jest.clearAllMocks();
    });

    it('should successfully login with correct credentials', async () => {
        User.findOne.mockResolvedValueOnce({
            username: 'test', 
            password: 'hashedpassword'
        });

        const response = await request(app)
            .post('/login')
            .send({ usernameOrEmail: 'test', password: 'testpass' });

        expect(response.status).toBe(302);
        expect(response.headers.location).toBe('/dashboard');
    });
});