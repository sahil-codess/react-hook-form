import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, formState:{isValid}} = useForm({
    defaultValues: {
        mode: 'onChange',
        firstName: '',
        lastName: '',
        age: 0
    }
  });

  console.log("isValid", isValid)

  return (
    <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register('firstName',{required: true})} placeholder="First name" />
          <input {...register('lastName', {required: true})} placeholder="Last name" />
          <input type="number" {...register("age")} placeholder="Age" />
          <input type="submit" />
        </form>
    </div>
  );
}