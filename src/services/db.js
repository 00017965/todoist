import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || '';
    const MONGODB_CA_PATH = process.env.MONGODB_CA_PATH || '';
    
    const conn = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      tlsCertificateKeyFile: MONGODB_CA_PATH,
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Error: ${error.message}`);
  }
};

export default connectDB; 