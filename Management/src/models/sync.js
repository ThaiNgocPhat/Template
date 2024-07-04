import CartItem from './cart_item.js';
import Discount from './discount.js';
import OrderDetail from './order_detail.js';
import OrderItem  from './order_items.js';
import PaymentDetails from './payment_details.js';
import ProductCategory from './product_category.js';
import ProductInventory from './product_inventory.js';
import Product from './product.js';
import ShoppingSession from './shopping_session.js';
import UserPayment from './user_payment.js';
import UserAddress from './user_address.js';
import User from './user.js';


sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});