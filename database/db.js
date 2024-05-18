import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config();
const Connection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-l1ecaie-shard-00-00.esmljmf.mongodb.net:27017,ac-l1ecaie-shard-00-01.esmljmf.mongodb.net:27017,ac-l1ecaie-shard-00-02.esmljmf.mongodb.net:27017/?ssl=true&replicaSet=atlas-rtsj96-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log('Database Connected Succesfully');
    } catch (e) {
        console.log(e);
    }
};

export default Connection;