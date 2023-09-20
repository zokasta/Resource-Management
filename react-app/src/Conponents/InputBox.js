function inputBox(props)
{
    return(
        <div className="w-96 max-sm:w-60  py-3 min-w-[300px]">
            <label className=" bg-white text-lg ">{props.title}</label>
            <input 
                type={props.type} 
                name={props.name}
                className="w-full px-3 py-2 rounded-lg border border-blue-400  focus:outline-none   focus:border-blue-60000"
            
        />
            <p></p>
        </div>
        
//         <div className="w-96 max-sm:w-60 p-4 min-w-[300px]">
//   <label for="input" className="block text-gray-700 font-bold mb-2">Input Box</label>
//   <input
//     type="text"
//     id="input"
//     name="input"
//         placeholder="Enter something..."
//   />
// </div>
    );
}
export default inputBox;