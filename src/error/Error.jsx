import React from 'react';
import errorImg from "../assets/notfound.webp";
import { Navigate, useNavigate } from 'react-router';
const Error = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div className='min-h-screen flex justify-center items-center flex-col'>
            <img className='w-4/12' src={errorImg} alt="error 404" />
            <button className='text-accent border rounded-md py-2 px-3 hover:bg-amber-600 hover:text-white hover:border-amber-600 font-semibold cursor-pointer duration-300' onClick={goBack}>GO BACK</button>
        </div>
    );
};

export default Error;