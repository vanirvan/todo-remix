import { prisma } from "~/lib/db/prisma";

export async function addTodoAction(todo: string) {
  try {
    await prisma.todo.create({
      data: {
        title: todo,
      },
    });
  } catch (e) {
    console.error("ADD TODO FAILED", e);
  } finally {
    await prisma.$disconnect();
  }
}
