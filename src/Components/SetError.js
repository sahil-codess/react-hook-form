import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, setError, formState: {errors}} = useForm({
    defaultValues: {
        firstName: '',
        criteriaMode: "all"
    }
  });


  return (
    <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register('firstName')} placeholder="First name" />
           <button onClick={() => setError("firstName",
            { types: {
                test: 'test is wrong',
                test1: 'test1 is wrong'
            }})}>
            set Error</button>
            <p>{errors.firstName?.types?.test}</p>
            <p>{errors.firstName?.types?.test1}</p>
          <input type="submit" />
        </form>
    </div>
  );
}