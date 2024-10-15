import prisma from "@/lib/prismaDb";
export async function POST(req, res) {
  const body = await req.json();
  const data = await prisma.comment.create({
    data: {
      content: body.comment,
      authorId: body.author.authorId,
      postId: body.postid,
    },
  });

  return Response.json(data);
}
