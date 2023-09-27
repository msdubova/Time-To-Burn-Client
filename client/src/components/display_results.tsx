
import {useEffect, useState} from "react"

import URL from '../util/url'


type DisplayResultsProps ={
	text:string
}

// this gets created twice in reacts dev mode strict mode, build mode is not affected ?
//https://www.reddit.com/r/reactjs/comments/ugzopd/why_is_my_fetch_getting_called_twice/
export const DisplayResults : React.FC<DisplayResultsProps> =({text}) => {

	const [json,setJson] = useState<any>(null)
	const [errorMessage, setErrorMessage] = useState("")
	

	useEffect(() => { 
		const getData = async () => {
			
			let responce
			  
			try{
			
				responce = await fetch(URL+encodeURIComponent(text))
				
				const json = await responce.json()
				
				setJson(json)
				
			}catch(error:any) {
				setErrorMessage(error.message)
			}
			
		}
	
		getData()
	},[])
	

	if(errorMessage.length > 0) {
		return (
			<>
				<div className="error">Error:{errorMessage}</div>
			</>
		)
	}


	if(json === null) {
		return (
		<>
			Loading...
		</>
		)
	}


	return (
		<>
			<div>
				<br />
		
				<table className="resultsTable">
					<thead>
						<tr>
							<th>Name</th><th>Calories</th><th>Weight</th><th>Fat</th><th>Protein</th>
							<th>Potassium</th><th>Cholesterol</th><th>Carbohyrates</th>
						</tr>
					</thead>
					<tbody>
					{
						json.items.map((f:any,i:number) => {
							return <tr key={i}><td>{f.name}</td><td>{f.calories}</td><td>{f.serving_size_g}g</td><td>{f.protein_g}g</td>
								<td>{f.sodium_mg}mg</td><td>{f.potassium_mg}mg</td><td>{f.cholesterol_mg}mg</td><td>{f.carbohydrates_total_g}g</td></tr>	
						})
					}
					</tbody>
				</table>
			</div>
				
			<div>
				<h2>Total Calories: {json.total_calories}</h2>
			</div>
					
			<div><br />
				<table className="resultsTable">
					<thead>
						<tr>
							<th>Exercise</th><th>Calories Burned Per Hour</th><th>Hours To Burn Total Cals</th>
						</tr>
					</thead>
					<tbody>
					{
						json.exercises.map((e:any,i:number) => {
							return <tr key={i}><td>{e.name}</td><td>{e.calsPerHour}</td><td>{e.time_to_burn_total_cals.hours}</td></tr>
						
						})
					}
					</tbody>
				</table>
		
			</div>
			
		</>
	
	)

}
