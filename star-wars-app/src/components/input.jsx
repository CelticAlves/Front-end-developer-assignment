import React from 'react'

const Input = ({ name, value, label, onChange }) => {
    return (
        < div className="form-group" >
            <label htmlFor={name}>{label}</label>
            <input autoFocus id={name} type="text" name={name}
                onChange={onChange} value={value} className="form-control" />
        </div >);
}

export default Input;
