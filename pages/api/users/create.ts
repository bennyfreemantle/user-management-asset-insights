// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/lib/prisma";
import { UserResponse } from "@/types";
import { Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserResponse>
) {
  const { first_name, last_name, email } = req.body;

  try {
    await prisma.users.create({
      data: {
        first_name,
        last_name,
        email,
      },
    });
    res.status(200).json({ message: `Successfully create a new user` });
  } catch (e) {
    // Constraint checking, if a user has the same email send a response back
    // that tells lets them know a user with this email already exists
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        res.json({
          message: `There is a unique constraint violation, a new user cannot be created with this email`,
        });
      }
    }
  }
}
