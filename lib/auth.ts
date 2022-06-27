import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { ACCESS_TOKEN: token } = req.cookies;
    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        user = await prisma.user.findUnique({
          where: { id },
        });
        if (!user) {
          throw new Error("Invalid credentials");
        }
      } catch (err) {
        res.status(401).json({ error: "Invalid credentials" });
      }
      return handler(req, res, user);
    }
    res.status(401).json({ error: "Invalid credentials" });
  };
};

export const validateToken = (token) => {
  const user = jwt.verify(token, process.env.JWT_SECRET);
  return user;
};
