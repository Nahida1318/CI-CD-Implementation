const request = require('supertest');
const { app} = require('../index');

describe('GET /', () => {
    // afterAll(() => {
    //     server.close(); // Close the server after all tests
    // });

    it('should return Hello World', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello World!');
        expect(response.statusCode).toBe(200);
    });

    // it('should fail on incorrect path', async () => {
    //     const response = await request(app).get('/wrong-path');
    //     expect(response.statusCode).toBe(404); // Failing case
    // });
});
