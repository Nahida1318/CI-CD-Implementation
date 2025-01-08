const request = require('supertest');
const { app} = require('../index');

describe('GET /', () => {
    // afterAll(() => {
    //     server.close(); // Close the server after all tests
    // });

    it('should return Hello World', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello World2!');
        expect(response.statusCode).toBe(200);
    });

    // it('should fail on incorrect path', async () => {
    //     const response = await request(app).get('/wrong-path');
    //     expect(response.statusCode).toBe(404); // Failing case
    // });
    
      it('should fail if the response is not Hello World!', async () => {
            const res = await request(app).get('/');
            expect(res.text).toBe('Hello Universe!'); // Intentional failing test
          });
});
