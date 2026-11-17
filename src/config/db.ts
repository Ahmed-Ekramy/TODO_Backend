import mongoose from "mongoose";
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI || "");
        console.log(`Connected to MongoDB: ${connect.connection.host}`);

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}
export default connectDb;
