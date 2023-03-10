// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/lib/prisma";
import { UserResponse } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserResponse>
) {
  const userId = req.query.id;
  const { method } = req;

  switch (method) {
    case "DELETE":
      try {
        await prisma.users.delete({
          where: {
            // convert to a number since our db uses number to store id
            id: Number(userId),
          },
        });

        res.status(201).json({
          message: `Successfully delete user ${userId}`,
        });
      } catch (e) {
        console.log(e);
      }
      break;
    case "PATCH":
      const { first_name, last_name, email } = req.body;

      try {
        await prisma.users.update({
          where: {
            id: Number(userId),
          },
          data: {
            // If any field is null, don't update and instead use the data already in the database
            first_name: first_name || undefined,
            last_name: last_name || undefined,
            email: email || undefined,
          },
        });
        res.status(200).json({
          message: `Successfully updated user ${userId}`,
        });
      } catch (error) {
        console.log(`Error while updating user: ${error}`);
      }
      break;

    default:
      res.status(405).end(`Method ${method} not allowed`);
  }
}
