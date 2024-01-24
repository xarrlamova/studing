import React from "react";

export const ValidationInput = props => {
    const {isDirty, error, handler, value, blurHandler, nameItem, name, className} = props;

    return (
        <>
            {(isDirty && error) && <div className = 'error'>{error}</div>}
            <input className={className} placeholder={nameItem}
                   onChange={handler} value={value} onBlur={blurHandler} name={name}/>
        </>
    )
}