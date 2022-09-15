import React, {useState , useEffect} from 'react'

const Timer = ({Qnum , setTimeOut})=>{

	const [time,setTime]  = useState(30)

	useEffect(()=>{
		if(time === 0 ) return setTimeOut(true)

		const interval =setInterval(()=>{
			setTime((prev) =>  prev - 1 ) 

		}, 1000)
	return  () => clearInterval(interval)

	}, [time,setTimeOut])

	useEffect(()=>{
		setTime(30)

	},[Qnum])
	return (
		<div>
		<p className="text-3xl text-neutral-100 border w-14 h-14 p-2 rounded-full">{time}</p>
		</div>
		)

}

export default Timer