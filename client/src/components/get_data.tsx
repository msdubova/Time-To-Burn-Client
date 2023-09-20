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
		if(status == 500) return (<>{ERROR_500}</>)
		if(status == 418) return (<>{ERROR_418}</>)
			
		return (
			<>
				Error:{errorMessage}
			</>
		)
	}

	//uses scan so findtext can find each field
    return (
        <>
            <div><span>Name:{json?.name}</span><span>Height:{json?.height}</span> <span>Mass:{json?.mass}</span> <span>Birth Year:{json?.birth_year}</span> <span>Eye Colour:{json?.eye_color}</span></div>
        </>
    )
	
}

export default StarWarsAPICall

