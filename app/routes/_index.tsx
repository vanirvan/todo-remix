import {
  redirect,
  type ActionFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { AddButton } from "~/components/add-button";
import { TodoList } from "~/components/todo-list";

import { validateTodo } from "~/lib/validation/input-todo";
import { addTodoAction } from "~/lib/actions/post/add-todo";
import { getTodoAction } from "~/lib/actions/get/get-todo";
import { deleteTodo } from "~/lib/actions/delete/deleteTodo";

export const meta: MetaFunction = () => {
  return [
    { title: "TODO: REMIX" },
    { name: "description", content: "Simple TODO app with REMIX!" },
  ];
};

export async function loader() {
  const todos = await getTodoAction();

  return todos;
}

export default function IndexPage() {
  const todos = useLoaderData<typeof loader>();

  return (
    <>
      <div className="relative mx-auto flex w-full max-w-3xl flex-col gap-6 p-6">
        <div className="flex w-full justify-end">
          <AddButton />
        </div>
        <TodoList todos={todos} />
      </div>
    </>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  if (request.method === "POST") {
    const validate = validateTodo(formData.get("title") as string);
    if (!validate.status) {
      throw new Error(validate.error[0]);
    }

    await addTodoAction(validate.data);
  }

  if (request.method === "DELETE") {
    await deleteTodo(formData.get("id") as string);
  }

  return redirect("/");
}
