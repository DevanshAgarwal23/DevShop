import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import products from './data/products.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'


dotenv.config()




const app = express()



app.get('/', (req,res) => {
    res.send("Server is running")
}) 

app.use('/api/products', productRoutes)


const PORT = process.env.PORT || 5000


const connectServer = async (PORT) => {
    await connectDB()

    app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`.yellow.bold ))
}

connectServer(PORT)
