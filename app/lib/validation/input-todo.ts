import { z } from "zod";

const todoSchema = z
  .string()
  .min(1, { message: "Todo can't be empty" })
  .max(256, { message: "Keep what you want to do as short as possible" });

interface ValidationResult {
  status: boolean;
  data?: string;
  error?: string[];
}

export function validateTodo(value: string) {
  const validate = todoSchema.safeParse(value);

  if (!validate.success) {
    return {
      status: false,
      error: validate.error.flatten().formErrors,
    } satisfies ValidationResult;
  }

  return {
    status: true,
    data: validate.data,
  } satisfies ValidationResult;
}
