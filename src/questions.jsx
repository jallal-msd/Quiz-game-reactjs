import React , {useState ,useEffect} from 'react'

const Questions = (props)=>{

		const [currentQ ,setCurrentQ] = useState(null)
		const [selAnswer ,setSelAnswer] = useState(null)
		const [className ,setClassName] = useState("")
		const [btn,setBtn] = useState(false);
		

		useEffect(()=>{
				setCurrentQ(props.questions[props.qnum-1])
		}, [props.questions , props.qnum])
		

		const delay=(duration, callback)=>{
			setTimeout(()=>{
				callback();
			},duration)

		}

		const handleClick = (ans)=>{
			    setBtn(true);
				setSelAnswer(ans)
				console.log("clicked")
				setClassName("bg-blue-500")
				delay(2000,()=> setClassName(ans.correct === true ? "bg-green-500" : "bg-red-700"))

				delay(4000,()=> {
						if(ans.correct ){
							props.setQnum((prev)=> prev+1)
							setBtn(false);
						}else{
							props.setTimeOut(true)
						}

				})
		}
  return (

  		 <div>
  		 		
           <>
        <p className="text-3xl text-neutral-50 font-bold"> {currentQ?.question} </p>
       <div className="text-neutral-50  gap-10 mt-24 grid grid-cols-2 grid-rows-2  ">
       	{ currentQ?.answers.map((ans)=>(
                  <button disabled={btn} className={`border rounded-lg bg-black p-3  ${btn ? "hover: " : "hover:bg-blue-500"}
                  	  ${selAnswer === ans ? className : ""}`} 
                  		onClick={()=>handleClick(ans)}>{ans.text}</button>
        ))}

       </div>,

      	</>
  		 </div>
  	)

}

export default Questions