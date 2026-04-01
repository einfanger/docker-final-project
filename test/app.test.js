const request = require('supertest');
const assert = require('assert');
const app = require('../server');

describe('Bulletin Board App', function () {
  it('should load the homepage', function (done) {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('should return events from the API', function (done) {
    request(app)
      .get('/api/events')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        assert.ok(Array.isArray(res.body));
        done();
      });
  });
});