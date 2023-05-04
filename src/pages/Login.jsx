import React, { useEffect, useState } from "react";
import ResetPassSvg from "../assets/images/reset-pass.svg";
import PhantomLogo from "../assets/images/Logo-real.svg";
import TextInput from "../components/form/TextInput";
import ActionButton from "../components/form/SubmitButton";
import FormLink from "../components/form/FormLink";
import SwitchButton from "../components/form/SwitchButton";
import api from "./../api";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email: email,
    password: password,
  };
  
  async function handleSubmit(e) {
    e.preventDefault();

    try {  
      const response = await api.post("/auth/login", user);      
      console.log(response);
      toast.success(response.data.message);

      localStorage.setItem("accessToken", response.data.accessToken);

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("accessToken")}`;

      navigate('/dashboard')
    } catch (error) {
      console.log(error);
      if(error.response.status === 400){
        toast.error(error.response.data.error);
      }else if(error.response.status === 500){
        toast.error("Internal Server Error: Contact the administrator");
      }
      else{
        toast.error(error.response.data.message);
      }
    }
  }

  return (
    <div>
      <div className="md:flex flex-row">
        <div className="hidden md:flex flex-col w-1/2 textcolor-blue mt-[25vh] md:px-[10vw]">
          <h1 className="text-2xl font-bold">
            Get more things done with <br /> Logging to Phantom
          </h1>
          <h1 className="mt-4 font-light">
            Access more information that will help you <br /> to make your
            journey easier!
          </h1>

          <div className="mt-16 w-2/3">
            <img alt="reset password svg" src={ResetPassSvg} />
          </div>
        </div>

        <div className="flex flex-col md:w-1/2 bgcolor-blue min-h-screen pl-[10vw] md:pl-[5vw]">
          <div className="flex flex-row mt-[20vh]">
            <img src={PhantomLogo} alt="phantom logo" />
            <h1 className="text-2xl font-bold text-white mt-4">hantom</h1>
          </div>
        <div className="ml-3">

        <form action="" className="mt-8" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <div className="flex">
              <SwitchButton label="Log In" active={true} className="mr-2 m-8" />
              <SwitchButton label="Register" active={false} className="m-8" />
            </div>
          </div>

          <TextInput type={'email'} placeholder={"Email address"} className="w-80" name="email" value={email} onChange={(event) => {
    setEmail(event.target.value);}} />
          <TextInput type={'password'} placeholder={"Password"} className="mt-4 w-32" name="password" value={password} onChange={(event) => {
    setPassword(event.target.value);}} />

          <div className="flex justify-between items-center mt-4 w-2/3 md:w-1/2">
            <ActionButton label={"Log In"} className="w-1/3 md:w-1/8" type="submit" onClick={handleSubmit}/>
            <FormLink label="Forgot Password?" />
          </div>
        </form>

        </div>
        </div>
    </div>
</div>
);
};

export default Login;