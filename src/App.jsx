import { useState , useEffect , useRef} from 'react'
import Prize from './PrizePool';
import Questions from './questions';
import Timer from './timer'
import questions from './assets/questions'


function App() {
  

   const [start , setStart] = useState(false)
  const [username , setUsername] = useState("")
  const [qnum ,setQnum] = useState(1) 
  const [timeOut ,setTimeOut] = useState(false) 
  const [earned ,setEarned] = useState(0) 
  const [question ,setQuestion] = useState([])


  useEffect(()=>{
    setQuestion(questions)

  },[])
  
   
  return (
    <div className="App">
    {!start  ? (
      <div className="flex flex flex-col h-screen justify-center items-center bg-blue-600">
      <p className="text-l m-2 p-2 ">entre your username</p>
      <input  name="username" value={username}  onChange={(e)=>setUsername(e.target.value)} className="p-2 text-neutral-900 border" />
      <button className="mt-3 bg-amber-500 p-2 text-lg" onClick={(e)=> setStart(true)} >log in</button>
      
      </div>
      ):(

          <div className="flex gap-1   h-screen p-1 bg-blue-200">   
          {console.log(username)}
          <div className="w-3/4 p-2 text-center bg-center  h-full bg-cover   bg-[url('./assets/pic1.jpg')]"> 
           <div className="justify-items h-1/4 items-center " id="timer">
            <p className="text-3xl text-neutral-50 font-bold"></p>
      </div>

      {qnum === question.length+1 ? ( 
        <div>
              <p className="text-4xl font-mono text-bold   bg-gradient-to-b from-cyan-300 to-blue-300  text-red-900">Congrate {username}</p>
              <p className="text-md  font-mono text-bold  bg-gradient-to-b from-cyan-300 to-blue-300  text-black">You earned $ {earned}</p>
              <button onClick={()=> {
                setTimeOut(false)
                setQnum(1)
                setEarned(0)
              }}
              className="bg-amber-500 mt-2 p-2 text-neutral-100 text-xl"> Play Again </button>
        </div>
        ) : (
      timeOut ? (
            <div>
              <p className="text-4xl font-mono text-bold bg-gradient-to-b from-cyan-300 to-blue-300 p-2 text-red-900">L for Loser </p>
              <p className="text-md  font-mono text-bold   bg-gradient-to-b from-cyan-300 to-blue-300  text-black" >You earned $ {earned}</p>
              <button onClick={()=> {
                setTimeOut(false)
                setQnum(1)
                setEarned(0)
              }}
              className="bg-amber-500 mt-2 p-2 text-neutral-100 text-xl"> Start Over</button>
            </div>  
          ):(
            
            <div className=" " id="Questions">

            <Timer Qnum={qnum} setTimeOut={setTimeOut} />
            <Questions  setTimeOut={setTimeOut} qnum={qnum}  setQnum = {setQnum} questions={questions}/>
            </div>

        
        ))} 
     
      </div>
   <div className="w-1/4  p-2  text-center bg-blue-500">                                            
    <Prize  setEarned={setEarned}Qnum={qnum}/>
  </div>
    </div>

      )}
  
    </div>
  )
}

export default App
