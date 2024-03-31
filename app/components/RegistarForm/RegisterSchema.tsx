import { z } from "zod";
export const registerSchema = z.object({
  name: z.string().min(1, { message: "ユーザー名は必須です" }),
  //email Validation
  email: z.string(),
  password: z
    .string()
    .min(8, { message: "パスワードは8文字以上である必要があります" }),
});
