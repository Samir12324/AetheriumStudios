import { NextApiRequest, NextApiResponse } from "next";

import { getServerSession } from "next-auth";
import prisma from "@/lib/prismaDb";
import { authOptions } from "@/lib/auth";

export async function POST(req: NextApiRequest) {
  try {
    const session = await getServerSession(authOptions);
    console.log(session?.user.id);

    const data = await req?.json();

    const post = await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        published: data.published || true,
        author: { connect: { id: session?.user.id } },
      },
    });

    console.log(post);

    return Response.json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    return Response.json({
      message: "Error creating post",
      error: error.message,
    });
  }
}
