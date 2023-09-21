

export type DisplayResultsProp = {json:any}

export const DisplayResults : React.FC<DisplayResultsProp> =({json}) => {

	//console.log(json)

	if(json === null) {
		return (<>
		
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
