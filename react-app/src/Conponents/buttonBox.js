function buttonBox(props)
{
    return(
        <button 
            type={props.type} 
            name={props.name} 
            className="p-2 px-4 bg-green-400 w-min my-3 rounded-lg mb-3 text-white font-mono hover:bg-green-600">{props.title}</button>
    );
}
export default buttonBox;