import { useSubmit, Form } from "@remix-run/react";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "~/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "~/components/ui/drawer";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";

import { validateTodo } from "~/lib/validation/input-todo";

interface CopmonentProps {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TodoDialog({ open, onOpenChange }: CopmonentProps) {
  const submit = useSubmit();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [input, setInput] = useState<{
    title: string;
  }>({ title: "" });

  const [inputError, setInputError] = useState<{
    title: string[];
  }>({ title: [] });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validate = validateTodo(input.title);

    if (validate.status) {
      const formData = new FormData(e.currentTarget);
      formData.append("title", input.title);

      submit(formData, { method: "POST" });
      onOpenChange(false);
    } else {
      setInputError((prev) => ({ ...prev, title: validate.error }));
    }
  };

  const Render = isDesktop ? Dialog : Drawer;
  const RenderContent = isDesktop ? DialogContent : DrawerContent;
  const RenderDescription = isDesktop ? DialogDescription : DrawerDescription;
  const RenderHeader = isDesktop ? DialogHeader : DrawerHeader;
  const RenderTitle = isDesktop ? DialogTitle : DrawerTitle;
  const RenderFooter = isDesktop ? DialogFooter : DrawerFooter;

  return (
    <Render open={open} onOpenChange={onOpenChange}>
      <RenderContent>
        <RenderHeader>
          <RenderTitle>Add new TODO</RenderTitle>
          <RenderDescription />
        </RenderHeader>

        <Form
          id="addTodoForm"
          onSubmit={onSubmit}
          className={`flex flex-col gap-6 ${isDesktop ? "" : "px-4"}`}
        >
          <div className="flex flex-col gap-3">
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              placeholder="What do you want to do?"
              onChange={(e) =>
                setInput((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            {inputError.title.length > 0 &&
              inputError.title.map((ieTitle, key) => (
                <p key={key} className="text-sm font-light text-red-500">
                  {ieTitle}
                </p>
              ))}
          </div>
        </Form>

        <RenderFooter>
          <Button
            onClick={() => onOpenChange(false)}
            className="bg-secondary text-text hover:bg-secondary-400/90"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="addTodoForm"
            className="bg-primary text-white hover:bg-primary-400/90"
          >
            Add TODO
          </Button>
        </RenderFooter>
      </RenderContent>
    </Render>
  );
}
