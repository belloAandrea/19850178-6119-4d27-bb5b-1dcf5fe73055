import { connectToDatabase } from './mongodb'; // Connect to your MongoDB instance

export const createUser = async (userData) => {
  const db = await connectToDatabase();
  const result = await db.collection('users').insertOne(userData);
  return result.ops[0];
};

export const getUserByEmail = async (email) => {
  const db = await connectToDatabase();
  return await db.collection('users').findOne({ email: email });
};