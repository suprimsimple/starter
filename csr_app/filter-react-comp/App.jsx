import React, { memo, useState } from "react"

const Button = ({ children ,onClick}) => {
	return <button onClick={onClick} className="bg-black px-1 text-white">{children}</button>
}
const TimeStamp = memo(()=>{
  return <div>
       <button>
         Click Me {new Date().toLocaleTimeString()}
       </button>

     </div>
});


const App = () => {
	const [count, setCount] = useState(0)
	const handleCount = () => {
		setCount(count + 1)
	}
	return (
		<>
			<Button onClick={handleCount}>Button Components asd</Button>
			<span>{count}</span>
			<TimeStamp></TimeStamp>
		</>
	)
}

export default App
