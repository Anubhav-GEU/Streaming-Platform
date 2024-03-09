import mongoose from "mongoose";
import {DB_NAME} from '../constants.js';


const connectDB = async()=>{
    try {
        // mongoose return a connection instance so we can store in any variable
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);
        // log connectionInstance.
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
        // process is the reference of current object running present in node.
        process.exit(1);
    }
}
export default connectDB;