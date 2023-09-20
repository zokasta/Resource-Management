import './Login.css';
import InputBox  from './Conponents/InputBox';
import ButtonBox from './Conponents/buttonBox';
import CheckBox from './Conponents/checkBox';
function App() {
  const input =[
    {
      id:1,
      title:"Email",
      type:"email",

    }
  ]
  return (
    <div className="bg-gray-300 h-[100vh] font-thin flex justify-center items-center select-none">
      <form action="" className="grid bg-white grid-cols-1 rounded-3xl h-max p-4 m-2">
        <h1 className="text-7xl text-center my-5">Login</h1>
        <InputBox title="Email" type="email" name="email"></InputBox>
        <InputBox title="Password" type="password" name="password"></InputBox>
        <div className="grid grid-cols-[60%_40%]">
          <CheckBox name="checkbox" title="Remember me"></CheckBox>
          <a href="" className="text-right px-4">Forget Password</a>
        </div>
        <ButtonBox type="submit" name="submit" title="Login"></ButtonBox>
        <a href="" className="text-center ">Tems & condintion</a>

      </form>
    </div>
  );
}

export default App;
