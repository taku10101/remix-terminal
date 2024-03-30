import { useForm, FormProvider } from "react-hook-form";
import { NameInput } from "../dataField/NameInput";
import { PasswordInput } from "../dataField/PasswordInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./RegisterSchema";
import { EmailInput } from "../dataField/EmailInput";

export function RegisterProvider() {
  const methods = useForm({
    resolver: zodResolver(registerSchema),
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
        <button type='submit'>新規登録</button>
      </form>
    </FormProvider>
  );
}
