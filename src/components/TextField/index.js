import './textField.css'

const TextField = (props) => {

    const typingField = (e) => {
        
      props.alteredField(e.target.value);
      
    };

    return(
        <div className='text-field'>
            <label> {props.label} </label>
            <input value={props.value} required={props.required} onChange={typingField} placeholder={props.tip}  />
        </div>
    )
}
export default TextField