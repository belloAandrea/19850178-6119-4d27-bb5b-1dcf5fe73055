import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { createUser } from '../../../utils/db'; // utility to create user in db

export default async function signup(req, res) {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await createUser({ email, password: hashedPassword });

  return res.status(201).json({ id: newUser.id });
};