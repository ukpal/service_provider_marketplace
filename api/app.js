const express=require('express')
const sellerRoutes=require('./routes/seller.route')

const app=express()


app.use(express.json())

app.use('/api/seller/',sellerRoutes);


module.exports=app