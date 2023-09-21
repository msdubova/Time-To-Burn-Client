
import {useEffect, useState} from "react"


export const DisplayResults : React.FC =() => {

	//console.log(json)

	const [json,setJson] = useState<any>(null)
	
	const [errorMessage, setErrorMessage] = useState("")
	const [status, setStatus] = useState<number>()

	useEffect(() => {
	  
		const getData = async () => {
			
			let responce
			  
			try{
				responce = await fetch("http://localhost:4000/test")
				//if (responce.status === 200) {
					const json = await responce.json()
					console.log(json)
					setJson(json)
					console.log("submitted")
				//}
				//setStatus(responce.status)
			}catch(error:any) {
				console.log("ERROR ",error.message)
				setErrorMessage(error.name)
			}
			
			if(responce?.ok) {
				
			}
			else {
				console.log("responce code: "+responce?.status)
				
				setStatus(responce?.status)
			}
			
		}
	
		getData()
	},[])


	

	
	if(json === null) {
		return (<>
		nothing
		</>
		)
	}


	//console.log("message length", errorMessage.length)

	if(errorMessage.length > 0) {
		
		//console.log("status is "+status)
					
		return (
			<>
				Error:{errorMessage}
			</>
		)
	}





	return (
		<>
			<div><h2>Food Details:</h2>
		
		<table className="resultsTable">
			<thead>
				<tr>
					<th>Name</th><th>Calories</th><th>serving size</th><th>Fat Total</th><th>Protein (grams)</th>
					<th>Potassium (mg)</th><th>Cholesterol</th><th>Total Carbohyrates</th>
				</tr>
			</thead>
			<tbody>
						
			
		{json.items.map((f:any,i:number) => {
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
			json.exercises.map((e:any,i:number) => {
				return <tr key={i}><td>{e.name}</td><td>{e.duration_hr}</td><td>{e.duration_minutes}</td></tr>
				
			})
			
			}
			</tbody>
		</table>
		
		</div>
			
		</>
	
	)

}
