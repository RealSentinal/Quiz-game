import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Button } from "./components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { Input } from "./components/ui/input"

function App() {
  const [type, setType] = useState<string>("")
  const [time, setTime] = useState<number>(60)
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(10)
  const [category, setCategory] = useState<string>("")
  const [difficulty, setDifficulty] = useState<string>("")

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueConfig = /^(\d*)$/
    const newValue = e.target.value
    if (valueConfig.test(newValue)) {
      setTime(newValue === "" ? 0 : Number(newValue))
    }
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueConfig = /^([0-9]|[1-4][0-9]|50)?$/
    const newValue = e.target.value
    if (valueConfig.test(newValue)) {
      setNumberOfQuestions(newValue === "" ? 0 : Number(newValue))
    }
  }

  const handleTypeChange = (value: string) => {
    setType(value)
  }

  const handleCategoryChange = (value: string) => {
    setCategory(value)
  }

  const handleDifficultyChange = (value: string) => {
    setDifficulty(value)
  }

  const handleStart = () => {
    window.location.href = `/quiz?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-zinc-950">
      <Card className="bg-zinc-800 border-none w-3/12">
        <CardHeader>
          <h1 className="text-white font-bold w-full text-left">Settings</h1>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row">
            <Input
              onChange={handleNumberChange}
              value={numberOfQuestions}
              className="bg-zinc-700 border-none text-white mr-0.5"
              placeholder="Number Of Questions max-50"
            />
            <Input
              onChange={handleTimeChange}
              value={time}
              className="bg-zinc-700 border-none text-white ml-0.5"
              placeholder="Time (seconds)"
            />
          </div>

          <Select onValueChange={handleTypeChange} value={type}>
            <SelectTrigger className="bg-zinc-700 border-none text-white my-1">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-700 border-none">
              <SelectItem className="text-white" value="any">Any</SelectItem>
              <SelectItem className="text-white" value="multiple">Multiple</SelectItem>
              <SelectItem className="text-white" value="boolean">Boolean</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={handleCategoryChange} value={category}>
            <SelectTrigger className="bg-zinc-700 border-none text-white my-1">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-700 border-none">
              <SelectItem className="text-white" value="any">Any Category</SelectItem>
              <SelectItem className="text-white" value="9">General Knowledge</SelectItem>
              <SelectItem className="text-white" value="10">Entertainment: Books</SelectItem>
              {/* Diğer SelectItem bileşenleri */}
            </SelectContent>
          </Select>

          <Select onValueChange={handleDifficultyChange} value={difficulty}>
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
          <Button onClick={handleStart} className="w-14 h-14 bg-zinc-800 hover:border-2"><ArrowRight /></Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
