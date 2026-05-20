import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
    try{
        await mongoose.connect(config.dbUrl! as string);
        console.log("Database connected successfully");
    }catch(error){
        console.log("Database connection failed", error);
        process.exit(1);
    }
}

export default connectDB;