
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input"
import "./index.css"
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import {Form } from "./components/Form"
import { Interview } from "./components/Interview";
import { Result } from "./components/Result";
import { Toaster } from "sonner";


export function App() {
  return (
   
   <Routes>
    <Route path="/" element={<Form/>}/>
    <Route path="/interview/:interviewId" element={<Interview />} />
        <Route path="/result/:interviewId" element={<Result />} />
   </Routes>
  //  <Toaster position="bottom-left" />
  )
}

export default App;
