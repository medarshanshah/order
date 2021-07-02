require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const orderRoutes = require('./routes/orderRoutes')
const cookieParser = require('cookie-parser');
const { checkUser } = require('./middleware/authmiddleware')

const PORT = process.env.PORT
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


//Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Order API',
            version: '1.0.0',
            description: 'Order Microservice',
            contact: {
                name: "Darshan"
            },
            servers: ['http://localhost:5500']
        }

    },
    apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))


// Atlas Database Connection
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true,useFindAndModify:false, useUnifiedTopology: true, useCreateIndex:true })

app.listen(PORT, console.log('Listening to order service at port '+PORT))

// Routes
app.get('/',(req,res) => res.send('Hello World from order service'))
app.use('/order',orderRoutes)

module.exports = app