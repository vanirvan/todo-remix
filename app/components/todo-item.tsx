import { TrashIcon } from "lucide-react";
import { useSubmit } from "@remix-run/react";

import { Button } from "~/components/ui/button";

interface ComponentProps {
  data: {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
  };
}

export function TodoItem({ data }: ComponentProps) {
  const submit = useSubmit();

  const handleDelete = () => {
    const formData = new FormData();
    formData.append("id", data.id);
    submit(formData, { method: "DELETE" });
  };

  return (
    <li className="flex items-center justify-between gap-4 rounded-md bg-secondary-200 px-4 py-2">
      <span className="text-lg font-medium">{data.title}</span>
      <Button
        size={"icon"}
        onClick={handleDelete}
        className="bg-primary text-neutral-50 hover:bg-primary-400"
      >
        <TrashIcon className="h-4 w-4" />
      </Button>
    </li>
  );
}
