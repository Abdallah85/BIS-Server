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
    return totalPrice;
  };
  exports.addProductToCart = asyncHandler(async (req, res, next) => {
    const { productId } = req.body;
    const product = await Product.findById(productId);
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
        // create cart fot logged user with productId
        cart = await Cart.create({
          user: req.user._id,
          cartItems: [{ product: productId,  price: product.price }],
        });
        //update product quantity and check if the product exist
        const productIndex = cart.cartItems.findIndex(
            (item) => item.product.toString() === productId 
            );
            if (productIndex > -1) {
                const cartItem = cart.cartItems[productIndex];
                cartItem.quantity += 1;
                cart.cartItems[productIndex] = cartItem;
            } else {
                cart.cartItems.push({ product: productId, price: product.price });
              }
            }
            //calculat total cart price when add new product
            calcTotalCartPrice(cart);
            await cart.save();

            res.status(200).json({
              status: 'success',
              message: 'Product added to cart successfully',
              numOfCartItems: cart.cartItems.length,
              data: cart,
            });
        });
