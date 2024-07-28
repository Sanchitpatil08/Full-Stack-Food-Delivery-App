import orderModel from "../models/orderModel.js";
import userModel from '../models/userModel.js';
import stripe from 'stripe';



// Placing User order from frontend

const placeOrder = async (req, res) => {
    
    try {
        const newOrder = new orderModel({
            userId: req.body.userID,
            items: req.body.items,
            ammount: req.body.ammount,
            address:req.body.address
        })

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userID, { cartData: {} });
        
        const line_items = req.body.items.map((i) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name
                },
                unit_amount:item.price*100*80
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name:"Delivery Charges"
                },
                unit_amount:2*100*80
            },
            quantity: 1
        })

        const session = await stripe.Checkout.sessions.create({
            
        })
    } catch (error) {
        
    }
}


export {placeOrder}