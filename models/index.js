const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Banner = require('./banner');
const Product = require('./product');
const DeliverAddress = require('./deliver_address');
const Order = require('./order');
const Cart = require('./cart');
const Category = require('./category');
const Coupon = require('./coupon');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Banner = Banner;
db.Product = Product;
db.DeliverAddress = DeliverAddress;
db.Order = Order;
db.Cart = Cart;
db.Category = Category;
db.Coupon = Coupon;

User.init(sequelize);
Banner.init(sequelize);
Product.init(sequelize);
DeliverAddress.init(sequelize);
Order.init(sequelize);
Cart.init(sequelize);
Category.init(sequelize);
Coupon.init(sequelize);

User.associate(db);
Banner.associate(db);
Product.associate(db);
DeliverAddress.associate(db);
Order.associate(db);
Cart.associate(db);
Category.associate(db);
Coupon.associate(db);

module.exports = db;
