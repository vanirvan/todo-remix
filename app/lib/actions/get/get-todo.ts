import { prisma } from "~/lib/db/prisma";

export async function getTodoAction() {
  const getTodo = await prisma.todo.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  return getTodo;
}
