import {useEffect, useState} from "react"

import {DisplayResults} from './display_results'

import URL from "../util/url"


 
const TimeToBurnAPI = () => {
	

	const data = {
  "items": [
    {
      "name": "tomato",
      "calories": 18.2,
      "serving_size_g": 100,
      "fat_total_g": 0.2,
      "fat_saturated_g": 0,
      "protein_g": 0.9,
      "sodium_mg": 4,
      "potassium_mg": 23,
      "cholesterol_mg": 0,
      "carbohydrates_total_g": 3.9,
      "fiber_g": 1.2,
      "sugar_g": 2.6,
    },
	
	{
      "name": "egg",
      "calories": 18.2,
      "serving_size_g": 100,
      "fat_total_g": 0.2,
      "fat_saturated_g": 0,
      "protein_g": 0.9,
      "sodium_mg": 4,
      "potassium_mg": 23,
      "cholesterol_mg": 0,
      "carbohydrates_total_g": 3.9,
      "fiber_g": 1.2,
      "sugar_g": 2.6,
    }
	
	
  ],
  "total_calories": 36.4,
  "exercises":[{
	  "name": "run",
	  "duration_hr":1,
	  "duration_minutes":60
  },
   {
  "name": "skip",
  "duration_hr":0.5,
  "duration_minutes":30
  }
  ]
}
	
	const [json, setJson] = useState<typeof data | null >(null)
	const [errorMessage, setErrorMessage] = useState("")
	const [status, setStatus] = useState<number>()
	
	
	function calculateSubmit(){
		
		//alert("submit")
		setJson(data)
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
			<div><input type={"text"} size={60} value={textInput} onChange={(e) => setTextInput(e.target.value) } /> </div>
			<div><button disabled={buttonDisabled} onClick={calculateSubmit}>Calculate</button> </div>
			
			<DisplayResults  json={json}/>
		</>
	)
	
}

export default TimeToBurnAPI

