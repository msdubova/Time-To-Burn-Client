import {useEffect, useState} from "react"

import URL from "../util/url"

import {ERROR_500, ERROR_418} from "../util/error_codes"

interface Character {
	name:string,
	height:string,
	mass:string,
	birth_year:string,
	eye_color:string,
}
 
const StarWarsAPICall = () => {
	
	const [json, setJson] = useState<Character | null >(null)
	const [errorMessage, setErrorMessage] = useState("")
	const [status, setStatus] = useState<number>()

	
	
	function calculateSubmit(){
		
		alert("submit")
	}
	
	
	 /*
	useEffect(() => {
	
		const getData = async () => {
			
			let responce
			
			try{
				responce = await fetch(URL)
				//if (responce.status === 200) {
					const json = await responce.json()
					setJson(json)
				//}
				//setStatus(responce.status)
			}catch(error:any) {
				//console.log("ERROR ",error.message)
				setErrorMessage(error.name)
			}
			
			if(responce?.ok) {
				
			}
			else {
				//console.log("responce code: "+responce?.status)
				
				setStatus(responce?.status)
			}
			
		}
	
		getData()
	},[URL])

	//console.log("message length", errorMessage.length)

	if(errorMessage.length > 0) {
		
		//console.log("status is "+status)
					
		return (
			<>
				Error:{errorMessage}
			</>
		)
	}
	*/

	const [textInput, setTextInput] = useState<string>("")

	let buttonDisabled = true
	
	if(textInput.length > 2) buttonDisabled = false

	//uses scan so findtext can find each field
    return (
        <>
<div><input type={"text"} size={60} onChange={(e) => setTextInput(e.target.value) } /> </div>
<div><button disabled={buttonDisabled} onClick={calculateSubmit}>Calculate</button> </div>
        </>
		
				
		
    )
	
}

export default StarWarsAPICall

