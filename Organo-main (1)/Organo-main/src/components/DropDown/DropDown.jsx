import React from "react"



function DropDown(props) {	
	return (
		<React.Fragment>
			<label className="input-label">{props.label}</label>
			<select onChange={getValue} className="input"> 
				{props.options.map(option => {	
					return <option key={option} value={option}>{option}</option>
				})}
			</select>
		</React.Fragment>
	)



	function getValue(event) {
		props.setValue(event.target.value)
	}


}


export default DropDown






