import  React from 'react';

function TextInput({ value, onChange, className, inputRef }) {
    return (
      <div>
        <input type="text" value={value} onChange={onChange} className={className} ref={inputRef} />
      </div>
    );
  }
  

export default TextInput;