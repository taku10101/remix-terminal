// LoginFormProvider.js
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import UserNameInput from "./UserNameInput";
import PasswordInput from "./PasswordInput";

const loginSchema = z.object({
  username: z.string().min(1, { message: "ユーザー名は必須です" }),
  password: z
    .string()
    .min(8, { message: "パスワードは8文字以上である必要があります" }),
});

export function LoginFormProvider() {
  const methods = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = methods.handleSubmit((data: unknown) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <UserNameInput />
        <PasswordInput />
        <button type='submit'>ログイン</button>
      </form>
    </FormProvider>
  );
}
