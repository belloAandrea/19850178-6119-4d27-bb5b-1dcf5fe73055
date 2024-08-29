import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '../../../utils/db'; // utility to retrieve user from db

export default async function login(req, res) {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);

  if (user && (await bcrypt.compare(password, user.password))) {
    // Set session or token
    return res.json({ success: true });
  }
  return res.status(401).json({ success: false });
};