const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Banner = require('./banner');
const Product = require('./product');
const DeliverAddress = require('./deliver_address');
const Order = require('./order');
const OrderDetail = require('./order_detail');

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
db.OrderDetail = OrderDetail;

User.init(sequelize);
Banner.init(sequelize);
Product.init(sequelize);
DeliverAddress.init(sequelize);
Order.init(sequelize);
OrderDetail.init(sequelize);

User.associate(db);
Banner.associate(db);
Product.associate(db);
DeliverAddress.associate(db);
Order.associate(db);
OrderDetail.associate(db);

module.exports = db;
