const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const Order = require('../models/Order')


// Assertion style ... should
chai.should()
chai.use(chaiHttp)

describe('Order API', () => {
    /**
     * Test the GET Route
     */
    describe('GET /order', () => {
        it('It should get current orders by user', () => {
            chai.request(app)
                .get('/order')
                .then((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('array')
                   // response.body.length.should.be.eq(3)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })
    })

    describe('GET /order/:id', () => {
        it('It should get current individual orders by user', () => {
            let orderId = "60da2689aba1a02588bded80"
            chai.request(app)
                .get('/order'+orderId)
                .then((err, response) => {
                    response.should.have.status(200)
                    response.body.length.should.be.eq(1)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

        it('It should get current individual orders by user', () => {
            let orderId = "60da2689aba1a02588bded80"
            chai.request(app)
                .get('/order'+orderId)
                .then((err, response) => {
                    response.should.have.status(200)
                    response.body.length.should.be.eq(1)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

        it('It should get current individual orders by user', () => {
            let orderId = "60da2689aba1a02588bded80"
            chai.request(app)
                .get('/order'+orderId)
                .then((err, response) => {
                    response.should.have.status(200)
                    response.body.length.should.be.eq(1)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

        it('It should not get this non existing order user', () => {
            let orderId = "60da2689aba1a02588bded80"
            chai.request(app)
                .get('/order'+orderId)
                .then((err, response) => {
                    response.should.have.status(400)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

    })

    /**
     * Test the POST Route
     */
     describe('POST /order', () => {
        it('It should create order from the items in the cart of user', () => {
            chai.request(app)
                .post('/order')
                .send({
                    paymentId: "pay_HSRbvuGUWR9ksp"
                })
                .then((err, response) => {
                    response.should.have.status(200)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

        it('It should not create order from the items in the cart of user', () => {
            chai.request(app)
                .post('/order')
                .send({
                    paymentId: "f21g2f1dgr"
                })
                .then((err, response) => {
                    response.should.have.status(400)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })
    })

    /**
     * Test the DELETE Route
     */
     describe('DELETE /order', () => {
        it('It should cancel order for the user', () => {
            chai.request(app)
                .delete('/order')
                .send({
                    orderId: "60da2689aba1a02588bded80"
                })
                .then((err, response) => {
                    response.should.have.status(200)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })

        it('It should not cancel order for the non-existing orderId', () => {
            chai.request(app)
                .delete('/order')
                .send({
                    orderId: "12er1fef12g5r5rg3r5g"
                })
                .then((err, response) => {
                    response.should.have.status(400)
                })
                .catch(err => {
                    console.error(err);
                    throw err; 
                });
        })
    })
})