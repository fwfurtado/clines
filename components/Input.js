const Errors = ({errors}) => (
    <div className="errors">
        { errors.map(error => <span className="error">{error}</span> ) }
    </div>
);

const RawInput = ({id, label, placeholder, value="", type="text", labelClasses="", inputClasses="", errors=[], ...others}) => (<>
        <label className={labelClasses} htmlFor={id}>{label}</label>
        <input className={inputClasses} name={id} defaultValue={value} placeholder={placeholder} id={id} type={type} {...others}/>
        {errors.length > 0 && <Errors errors={errors}/>}
    </>
);

const Input = ({labelClasses="", inputClasses="", errors=[], ...others}) => {
    const labelCSS = `bold input-label ${labelClasses} `
    const inputCSS = `input ${inputClasses} ${errors.length >  0? 'input--error': ''}`

    return (<RawInput labelClasses={labelCSS} inputClasses={inputCSS} errors={errors} {...others}/>);
};

const DarkInput = ({labelClasses="", inputClasses="", errors=[], ...others}) => {
    const labelCSS = `bold input-label--dark`
    const inputCSS = `input--dark ${inputClasses} ${errors.length >  0? 'input--error': ''}`

    return (<RawInput labelClasses={labelCSS} inputClasses={inputCSS} errors={errors} {...others}/>);
};

const Select = ({id, label, items, selected, labelClasses="", inputClasses="", ...others}) => {
    const labelCSS = `bold input-label ${labelClasses}`
    const inputCSS = `input ${inputClasses}`
    return (<>
        <label className={labelCSS} htmlFor={id}>{label}</label>
        <select className={inputCSS}  id={id} name={id} defaultValue={selected} {...others}>
            {items.map( item => <option key={item.id} value={item.id}>{item.description}</option>)}
        </select>
    </>);
}


export default Input;
export {Input, DarkInput, Select}