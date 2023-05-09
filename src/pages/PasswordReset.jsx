import React from "react";
import ResetPassSvg from '../assets/images/reset-pass.svg'
import PhantomLogo from '../assets/images/Logo-real.svg'
import TextInput from "../components/form/TextInput";
import ActionButton from "../components/form/SubmitButton";

const PasswordReset = () => {
    return (
        <div>
            <div className="md:flex flex-row">
                <div className=" hidden md:flex flex-col w-1/2 textcolor-blue mt-[25vh]  md:px-[10vw]">   
                    <h1 className="text-2xl font-bold">Get more things done with <br /> Logging to Phantom</h1>
                    <h1 className="mt-4 font-light">Access more information that will help you <br /> to make your journey easier!</h1>

                    <div className="mt-16 w-2/3">
                        <img alt="reset password svg"  src={ResetPassSvg} />
                    </div>
                </div>

                <div className=" flex flex-col md:w-1/2 bgcolor-blue min-h-screen pl-[10vw] md:pl-[5vw]">
                    <div className="flex flex-row mt-[20vh]">
                        <img  src={PhantomLogo} alt="phantom logo" />
                        <h1 className="text-2xl font-bold text-white mt-4">Phantom</h1>
                    </div>
                    <div className="ml-3">
                        <h1 className="text-2xl mt-8 text-white">Password Reset</h1>
                        <p  className="mt-4  text-white md:w-1/2 font-light">To reset your Password, enter the email adress you used to sign in to phantom</p>

                        <form action="" className="mt-8">
                            <TextInput type={'email'} placeholder={"Email address"}  />
                            <ActionButton label={"Send Reset Link"}  className="mt-4 w-2/3 md:w-1/2"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordReset;