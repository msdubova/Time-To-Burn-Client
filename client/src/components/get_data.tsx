import {useState} from "react"

import {DisplayResults} from './display_results'
import {TextInput} from './text_input'
 
const TimeToBurnAPI = () => {
	
	//const [json, setJson] = useState<any | null >(null)
	
	const [submitted, setSubmitted] = useState<boolean >(false)
	
	const [textInput, setTextInput] = useState<string>("")

	const [countSubmit, setCountSubmit] = useState<number>(0) // needed for key to reset state

	let buttonDisabled = true
	
	function submit() {
	
		setCountSubmit(countSubmit+1)// count submit needed for key so state gets reset
		//setJson(null)// forces reload
		setSubmitted( true)
		
	}


	if(textInput.length > 2) buttonDisabled = false


	if(submitted === true) {
		return (
			<>
				<div><TextInput value={textInput} onChangeText={ setTextInput } /> </div>
				<div><button disabled={buttonDisabled} onClick={submit}>Calculate</button> </div>
				
				<DisplayResults key={countSubmit} />
			</>
		)

		//uses scan so findtext can find each field
	}else {
		return (
		<>
			<div><TextInput value={textInput} onChangeText={ setTextInput } /> </div>
			<div><button disabled={buttonDisabled} onClick={submit}>Calculate</button> </div>
		</>
		)
	}
	
}

export default TimeToBurnAPI

