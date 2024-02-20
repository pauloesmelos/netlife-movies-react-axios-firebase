import React from 'react';
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import Error from "../../components/auth/error/Error";
import Tooltip from "../../components/auth/tooltip/Tooltip";
import { GlobalUser } from '../../global/user/GlobalUser';
import useForm from "../../hooks/form/useForm";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [tooltip, setTooltip] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const name = useForm("name");
  const email = useForm("email");
  const password = useForm("password");
  const { createUser, error, setError } = React.useContext(GlobalUser);

  const haveError = () => {
    name.verify();
    email.verify();
    password.verify();
    if(!name.verify() || !email.verify() || !password.verify()) {
      return true;
    }
    else return false;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setShowPassword(false);
      if(!haveError()) {
        const sucess = await createUser(email.input, password.input, name.input);
        sucess ? navigate("/account") : null;
      }
    } catch(erro) {
      console.log(erro);
    }
  }
  const handleHover = () => {
    setTooltip(e => !e);
  }
  const handlePassword = () => {
    setShowPassword(state => !state);
  }

  React.useEffect(() => {
    setError(""); /* clear error before changed screen - login signup */
  }, []);

  return (
    <section className="w-full h-screen bg-movies bg-cover bg-center bg-no-repeat relative z-10">
      <div className="w-full h-full">
        {/* overlay */}
        <div className="w-full h-full absolute top-0 left-0 bg-black/60"/>
        {/* container */}
        <div className="w-full h-full flex justify-center items-center">
            {/* card */}
            <div className="bg-black/70 w-[80%] sm:w-[45%] lg:w-[34%] h-[70vh] z-30 px-8 py-1">
               <div className="flex justify-between my-8 relative">
                <h2 className="text-white font-bold text-2xl sm:text-3xl">
                    Sign Up
                </h2>
                <MdHelpCenter
                  className="text-3xl sm:text-4xl text-gray-400 cursor-pointer"
                  onMouseOver={handleHover}
                  onMouseOut={handleHover}
                />
                {/* tooltip */}
                <Tooltip 
                  tooltip={tooltip} 
                  text={"Create your account"}
                />
               </div>
               {/* message error incorrect/in-use credentials */}
               { error && 
                <div className="flex gap-1 items-center mb-3">
                  <IoIosCloseCircle className="text-red-500" />
                  <p className="text-red-500 font-bold text-sm">
                    {error}
                  </p>
                </div>
               }
               <form className="" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                    <div className="w-full">
                      <input 
                        type="text"
                        name="name"
                        placeholder="Name"         
                        className={`bg-slate-600 text-gray-300 p-3 rounded w-full border-b-2 outline-none
                        ${name.erro ? "border-orange-600" : "border-transparent"}`}
                        value={name.input}
                        onChange={name.handleInput}
                        onBlur={name.onBlur}
                      />
                      { name.erro && 
                        <Error erro={name.erro} />
                      }
                    </div>
                    <div className="w-full">
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Email"         
                        className={`bg-slate-600 text-gray-300 p-3 rounded w-full border-b-2 outline-none
                        ${email.erro ? "border-orange-600" : "border-transparent"}`}
                        value={email.input}
                        onChange={email.handleInput}
                        onBlur={email.onBlur}
                      />
                      { email.erro && 
                        <Error erro={email.erro} />
                      }
                    </div>
                    <div className="relative w-full">
                      <input
                        type={showPassword ? `text` : `password`}
                        name="password"
                        placeholder="Password"
                        className={`bg-slate-600 text-gray-300 p-3 rounded w-full border-b-2 outline-none
                        ${password.erro ? "border-orange-600" : "border-transparent"}`}
                        value={password.input}
                        onChange={password.handleInput}
                        onBlur={password.onBlur}
                      />
                      { password.erro && 
                        <Error erro={password.erro} />
                      }
                      { showPassword ?
                        <FaEyeSlash 
                          className="text-red-400 text-sm sm:text-xl absolute top-[20%] right-3 
                          cursor-pointer"
                          onClick={handlePassword}
                        />
                        :
                        <FaRegEye 
                          className="text-gray-300 text-sm sm:text-xl absolute top-[20%] right-3 
                          cursor-pointer"
                          onClick={handlePassword}
                        />
                      }
                    </div>
                    <button className="text-white bg-gradient-to-r from-[#E50914] to-[#b93333] p-3 font-semibold rounded
                    hover:opacity-80">
                        Sign Up
                    </button>
                </div>
               </form>
               <div className="flex flex-wrap justify-between text-gray-400 pt-5">
                <label 
                  className="hover:text-red-600 cursor-pointer text-sm" 
                  htmlFor="remember"
                >
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="p-2 mr-3"
                  />
                  Remember-me
                </label>
                <p>
                  <a className="hover:text-red-600 text-sm" href="#">Need help?</a>
                </p>
               </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp;