import React from "react";
import { SignupLayout } from "../components";
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useState } from 'react'
import { Register } from '../services/auth'
import toast, { Toaster } from 'react-hot-toast'

const Signup = () => {
    const [ requestError, setRequestError ] = useState(false);
    const initialValues = {
      email: '',
      fullname: '',
      phone_number: '',
      role: ''
    }
    
    const schema = Yup.object().shape({
      fullname: Yup.string().required("Enter valid names").max(255).min(2),
      email: Yup.string().email("Invalid Email").required("Enter valid email").max(255).min(5),
      phone_number: Yup.string().required("Enter valid phone number").max(25).min(9),
      role: Yup.string().required("Enter valid role").max(255).min(6)
    })
    
    const formik = useFormik({
      initialValues,
      validationSchema: schema
    })
    
    const { handleChange, values, errors, touched, getFieldProps, isValid  } = formik
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await Register(values);
      if(!response?.success) {
        return setRequestError(response.message || "Something went wrong");
      }
      toast.success("Account created successfully");
    }
    
    const errorInputStyle = {
      border: '1px solid red'
    }
    return(
        <div>
            <SignupLayout 
            action="Register"
            title="Get more things done with Registering to Phantom"
            subtitle="Access more information that will help you to make your journey easier!"
            handleSubmit={handleSubmit}
            formisValid = {isValid}
            ifEmpty = {Object.values(touched).every(e => e === '')}
            >
                 <Toaster/>
                 {requestError && <div className='error-message'>{requestError}</div>}

                <input required type="text" name="fullname" placeholder="Full Name" className="fullname"
                {...getFieldProps('fullname')}
                style={errors.fullname && touched.fullname ? errorInputStyle : {}}
                />{ touched.fullname && errors.fullname && <label>{errors.fullname}</label>}

                <input required type="email" name="email" placeholder="Email" className="email"
                {...getFieldProps('email')}
                style={errors.email && touched.email ? errorInputStyle : {}}
                />{ touched.email && errors.email && <label>{errors.email}</label>}

                <input required type="text" name="phone_number" placeholder="Phone number" className="phone_number"
                {...getFieldProps('phone_number')}
                style={errors.phone_number && touched.phone_number ? errorInputStyle : {}}
                />{ touched.phone_number && errors.phone_number && <label>{errors.phone_number}</label>}

                <input required type="text" name="role" placeholder="role" className="role"
                {...getFieldProps('role')}
                style={errors.role && touched.role ? errorInputStyle : {}}
                />{ touched.role && errors.role && <label>{errors.role}</label>}
            </SignupLayout>
        </div>
    )
}

export default Signup