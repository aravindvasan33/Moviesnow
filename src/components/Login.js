import React, { useRef, useState } from 'react';
import Header from './Header';
import {Checkvalidata} from '../utils/Validate.js';
const Login = () => {
  const [login, setLogin] = useState(true);
  const[errormessage,seterrormessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const toggleSignIn = () => {
    setLogin(!login);
  };
  const handlebuttonclick = () => {
    if (email.current && password.current) {
        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        
        const message = Checkvalidata(emailValue, passwordValue);
        console.log(message);
        seterrormessage(message);
    } else {
        console.log("One or both refs are not properly attached to the inputs.");
    }
};

  return (
    <div>
      <Header />
      <img src="/images/moviesgptposter.jpg" className="w-full absolute z-[-1]" alt="MovieGPT Poster" />
      <form onSubmit={(e)=>e.preventDefault()} className="absolute bg-black bg-opacity-80 text-blue-600 flex flex-col m-2 p-5 w-3/12  my-36 right-0 left-0 mx-auto min-h-[400px] transition-opacity duration-300">
        <h1 className="text-blue-600 text-4xl font-bold p-3">{login ? 'Sign In' : 'Sign Up'}</h1>
        
        <input id="username" ref={email} className="bg-gray-700 inline-block m-2 p-2 rounded-lg" placeholder="Enter your email" />
        {!login&&(
         
         <input className="bg-gray-700 m-2 p-2 rounded-lg" placeholder='Enter your Mobile No'></input>
       )}
        <input ref={password} id="password" type="password" className="bg-gray-700 m-2 p-2 rounded-lg" placeholder="Enter your password" />
        <p className='text-white'>{errormessage}</p>
        <button className="bg-blue-600 text-black m-3 p-2 inline-block w-1/4 mx-auto rounded-xl hover:bg-black hover:text-blue-600 from-black font-semibold" onClick={handlebuttonclick}>
          {login ? 'Sign In' : 'Sign Up'}
        </button>
        <h3 className="text-blue-600 mx-auto underline underline-offset-4 cursor-pointer hover:text-white">Forgot password?</h3>
        <hr className="m-2" />
        <button className="border-white border-solid border-2 text-white m-4 p-4 cursor-pointer hover:text-blue-600 font-semibold type" type='button' onClick={toggleSignIn}>
          {login ? 'Create an account' : 'Already have an account? Sign In'}
        </button>
      </form>
    </div>
  );
};

export default Login;
