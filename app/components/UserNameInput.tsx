import { useFormContext } from "react-hook-form";

export default function UserNameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor='username'>ユーザー名</label>
      <input id='username' {...register("username")} />
      {errors.password && typeof errors.password === "string" && (
        <p>{errors.password}</p>
      )}
    </div>
  );
}
