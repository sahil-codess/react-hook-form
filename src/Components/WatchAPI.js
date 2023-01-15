import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = data => {
    console.log(data)
  }

  console.log(watch('lastName'))

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('firstName')} placeholder="First name" />

          <input {...register('lastName')} placeholder="Last name" />

          <input type="submit" />
        </form>
    </div>
  );
}