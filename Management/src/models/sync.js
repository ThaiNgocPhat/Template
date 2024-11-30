import User from './user.js';
import UserAddress from './user_address.js';
import UserPayment from './user_payment.js';
import Product from './product.js';
import ProductCategory from './product_category.js';
import ProductInventory from './product_inventory.js';
import Discount from './discount.js';
import OrderDetails from './order_details.js';
import OrderItems from './order_items.js';
import PaymentDetails from './payment_details.js';
import ShoppingSession from './shopping_session.js';
import CartItem from './cart_item.js';
import sequelize from '../config/db.js';

User.hasMany(UserAddress, { foreignKey: 'user_id' });
User.hasMany(UserPayment, { foreignKey: 'user_id' });
User.hasMany(OrderDetails, { foreignKey: 'user_id' });
User.hasMany(ShoppingSession, { foreignKey: 'user_id' });

UserAddress.belongsTo(User, { foreignKey: 'user_id' });
UserPayment.belongsTo(User, { foreignKey: 'user_id' });
OrderDetails.belongsTo(User, { foreignKey: 'user_id' });
ShoppingSession.belongsTo(User, { foreignKey: 'user_id' });

Product.belongsTo(ProductCategory, { foreignKey: 'category_id' });
Product.belongsTo(ProductInventory, { foreignKey: 'inventory_id' });
Product.belongsTo(Discount, { foreignKey: 'discount_id' });

OrderDetails.hasMany(OrderItems, { foreignKey: 'order_id' });
OrderDetails.hasOne(PaymentDetails, { foreignKey: 'payment_id' });

OrderItems.belongsTo(OrderDetails, { foreignKey: 'order_id' });

ShoppingSession.hasMany(CartItem, { foreignKey: 'session_id' });

CartItem.belongsTo(ShoppingSession, { foreignKey: 'session_id' });
CartItem.belongsTo(Product, { foreignKey: 'product_id' });

sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
}).catch(err => {
    console.error('Unable to create tables, shutting down...', err);
});

export {
    User,
    UserAddress,
    UserPayment,
    Product,
    ProductCategory,
    ProductInventory,
    Discount,
    OrderDetails,
    OrderItems,
    PaymentDetails,
    ShoppingSession,
    CartItem
};
