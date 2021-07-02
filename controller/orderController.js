const Order = require('../models/Order')
const axios = require('axios')

module.exports.get_orders = async (req,res) => {
    cartId = req.cookies['cartId']

    try {
        const orders = await Order.find({cartId})
        res.status(200).json(orders)
    } catch (err) {
        res.status(400).send('Unable to find orders')
    }
}

module.exports.get_orderById = async (req,res) => {
    let orderId = req.params.id
    console.log(orderId)
    
    try {
        const order = await Order.find({_id:orderId})
        res.status(200).json(order)
    } catch (err) {
        res.status(400).send('Unable to find order')
    }
}

module.exports.post_createOrder = async (req,res) => {
    let cartId = req.cookies['cartId']
    let paymentId= req.body.paymentId
    let userId = req.cookies['userId']

    try {
        const order = await Order.create({ cartId, paymentId, userId })             
        console.log(order)
        res.status(201).json(order)
        
    } catch (err) {
        console.log('Could not create order')
        res.status(400).send(err)
    }
}

module.exports.delete_cancelOrder = async (req,res) => {
    let orderId = req.body.orderId
    try {
        const order = await Order.findByIdAndRemove({ _id: orderId })
        res.status(200).send('Your order Cancelled')
    } catch (err) {
        res.status(400).send('Unable to cancel order')
    }
}