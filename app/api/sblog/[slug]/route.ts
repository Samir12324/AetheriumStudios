import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaDb";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const lastPart = req?.url.split("/sblog/")[1];
  console.log(lastPart); // Output: cm27p7p8c0004nnrlu8nabo5t

  // Example use case: you can fetch something from Prisma using the slug
  const data = await prisma.post.findUnique({
    where: {
      id: lastPart,
    },
    include: {
      author: true,
    },
  });

  console.log(data);

  if (!data) {
    return Response.json({ message: "Not found" });
  }

  return Response.json(data);
}
