import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, setError, formState: {errors}} = useForm({
    defaultValues: {
        firstName: '',
    }
  });


  return (
    <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register('firstName')} placeholder="First name" />
           <button onClick={() => setError("firstName", { type: "custom", message: 'Something is wrong'})}>set Error</button>
            <p>{errors.firstName?.message}</p>
          <input type="submit" />
        </form>
    </div>
  );
}