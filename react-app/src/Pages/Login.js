import InputBox from "../Conponents/InputBox";
import ButtonBox from "../Conponents/buttonBox";
import CheckBox from "../Conponents/checkBox";
import imageFile from "../Assests/Images/office.jpeg";
import React, { useState } from "react"; // Import React and useState

function Login() {
  const inputs = [
    {
      id: 1,
      title: "Email",
      placeholder: "Enter a Email",
      type: "text",
      name: "email",
    },
    {
      id: 2,
      title: "Password",
      placeholder: "Enter a Password",
      type: "password",
      name: "password",
    },
  ];
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const emailvalidate = () => {
        const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(?:\.[a-z]{2,8})?/g;
        if (regex.test(email)) {
            setMessage("Email is valid");
        }
        else {
            setMessage("Email is not valid");
        }
    }

    const handleOnChange = (e) => {
        setEmail(e.target.value);
    }
  return (
    <div className="bg-gray-300 h-[100vh] font-thin flex justify-center items-center select-none">
      <form
        action=""
        className="grid bg-white grid-cols-1 rounded-3xl h-max pb-4 m-2"
        onSubmit={email}
      >
        <img
          src={imageFile}
          alt="Image not found"
          className="block h-52 w-full max-sm:hidden rounded-t-[1.2rem]"
        />
        <span class="hidden before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-400 translate-y- relative max-sm:inline-block -translate-y-3">
          <div className="text-7xl hidden text-center my-5 max-sm:block">
            <span class="relative text-white text-8xl">L</span>
            <span class="relative text-white">ogin</span>
          </div>
        </span>
        {inputs.map((input) => (
          <InputBox
            title={input.title}
            type={input.type}
            name={input.name}
            className={input.className}
            placeholder={input.placeholder}
            onChange={handleOnChange}
            value={email}
          ></InputBox>
        ))}
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
