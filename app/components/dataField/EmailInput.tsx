import { useFormContext } from "react-hook-form";

export function EmailInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label htmlFor='name'>ユーザー名</label>
      <input id='email' {...register("email")} />
      {errors.username && <p>{errors.email!.message as string}</p>}
    </div>
  );
}
