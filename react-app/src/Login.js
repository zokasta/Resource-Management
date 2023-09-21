import './Login.css';
import InputBox  from './Conponents/InputBox';
import ButtonBox from './Conponents/buttonBox';
import CheckBox from './Conponents/checkBox';
import image from "./Assests/Images/office.jpeg";
function App() {
  const inputs = [
    {
      id:1,
      title:"Email",
      placeholder:"Enter a Email",
      type:"email",
      name:"email",
    },
    {
      id:2,
      title:"Password",
      placeholder:"Enter a Password",
      type:"password",
      name:"password",
    },
  ]
  return (
    <div className="bg-gray-300 h-[100vh] font-thin flex justify-center items-center select-none">
      <form action="" className="grid bg-white grid-cols-1 rounded-3xl h-max pb-4 m-2">
        <img src={image} alt="Image not found" className="block h-52 w-full max-sm:hidden rounded-t-[1.2rem]"/>
        <h1 className="text-7xl hidden text-center my-5 max-sm:block">Login</h1>
        {
          inputs.map((input) =>(
            <InputBox title={input.title} type={input.type} name={input.name} className={input.className}></InputBox>
          ))
        }
        <div className="grid grid-cols-[60%_40%] mx-3">
          <CheckBox name="checkbox" title="Remember me"></CheckBox>
          <a href="localhost:3000" className="text-right px-4">Forget Password</a>
        </div>
        <ButtonBox type="submit" name="submit" title="Login"></ButtonBox>
        <a href="localhost:3000" className="text-center ">Tems & condintion</a>
      </form>
    </div>
  );
}

export default App;
