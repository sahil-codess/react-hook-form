import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch , unregister , formState:{ errors}} = useForm({
    defaultValues: {
        firstName: '',
        checkbox: true
    },
  });

  const checkbox = watch('checkbox')

  React.useEffect(() => {
    if(!checkbox) {
      unregister("firstName")
    }
  }, [unregister, checkbox])

  console.log("checkbox", checkbox)
  return (
    <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          {checkbox && <input {...register('firstName',{required: true})} placeholder="First name" />}
          <input type="checkbox" {...register("checkbox")} />
          <input type="submit" />
        </form>
    </div>
  );
}