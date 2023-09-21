import {useEffect, useState} from "react"

import {DisplayResults} from './display_results'

import URL from "../util/url"


 
const TimeToBurnAPI = () => {
	

	//const [json, setJson] = useState<any | null >(null)
	
	
	const [submitted, setSubmitted] = useState<boolean >(false)
	

	const [textInput, setTextInput] = useState<string>("")

	const [countSubmit, setCountSubmit] = useState<number>(0) // needed for key to reset state

	let buttonDisabled = true
	
	function submit() {
		console.log("WTF")
		setCountSubmit(countSubmit+1)// count submit needed for key so state gets reset
		//setJson(null)// forces reload
		setSubmitted( true)
		
	}


	if(textInput.length > 2) buttonDisabled = false


	if(submitted === true) {
		return (
			<>
				<div><input type={"text"} size={60} value={textInput} onChange={(e) => setTextInput(e.target.value) } /> </div>
				<div><button disabled={buttonDisabled} onClick={submit}>Calculate</button> </div>
				
				<DisplayResults key={countSubmit} />
			</>
		)

		//uses scan so findtext can find each field
	}else {
		return (
		<>
			<div><input type={"text"} size={60} value={textInput} onChange={(e) => setTextInput(e.target.value) } /> </div>
			<div><button disabled={buttonDisabled} onClick={submit}>Calculate</button> </div>
		</>
	)
		}
	
}

export default TimeToBurnAPI

