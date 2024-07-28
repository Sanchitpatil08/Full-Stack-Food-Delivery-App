import userModel from '../models/userModel.js'

// add items to user cart

const addTocart = async (req, res) => {
    
    try {
        let userData = await userModel.findById(req.body.userId);

        let cartData = await userData.cartData;

        if (!cartData[req.body.itemId]) {

            cartData[req.body.itemId] = 1;
        }
        else {
            
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });

        res.json({ success: true, message: "Added to Cart" });


    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error "})
    }

}



// remove items from user cart


const removeFromCart = async (req, res) => {
    
    try {
        let userData = await userModel.findById(req.body.userId);

        let cartData = await userData.cartData;

        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -= 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });

        res.json({succes:true, message:"Removed From Cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error while removing from cart"})
    }

}


// fetch user cart data

const getcart = async (req, res) => {
    
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({ success: true, cartData });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }

}


export {addTocart, removeFromCart, getcart}