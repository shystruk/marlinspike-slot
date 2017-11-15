let request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const express = require('express');
const config = require('../../../server/config/config');

request = request(`http://${config.hostname}:${config.port}`);

describe('Routes', function() {
    it('Should respond with json', function(done) {
        request
            .get('/pattern')
            .expect(res => {
                expect(res.body, 'res.body is "object"').to.be.an('object');
                expect(res.body, 'res.body has property "digits"').to.have.property('digits');
                expect(res.body.digits, 'res.body.digits is "array"').to.be.an('array');
                expect(res.body, 'res.body has property "result"').to.have.property('result');
                expect(res.body.result, 'res.body.result is "string"').to.be.an('string');
            })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
});
