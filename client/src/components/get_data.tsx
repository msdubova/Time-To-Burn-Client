import {useEffect, useState} from "react"

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


	if(json == null) {

		//uses scan so findtext can find each field
		return (
			<>
	<div><input type={"text"} size={60} value={textInput} onChange={(e) => setTextInput(e.target.value) } /> </div>
	<div><button disabled={buttonDisabled} onClick={calculateSubmit}>Calculate</button> </div>
			</>
			
		)
	}
	else {
		//console.log(json.items)
		return (
		<>
		
		 <>
	<div><input type={"text"} size={60} value={textInput} onChange={(e) => setTextInput(e.target.value) } /> </div>
			<div><button disabled={buttonDisabled} onClick={calculateSubmit}>Calculate</button> </div>
        </>
		
		
		<div><h2>Food Details:</h2>
		
		<table className="resultsTable">
			<thead>
				<tr>
					<th>Name</th><th>Calories</th><th>serving size</th><th>Fat Total</th><th>Protein (grams)</th>
					<th>Potassium (mg)</th><th>Cholesterol</th><th>Total Carbohyrates</th>
				</tr>
			</thead>
			<tbody>
						
			
		{json.items.map((f,i) => {
			return <tr key={i}><td>{f.name}</td><td>{f.serving_size_g}</td><td>{f.calories}</td><td>{f.protein_g}</td>
			<td>{f.sodium_mg}</td><td>{f.potassium_mg}</td><td>{f.cholesterol_mg}</td><td>{f.carbohydrates_total_g}</td></tr>	
		})
		}
		</tbody>
		</table>
		</div>
		<div>
			<h2>Total Calories: {json.total_calories}</h2>
		</div>
		
		<div><h2>Exercise Details:</h2>
		<table className="resultsTable">
			<thead>
				<tr>
					<th>Exercise</th><th>Hours</th><th>Minutes</th>
				</tr>
			</thead>
			<tbody>
			{
			json.exercises.map((e,i) => {
				return <tr key={i}><td>{e.name}</td><td>{e.duration_hr}</td><td>{e.duration_minutes}</td></tr>
				
			})
			
			}
			</tbody>
		</table>
		
		</div>
		
		
		</>
		)
	}
	
}

export default TimeToBurnAPI

