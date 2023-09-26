// import InputBox from "../Conponents/InputBox";
import ButtonBox from "../Conponents/buttonBox";
import CheckBox from "../Conponents/CheckBox";
import imageFile from "../Assests/Images/office.jpeg";
import React, { useState } from "react"; // Import React and useState

function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailvalidate = (e) => {
    e.preventDefault();
    const regex = /[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+/i;
    console.log(email)
    console.log((regex).test(email));
    if (regex.test(email)) {
      setMessage("Email is valid");
    }
    else {
      setMessage("Email is not valid");
    }
  }

  return (
    <div className="bg-gray-300 h-[100vh] font-thin flex justify-center items-center select-none">
      <form
        action=""
        className="grid bg-white grid-cols-1 rounded-3xl h-max pb-4 m-2"
        onSubmit={(e) => { emailvalidate(e) }}
      >
        <img src={imageFile}
          alt="Image not found"
          className="block h-52 w-full max-sm:hidden rounded-t-[1.2rem]"
        />
        <span className="hidden before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-400 translate-y- relative max-sm:inline-block -translate-y-3">
          <div className="text-7xl hidden text-center my-5 max-sm:block">
            <span className="relative text-white text-8xl">L</span>
            <span className="relative text-white">ogin</span>
          </div>
        </span>
        {/* <InputBox
          title="Email"
          type="text"
          name="Email"
          className="Email"
          placeholder="Please Enter your Email address"
          }
          // value={email}
        ></InputBox>
        <InputBox
        title="Password"
        type="password"
        name="Password"
        className="Password"
        placeholder="Please Enter your Password"
        ></InputBox> */}
        <div className="w-96 max-sm:w-60 p-3 min-w-[300px]">
          <label className="bg-white text-lg">Email</label>
          <input
            className="w-full px-3 py-2 rounded-lg border border-blue-400 focus:outline-none focus:border-blue-600 email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p className="w-96 max-sm:w-60 pl-3 min-w-[300px]">{message}</p>
        <div className="w-96 max-sm:w-60 p-3 min-w-[300px]">
          <label className="bg-white text-lg">Password</label>
          <input
            className="w-full px-3 py-2 rounded-lg border border-blue-400 focus:outline-none focus:border-blue-600 email"
          />
        </div>
        <div className="grid grid-cols-[60%_40%] mx-3">
          <CheckBox name="checkbox" title="Remember me"></CheckBox>
          <a href="localhost:3000" className="text-right px-4">
            Forget Password
          </a>
        </div>
        <ButtonBox type="submit" name="submit" title="Login"></ButtonBox>
        <a href="localhost:3000" className="text-center ">
          Tems & condintion
        </a>
      </form>
    </div>
  );
}

export default Login;
