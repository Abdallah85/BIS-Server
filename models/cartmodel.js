const mongoose = require('mongoose');

// create Schema 
const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cartItems: [
        {
            product: {type: mongoose.Schema.Types.ObjectId,required: true },
            quantity: {type: Number,default: 1 },
            price : {type:Number,required:true}
        }
    ]
}, { timestamps: true }
);


//create model 
const CartModel = mongoose.model('Cart', cartSchema)

module.exports = CartModel;