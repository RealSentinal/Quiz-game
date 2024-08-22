import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import axios from "axios";

interface Question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

function Quiz() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const numberOfQuestions = params.get('amount');
    const category = params.get('category');
    const difficulty = params.get('difficulty');
    const type = params.get('type');

    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [points, setPoints] = useState(0);
    const [searchStatus, setSearchStatus] = useState(true);
    const [error, setError] = useState<unknown>(null);
    const [answers, setAnswers] = useState<string[]>([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}&encode=base64`);
                setQuestions(response.data.results);
                console.log(response.data.results);
            } catch (error) {
                console.error("Error fetching quiz data:", error);
                setError(error);
            } finally {
                setSearchStatus(false);
            }
        };
        fetchData();
    }, [numberOfQuestions, category, difficulty, type]);

    if (questions.length > 0 && currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        return (
            <div className="w-screen h-screen bg-zinc-950 flex items-center justify-center relative">

                <Card className="bg-zinc-800 border-none w-[500px]">
                    <CardHeader>
                        <div className="flex justify-between">
                            <h1 className="text-xl font-bold text-white">Category: {atob(question.category)}</h1>
                            <h1 className="text-white">Points: {points}</h1>
                        </div>
                        <h1 className="text-neutral-300">Difficulty: {atob(question.difficulty)}</h1>
                    </CardHeader>

                </Card>
            </div>
        );
    }

    if (currentQuestion >= questions.length) {
        return (
            <div className="w-screen h-screen bg-zinc-950 flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white">Congratulations!</h1>
            </div>
        );
    }

    return (
        <div className="w-screen h-screen bg-zinc-950 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">Hi!</h1>
        </div>
    );
}

export default Quiz;
