const categoryRoute = require('./categoryRoute');
const userRoute = require('./userRoute');
const authRoute = require('./authRoute');
const wishlistRoute = require('./wishlistRoute');
const addressRoute = require('./addressRoute');

const mountRoutes = (app) => {
  app.use('/api/v1/categories', categoryRoute);
  app.use('/api/v1/users', userRoute);
  app.use('/api/v1/auth', authRoute);
  app.use('/api/v1/wishlist', wishlistRoute);
  app.use('/api/v1/addresses', addressRoute);
};

module.exports = mountRoutes;
