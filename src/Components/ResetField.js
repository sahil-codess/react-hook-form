import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, resetField ,formState:{errors}} = useForm({
    defaultValues: {
        firstName: 'Qais',
    }
  });

  return (
    <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register('firstName',{required: true})} placeholder="First name" />
          <button type="button" onClick={() => resetField("firstName")}>Reset Field</button>
          <input type="submit" />
        </form>
    </div>
  );
}