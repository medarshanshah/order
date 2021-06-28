const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderDate: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now
    },
    cartId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

const Order = mongoose.model('order', orderSchema)

module.exports = Order