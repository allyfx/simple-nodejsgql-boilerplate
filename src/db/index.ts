import mongoose from 'mongoose';

export const initializeDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch(err) {
    console.log(err)
    throw new Error('Could not connect with database.')
  }
}