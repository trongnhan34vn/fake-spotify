import React, { useEffect, useState } from 'react'
import AuthenticationLayout from '../layout/Authentication/AuthenticationLayout'
import Input from '../components/Authentication/Input'
import Button from '../components/Authentication/Button'
import RecommendText from '../components/Authentication/RecommendText'
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../thunk/authThunk'
import { userSelector } from '../redux/selectors'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      email: "", password: ""
    }
  });

  const [isSubmitted, setSubmitted] = useState(false);

  const onHandleSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    setSubmitted(true);
    setTimeout(() => {
      dispatch(signin(data))
    }, 2000)
  }

  const loginResponse = useSelector(userSelector).authResponse;

  useEffect(() => {
    if(!isSubmitted) return;
    if(!loginResponse) return;
    console.log(loginResponse);
    if (loginResponse.status === 200) {
      toast.success("Login successfully!")
      localStorage.setItem("user", JSON.stringify(loginResponse.data.user))
      localStorage.setItem("token", JSON.stringify(loginResponse.data.accessToken))
      setTimeout(() => {
        navigate("/")
      })
      return;
    }
    toast.error(loginResponse.data)
  },[loginResponse, isSubmitted])

  return (
    <div>
      <AuthenticationLayout title={"Signin"}>
        <form onSubmit={handleSubmit(onHandleSubmit)} className='mb-[31px]'>
          <Input register={register} field={"email"} fieldName="Email" errors={errors} placeholder={"Enter your email"} type={"text"} />
          <Input register={register} field={"password"} fieldName="Password" errors={errors} placeholder={"Enter your password"} type={"password"} />
          <p className='text-[30px]'>Forgot password?</p>
          <Button title={"Signin"} />
        </form>
        <RecommendText content={"Don't have an account?"} routeTo={"/auth/signup"} routeToText={"Signup"} />
      </AuthenticationLayout>
    </div>
  )
}

export default Login