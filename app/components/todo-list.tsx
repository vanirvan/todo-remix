import { TodoItem } from "~/components/todo-item";
interface ComponentProps {
  todos: {
    id: string;
    title: string;
    isCompleted: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
}

export function TodoList({ todos }: ComponentProps) {
  return (
    <div className="relative">
      {todos &&
        (todos.length > 0 ? (
          <ul className="flex flex-col gap-2">
            {todos.map((todo, index) => (
              <TodoItem key={index} data={todo} />
            ))}
          </ul>
        ) : (
          <div className="flex w-full flex-col items-center justify-center py-8">
            <img src="empty.svg" alt="empty todo" className="h-72 w-72" />
            <span className="text-lg font-medium">
              Nothing TODO, congratulations
            </span>
          </div>
        ))}
    </div>
  );
}
