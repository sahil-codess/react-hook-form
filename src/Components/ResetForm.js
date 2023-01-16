import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, control, reset} = useForm({
    defaultValues: {
        firstName: '',
        lastName: ''
    }
  });

  return (
    <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register("firstName")}  placeholder="First name" />
          <input control={control} name={"lastName"} />

          <button type="button" onClick={() => {
            reset({
                firstName: 'Qais',
                lastName: "Erfan",
            });
          }}>Reset</button>
          <input type="submit" />
        </form>
    </div>
  );
}