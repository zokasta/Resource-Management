import Inputbox from './InputBox';
function buttonBox(props) {

  
    return (
        <button
        type="submit"
        name="button"
        className="p-2 px-4 bg-green-500 w-min m-3 rounded-lg mb-3 text-white font-mono hover:bg-green-600 hover:shadow-lg"
    >
        Login
    </button>  
    );
}
export default buttonBox;