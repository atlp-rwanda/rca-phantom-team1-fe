import  React from 'react';

function TextInput({ value, type, onChange, placeholder, className, inputRef }) {
    return (
      <div>
        <input type={type} value={value} placeholder={placeholder} onChange={onChange} className={` rounded px-4 w-2/3 md:w-1/2 py-3 outline-none placeholder-slate-500 ${className}`} ref={inputRef} />
      </div>
    );
  }
  

export default TextInput;