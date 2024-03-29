import { useFormContext } from "react-hook-form";

export default function PasswordInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors!.password!.message as string;
  return (
    <div>
      <label htmlFor='password'>パスワード</label>
      <input type='password' id='password' {...register("password")} />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
