import React from 'react'
import { useForm } from 'react-hook-form'

export const RegisterHook = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='firstname' {...register("firstName")} />
        <select {...register("gender")}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
        </select>
        <input type="submit" />
    </form>
  )
}
