import express from 'express'
import { addTocart, removeFromCart, getcart } from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post('/add',authMiddleware, addTocart);

cartRouter.post("/remove",authMiddleware, removeFromCart);

cartRouter.post('/get',authMiddleware, getcart);

export default cartRouter;
