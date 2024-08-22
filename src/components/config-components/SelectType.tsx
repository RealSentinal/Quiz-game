import { Card, CardHeader, CardContent, CardFooter } from "../ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

function SelectType() {
    return (
        <Card className="bg-zinc-800 border-none w-3/12">
            <CardHeader>
                <h1 className="text-white font-bold w-full text-left">Select Type Of Question</h1>
            </CardHeader>
            <CardContent>
                <Select>
                    <SelectTrigger className="bg-zinc-700 border-none text-white">
                        <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-700 border-none">
                        <SelectItem className="text-white" value="any">Any</SelectItem>
                        <SelectItem className="text-white" value="multiple">Multiple</SelectItem>
                        <SelectItem className="text-white" value="boolean">Boolen</SelectItem>
                    </SelectContent>
                </Select>
            </CardContent>
            <CardFooter className="w-full flex items-center justify-center">
                <Button className="w-14 h-14 bg-zinc-800 hover:border-2"><ArrowRight /></Button>
            </CardFooter>
        </Card>
    )
}

export default SelectType