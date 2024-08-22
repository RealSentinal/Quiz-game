import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Button } from "./components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { Input } from "./components/ui/input"

function App() {
  const [type, setType] = useState<string>("")
  const [value, setValue] = useState<any>(10)

  const setNumberOfQuetions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueConfig = /^([0-9]|[1-4][0-9]|50)?$/
    const newValue = e.target.value
    if (valueConfig.test(newValue)) {
      setValue(newValue)
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-zinc-950">
      <Card className="bg-zinc-800 border-none w-3/12">
        <CardHeader>
          <h1 className="text-white font-bold w-full text-left">Settings</h1>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row gap-1">
            {/* <SelectNumberOfQuestions /> */}
            <Input onChange={setNumberOfQuetions} value={value} className="bg-zinc-700 border-none text-white my-1" placeholder="Number Of Questions max-50" />
            {/* <SelectTime /> */}
            <Input className="bg-zinc-700 border-none text-white my-1" placeholder="Time" />
          </div>
          {/* <SelectType /> */}
          <Select>
            <SelectTrigger className="bg-zinc-700 border-none text-white my-1">
              <SelectValue onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setType(e.target.value); console.log(type) }} placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-700 border-none">
              <SelectItem className="text-white" value="any">Any</SelectItem>
              <SelectItem className="text-white" value="multiple">Multiple</SelectItem>
              <SelectItem className="text-white" value="boolean">Boolen</SelectItem>
            </SelectContent>
          </Select>
          {/* <SelectCategory /> */}
          <Select>
            <SelectTrigger className="bg-zinc-700 border-none text-white my-1">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-700 border-none">
              <SelectItem className="text-white" value="any">Any Category</SelectItem>
              <SelectItem className="text-white" value="multiple">General Knowledge</SelectItem>
              <SelectItem className="text-white" value="boolean">Entertainment: Books</SelectItem>
              <SelectItem className="text-white" value="boolean">Entertainment: Film</SelectItem>
              <SelectItem className="text-white" value="boolean">Entertainment: Music</SelectItem>
              <SelectItem className="text-white" value="boolean">Entertainment: Musicals & Theatres</SelectItem>
              <SelectItem className="text-white" value="boolean">Entertainment: Television</SelectItem>
              <SelectItem className="text-white" value="boolean">Entertainment: Video Games</SelectItem>
              <SelectItem className="text-white" value="boolean">Entertainment: Board Games</SelectItem>
              <SelectItem className="text-white" value="boolean">Science & Nature</SelectItem>
              <SelectItem className="text-white" value="boolean">Science: Computers</SelectItem>
              <SelectItem className="text-white" value="boolean">Science: Mathematics</SelectItem>
              <SelectItem className="text-white" value="boolean">Mythology</SelectItem>
              <SelectItem className="text-white" value="boolean">Sports</SelectItem>
              <SelectItem className="text-white" value="boolean">Geography</SelectItem>
              <SelectItem className="text-white" value="boolean">History</SelectItem>
              <SelectItem className="text-white" value="boolean">Politics</SelectItem>
              <SelectItem className="text-white" value="boolean">Art</SelectItem>
              <SelectItem className="text-white" value="boolean">Celebrities</SelectItem>
              <SelectItem className="text-white" value="boolean">Animals</SelectItem>
              <SelectItem className="text-white" value="boolean">Vehicles</SelectItem>
              <SelectItem className="text-white" value="boolean">Entertainment: Comics</SelectItem>
              <SelectItem className="text-white" value="boolean">Science: Gadgets</SelectItem>
              <SelectItem className="text-white" value="boolean">Entertainment: Japanese Anime & Manga</SelectItem>
              <SelectItem className="text-white" value="boolean">Entertainment: Cartoon & Animations</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter className="w-full flex items-center justify-center">
          <Button className="w-14 h-14 bg-zinc-800 hover:border-2"><ArrowRight /></Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
