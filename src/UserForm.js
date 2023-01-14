import { useForm } from "react-hook-form";
import React from "react";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder='Email' name='email' ref={register} />
      <input type="password" placeholder='password' name='password' ref={register} />
      
      <input type="submit" />
    </form>
  );
}