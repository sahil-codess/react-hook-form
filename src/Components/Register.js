import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: 0
    }
  });

  const onSubmit = data => {
    console.log(data)
  }

  console.log('Erros', errors)


  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName", { required: {
            value: true,
            message: 'First name is required'
          } })} placeholder="First name" />

          <input {...register("lastName", {
            maxLength: {
                value: 5,
                message: 'Max length is 5'
            }
          })} placeholder="Last name" />
          <input type="number" placeholder="Age" {...register('age', {valueAsNumber: true})}/>

          <input type="submit" />
        </form>
    </div>
  );
}