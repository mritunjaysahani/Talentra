import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input"
import "../index.css"

export function Form(){
    return <div className="h-screen w-screen flex justify-center items-center">
    
    <div> 
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      KickStart Your AI InterView
    </h3>
      <div className="p-2">
        <Input placeholder="Paste Linkedin URL"/>
      </div>
    <div className="p-2">
      <Input placeholder="Paste Github URL" />
    </div>
    <div className="flex justify-center p-4">
      <Button>Start interview</Button>
    </div>
    </div>
   </div>
}