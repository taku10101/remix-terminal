import { useFormContext } from "react-hook-form";

export default function UserNameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage: string = errors!.username!.message as string;

  return (
    <div>
      <label htmlFor='username'>ユーザー名</label>
      <input id='username' {...register("username")} />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
