// UserNameInput.js
import React from "react";
import { useFormContext } from "react-hook-form";

export default function UserNameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // useFormContextを使用してフォームの状態にアクセス

  return (
    <div>
      <label htmlFor='username'>ユーザー名</label>
      <input id='username' {...register("username")} />
      {errors.username && <p>{errors.username.message as string}</p>}
    </div>
  );
}
