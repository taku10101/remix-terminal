import { useForm, FormProvider } from "react-hook-form";
import { NameInput } from "../dataField/NameInput";
import { PasswordInput } from "../dataField/PasswordInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../loginForm/LoginSchema";
import { EmailInput } from "../dataField/EmailInput";

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
        <NameInput />
        <PasswordInput />
        <EmailInput />
        <button type='submit'>ログイン</button>
      </form>
    </FormProvider>
  );
}
