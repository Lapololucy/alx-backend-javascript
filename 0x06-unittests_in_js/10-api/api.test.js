const request = require('request');
const { expect } = require('chai');

describe('Deep equality and Post integration testing', () => {
  const API_URL = 'http://localhost:7865';

  it('test response status code of cart/ without id', (done) => {
    request.get(`${API_URL}/cart`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('test response status code of cart/ with positive integer id', (done) => {
    const id = 25;
    request.get(`${API_URL}/cart/${id}`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.equal('Payment methods for cart 25');
      done();
    });
  });

  it('test response status code of cart/ with negative id', (done) => {
    const id = -25;
    request.get(`${API_URL}/cart/${id}`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('test response status code of cart/ with non-numeric id ', (done) => {
    const id = 'axzasd4556fds';
    request.get(`${API_URL}/${id}`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('test output of GET/available_payments', (done) => {
    request.get(`${API_URL}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({
        payment_methods: { credit_cards: true, paypal: false },
      });
      done();
    });
  });

  it('test output of POST/login endpoint', (done) => {
    request.post(
      `${API_URL}/login`,
      { json: { userName: 'Betty' } },
      (err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Betty');
      }
    );
    done();
  });
});
