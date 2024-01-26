import './dropdownlist.css' 

const DropdownList = (props) => {

    const alteredList = (e) => {
        props.selectedValue(e.target.value)
    }

    return (
        <div className='dropdown-list'>
            <label>
                {props.label}
            </label>
            <select onChange={alteredList} required={props.required} value={props.value} >
            <option></option>
            {props.category.map(item => <option key={item}>{item}</option>)}

                 </select>
        </div>
    )
}

export default DropdownList