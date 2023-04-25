import React from "react";
import ResetPassSvg from '../assets/images/reset-pass.svg'

const PasswordReset = () => {
    return (
        <div>
            <div className="flex flex-row">
                <div className="flex flex-col w-1/2 textcolor-blue mt-[20vh]  md:px-[10vw]">   
                    <h1 className="text-2xl font-bold">Get more things done with <br /> Logging to Phantom</h1>
                    <h1 className="mt-4 font-light">Access more information that will help you <br /> to make your journey easier!</h1>

                    <div className="mt-16 w-2/3">
                        <img alt="reset password svg"  src={ResetPassSvg} />
                    </div>
                </div>

                <div className="flex flex-col w-1/2 bgcolor-blue min-h-screen">
                </div>
            </div>
        </div>
    );
}

export default PasswordReset;