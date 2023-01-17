import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, resetField ,formState:{isDirty, dirtyFields}} = useForm({
    defaultValues: {
        firstName: '',
    },
    mode: "onChange"
  });

  console.log("isDirty, dirtyFields", isDirty, dirtyFields)
  return (
    <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register('firstName',{required: 'This is required', minLength: {
            value: 6,
            message: "min lenght is 6"
          }})} placeholder="First name" />
          
          <button type="button" onClick={() => resetField("firstName", { keepDirty: true})}>Reset Field</button>
          <input type="submit" />
        </form>
    </div>
  );
}