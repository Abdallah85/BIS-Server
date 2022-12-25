const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/ApiErrors');
const Product = require('../models/productmodel');
const Cart = require('../models/cartmodel');
//calculate total cart price
const calcTotalCartPrice = (cart) => {
    let totalPrice = 0;
    cart.cartItems.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    cart.totalCartPrice = totalPrice;
    cart.totalPriceAfterDiscount = undefined;
    return totalPrice;
  };