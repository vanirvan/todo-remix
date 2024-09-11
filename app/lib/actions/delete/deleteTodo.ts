import { prisma } from "~/lib/db/prisma";

export async function deleteTodo(id: string) {
  try {
    await prisma.todo.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    console.error("DELETE TODO ERROR", e);
  } finally {
    await prisma.$disconnect();
  }
}
