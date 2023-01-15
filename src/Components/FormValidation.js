import React from 'react'
import { RegisterHook } from './RegisterHook'
import { useForm } from 'react-hook-form'

export const FormValidation = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='firstname'  {...register("firstName", { required: true, maxLenght: 20})} />
        <input placeholder='lastname' {...register("lastName", { patten: /^[A-Za-z]+$/i })} />
        <input placeholder='Number' type="number" {...register("age", {min: 18, max: 99})} />
        <input type="submit" />
    </form>
  )
}
