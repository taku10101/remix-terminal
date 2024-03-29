import { useForm, FormProvider } from "react-hook-form";
import { UserNameInput } from "./UserNameInput";
import { PasswordInput } from "./PasswordInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./LoginSchema";

export function LoginFormProvider() {
  const methods = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = methods.handleSubmit((data) => {
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
