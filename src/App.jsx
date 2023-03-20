import './App.css'
import { Divider } from "@tremor/react";
import D from './dashboard'
function App() {

  return (
   <div>
    <h1 className='text-red-500 text-5xl font-extrabold'>Placement Dashboard</h1>
    <Divider></Divider>
    <D></D>
   </div>
  )
}

export default App
