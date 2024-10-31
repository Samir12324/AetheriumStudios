import prisma from "@/lib/prismaDb";
//export const dynamic = "force-dynamic";

export async function GET(req: NextApiRequest) {
  const data = await prisma.post.findMany();
  return Response.json(data);
}
