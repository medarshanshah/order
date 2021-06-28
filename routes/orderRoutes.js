const { Router } = require('express')
const { requireAuth } = require('../middleware/authmiddleware')
const orderController = require('../controller/orderController')

const orderRouter = Router()


/**
 * @swagger
 * components:
 *      schemas:
 *          order:
 *              type: object
 *              required:
 *                  - paymentId
 *              properties:
 *                  orderId:
 *                      type: string
 *                      description: The auto generated unique id of the order
 *                  orderDate:
 *                      type: string
 *                      description: The auto generated date of the order
 *                  cartId:
 *                      type: Number
 *                      description: The quantity of products added into cart
*/

/**
 * @swagger
 * tags: 
 *      name: Order
 *      description: The order managing API.
 */


/**
 * @swagger
 * /order:
 *  get:
 *      summary: Request to get the order of the current logged in User
 *      tags: [Order]
 *      responses:
 *          '200':
 *              description: A successful response
 *          '400':
 *              description: Bad Request. Error in Retrieving products
 */
orderRouter.get('/', requireAuth, orderController.get_orders)

/**
 * @swagger
 * /order/{id}:
 *  get:
 *      summary: Request to get the particular order of the current logged in User
 *      tags: [Order]
 *      parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                  type: string
 *      responses:
 *          '200':
 *              description: A successful response
 *          '400':
 *              description: Bad Request. Error in Retrieving products
 */
orderRouter.get('/:id', requireAuth, orderController.get_orderById)

/**
 * @swagger
 * /order:
 *  post:
 *      summary: Request to create order
 *      tags: [Order]
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              paymentId:
 *                                  type: string
 *      parameters:
 *            - in: body
 *              name: paymentId
 *              required: true
 *              description: Enter payment Id
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              paymentId:
 *                                  type: string
 *          '400':
 *              description: Bad Request. Error in retrieving order
 */
orderRouter.post('/', requireAuth, orderController.post_createOrder)

/**
 * @swagger
 * /order:
 *  delete:
 *      summary: Request to cancel order
 *      tags: [Order]
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              orderId:
 *                                  type: string
 *      parameters:
 *            - in: body
 *              name: Order Id
 *              required: true
 *              description: The orderId id 
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              orderId:
 *                                  type: string
 *          '400':
 *              description: Bad Request. Error in deleting
 */
orderRouter.delete('/', requireAuth, orderController.delete_cancelOrder)

module.exports = orderRouter

