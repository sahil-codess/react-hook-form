import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, formState:{isSubmitted}} = useForm({
    defaultValues: {
        firstName: '',
        lastName: '',
        age: 0
    }
  });

  console.log("isSubmitted", isSubmitted)

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