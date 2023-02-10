// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/lib/prisma";
import { UserResponse } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserResponse>
) {
  try {
    const users = await prisma.users.findMany();
    res
      .status(200)
      .json({ message: `Successfully retrieved all users`, users: users });
  } catch (e) {
    console.log(e);
  }
}
