import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Button } from "./components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { Input } from "./components/ui/input"

function App() {
  const [type, setType] = useState<string>("")
  const [Time, setTime] = useState<number>(60)
  const [NumberOfQuetions, setNumberOfQuetions] = useState<any>(10)

  const settime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueConfig = /^(\d*)$/
    const newValue = e.target.value
    if (valueConfig.test(newValue)) {
      newValue === "" ? setTime(0) : setTime(Number(newValue))
    }
  }

  const setNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueConfig = /^([0-9]|[1-4][0-9]|50)?$/
    const newValue = e.target.value
    if (valueConfig.test(newValue)) {
      newValue === "" ? setNumberOfQuetions(0) : setNumberOfQuetions(Number(newValue))
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-zinc-950">
      <Card className="bg-zinc-800 border-none w-3/12">
        <CardHeader>
          <h1 className="text-white font-bold w-full text-left">Settings</h1>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row">
            {/* <SelectNumberOfQuestions /> */}
            <Input onChange={setNumber} value={NumberOfQuetions} className="bg-zinc-700 border-none text-white mr-0.5" placeholder="Number Of Questions max-50" />
            {/* <SelectTime /> */}
            <Input onChange={settime} value={Time} className="bg-zinc-700 border-none text-white ml-0.5" placeholder="Time (second)" />
          </div>
          {/* <SelectType /> */}
          <Select>
            <SelectTrigger className="bg-zinc-700 border-none text-white my-1">
              <SelectValue placeholder="Select Type" />
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
              <SelectItem className="text-white" value="9">General Knowledge</SelectItem>
              <SelectItem className="text-white" value="10">Entertainment: Books</SelectItem>
              <SelectItem className="text-white" value="11">Entertainment: Film</SelectItem>
              <SelectItem className="text-white" value="12">Entertainment: Music</SelectItem>
              <SelectItem className="text-white" value="13">Entertainment: Musicals & Theatres</SelectItem>
              <SelectItem className="text-white" value="14">Entertainment: Television</SelectItem>
              <SelectItem className="text-white" value="15">Entertainment: Video Games</SelectItem>
              <SelectItem className="text-white" value="16">Entertainment: Board Games</SelectItem>
              <SelectItem className="text-white" value="17">Science & Nature</SelectItem>
              <SelectItem className="text-white" value="18">Science: Computers</SelectItem>
              <SelectItem className="text-white" value="19">Science: Mathematics</SelectItem>
              <SelectItem className="text-white" value="20">Mythology</SelectItem>
              <SelectItem className="text-white" value="21">Sports</SelectItem>
              <SelectItem className="text-white" value="22">Geography</SelectItem>
              <SelectItem className="text-white" value="23">History</SelectItem>
              <SelectItem className="text-white" value="24">Politics</SelectItem>
              <SelectItem className="text-white" value="25">Art</SelectItem>
              <SelectItem className="text-white" value="26">Celebrities</SelectItem>
              <SelectItem className="text-white" value="27">Animals</SelectItem>
              <SelectItem className="text-white" value="28">Vehicles</SelectItem>
              <SelectItem className="text-white" value="29">Entertainment: Comics</SelectItem>
              <SelectItem className="text-white" value="30">Science: Gadgets</SelectItem>
              <SelectItem className="text-white" value="31">Entertainment: Japanese Anime & Manga</SelectItem>
              <SelectItem className="text-white" value="32">Entertainment: Cartoon & Animations</SelectItem>
            </SelectContent>
          </Select>
          {/* <SelectDifficulty /> */}
          <Select>
            <SelectTrigger className="bg-zinc-700 border-none text-white my-1">
              <SelectValue placeholder="Select Difficulty" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-700 border-none">
              <SelectItem className="text-white" value="any">Any Difficulty</SelectItem>
              <SelectItem className="text-white" value="easy">Easy</SelectItem>
              <SelectItem className="text-white" value="medium">Medium</SelectItem>
              <SelectItem className="text-white" value="hard">Hard</SelectItem>
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
