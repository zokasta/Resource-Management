// import React, { useState } from "react"; // Import React and useState
function InputBox(props) {
    return (
        <div className="w-96 max-sm:w-60 p-3 min-w-[300px]">
            <label className="bg-white text-lg">{props.title}</label>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                className="w-full px-3 py-2 rounded-lg border border-blue-400 focus:outline-none focus:border-blue-600 email"
      />
        </div>
    );
}

export default InputBox;
