import React, { useState } from 'react';
import authService from '../appwrite/auth.js';
import { login } from '../store/authslice.js';
import {Button, Input, Logo} from "./index.js";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();

    const create = async(data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(login(userData));
                    navigate("/");
                }
            }

        } catch (error) {
            setError(error.message);
            console.log("Error in create in Signup", error);
            
        }
    }

  return (
    <div className='flex items-center justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width="100px" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form onSubmit={handleSubmit(create)}>
                <div className='space-y-5'>
                    <Input
                        label="Name: "
                        placeholder="Please enter your name"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi/test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        label="Password: "
                        placeholder="Enter your Password"
                        type="password"
                        {...register("password", {
                            required: true
                        })}
                    />
                    <Button
                        type="Submit"
                        className="w-full"
                    >Sign up</Button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Signup