import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, trigger, formState: {errors}} = useForm({
    defaultValues: {
        firstName: '',
        lastName: '',
        age: 0
    }
  });

  console.log("errors", errors)

  return (
    <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register('firstName',{required: true, minLength: 4})} placeholder="First name" />
          <input {...register('lastName',{required: true, minLength: 4})} placeholder="Last name" />

          <button onClick={() => {
            trigger(['firstName', 'lastName'])
          }}>Trigger</button>
          <input type="submit" />
        </form>
    </div>
  );
}
