import { useFormContext } from "react-hook-form";

export function NameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // useFormContextを使用してフォームの状態にアクセス

  return (
    <div>
      <label htmlFor='name'>ユーザー名</label>
      <input id='name' {...register("name")} />
      {errors.username && <p>{errors.name!.message as string}</p>}
    </div>
  );
}
