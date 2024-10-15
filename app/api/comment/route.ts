import prisma from "@/lib/prismaDb";
// model Comment {
//   id        String   @id @default(cuid())
//   content   String
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
//   authorId  String
//   author    User     @relation(fields: [authorId], references: [id])
//   postId    String
//   post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
// }

export async function POST(req, res) {
  const body = await req.json();
  const data = await prisma.comment.create({
    data: {
      content: body.comment,
      authorId: body.author.authorId,
      postId: body.postId,
    },
  });

  return Response.json(data);
}
