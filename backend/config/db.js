import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sanchitpatil81004:Khamgaon81004@cluster0.o7ykxdr.mongodb.net/food-del').then(() => {
        console.log("DB Connected")
    })
}