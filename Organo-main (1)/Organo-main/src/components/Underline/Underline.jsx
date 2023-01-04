import React from "react"
import "./Underline.css"



function Underline(props) {
	return	<div className="underline" style={{backgroundColor:props.color, width:props.width}}></div>
}


export default Underline
