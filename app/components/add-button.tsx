import { useState } from "react";

import { Button } from "~/components/ui/button";
import { TodoDialog } from "~/components/todo-dialog";

export function AddButton() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setDialogOpen(true)}
        className="bg-primary text-white hover:bg-primary-400/90"
      >
        Add new TODO
      </Button>
      <TodoDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
