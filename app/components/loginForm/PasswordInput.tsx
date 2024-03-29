// PasswordInput.js
import React from "react";
import { useFormContext } from "react-hook-form";

export default function PasswordInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // useFormContextを使用してフォームの状態にアクセス

  return (
    <div>
      <label htmlFor='password'>パスワード</label>
      <input type='password' id='password' {...register("password")} />
      {errors.password && <p>{errors.password.message as string}</p>}
    </div>
  );
}
