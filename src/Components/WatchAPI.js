import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
        firstName: 'Qais',
        lastName: 'Erfan',
        age: '23'
    }
  });

  const onSubmit = data => {
    console.log(data)
  }

  console.log(watch())

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('firstName')} placeholder="First name" />
          <input {...register('lastName')} placeholder="Last name" />
          <input type="number" {...register("age")} placeholder="Age" />
          <input type="submit" />
        </form>
    </div>
  );
}