import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, control, reset, formState ,formState: {isDirty, isSubmitSuccessful}} = useForm({
    defaultValues: {
        firstName: '',
        lastName: ''
    }
  });

  console.log("isDirty", isDirty)

  React.useEffect(() =>{
    if (formState.isSubmitSuccessful) {
        reset({
            firstName: 'Qais',
            lastName: 'Erfan'
        })
    }
  }, [formState, reset])

  return (
    <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register("firstName")}  placeholder="First name" />
          <input control={control} name={"lastName"} />

          <button type="button" onClick={() => {
            reset({
                firstName: 'Qais',
                lastName: "Erfan",
            }, { keepValues: true});
          }}>Reset</button>
          <input type="submit" />
        </form>
    </div>
  );
}