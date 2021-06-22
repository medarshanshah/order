const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderDate: Date(),
    cartId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    paymentId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    total: Number
})

const Order = mongoose.model('order', orderSchema)

module.exports = Order