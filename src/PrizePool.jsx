import React , {useState,useEffect} from 'react'

const Prize = (props)=>{
	const [selected, setSelected] = useState(5)
	const [qnum,setQnum] = useState(0)
	const [earned,setEarned] = useState(0)



	const poll = [
	{num:1 , amount:100},
	{num:2 , amount:500},
	{num:3 ,  amount:1000},
	{num:4 , amount:1500},
	{num:5 , amount:2000},
	{num:6 , amount:2500},
	{num:7 , amount:3000},
	].reverse()


		useEffect(()=>{
			setQnum(props.Qnum)
			if(props.Qnum > 1 && props.Qnum <poll.length - 1  ){
				setEarned(poll[poll.length-props.Qnum+1].amount)
				console.log("check the prize before passing it "+earned)
				props.setEarned(earned)
			}
	
			
	},[props.Qnum ,earned])	
	

		console.log("earning--->"+earned)
  return (

  		 <ul  className="flex flex-col  w-full   list-none">
  		 {poll.map((p)=>(
  		 	<div className="flex flex-row   justify-center  my-6 ">
      		<li className ="w-1/4"> {p.num}</li>
     	 	<li className={`w-3/4 ${qnum === p.num ? "bg-red-500 px-5 rounded-lg"  : ""}`}>{p.amount}</li>
     	 	
     	 	</div>
  		 	))}
  		 	
      </ul>

  	)

}

export default Prize