import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, resetField ,formState:{errors, isValid}} = useForm({
    defaultValues: {
        firstName: 'Qais',
    },
    mode: "onChange"
  });

  return (
    <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register('firstName',{required: 'This is required', minLength: {
            value: 6,
            message: "min lenght is 6"
          }})} placeholder="First name" />
          <p>{errors.firstName?.message}</p>
          <p>{isValid ? 'Valid' : 'Not Valid'}</p>
          <button type="button" onClick={() => resetField("firstName", { keepError: true})}>Reset Field</button>
          <input type="submit" />
        </form>
    </div>
  );
}