import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
        firstName: '',
        lastName: '',
        age: 0
    }
  });

    React.useEffect(() => {
        const subscription = watch((data) =>{
            console.log(data);
        })

        return () => {
            subscription.unsubscribe();
        }
    }, [watch])

  return (
    <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register('firstName')} placeholder="First name" />
          <input {...register('lastName')} placeholder="Last name" />
          <input type="number" {...register("age")} placeholder="Age" />
          <input type="submit" />
        </form>
    </div>
  );
}