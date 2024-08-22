import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import axios from "axios";
import { Alert, AlertTitle } from "./ui/alert";

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
    const [showAlert, setShowAlert] = useState(false);
    const [showWrongAlert, setShowWrongAlert] = useState(false);

    const shuffleArray = (array: any[]): any[] => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

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

    useEffect(() => {
        if (questions.length > 0 && currentQuestion < questions.length) {
            setAnswers(shuffleArray([...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer]));
        }
    }, [currentQuestion, questions]);

    const checkAnswer = (answer: string) => {
        if (answer === questions[currentQuestion].correct_answer) {
            setPoints(prevPoints => prevPoints + 5);
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 1000);
        } else {
            setShowWrongAlert(true);
            setTimeout(() => {
                setShowWrongAlert(false);
            }, 1000);
        }
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
    };

    if (error) {
        return (
            <div className="w-screen h-screen bg-zinc-950 flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white">Error!</h1>
            </div>
        );
    }

    if (searchStatus) {
        return (
            <div className="w-screen h-screen bg-zinc-950 flex items-center justify-center">
                <FallingLines color="white" width="100" visible={true} />
            </div>
        );
    }

    if (questions.length > 0 && currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        return (
            <div className="w-screen h-screen bg-zinc-950 flex items-center justify-center relative">
                <div className="absolute top-5 left-0 flex items-center justify-center w-full">
                    {showAlert && (
                        <Alert className="w-[500px] bg-zinc-800 flex items-center justify-center">
                            <AlertTitle className="text-green-500">Correct!</AlertTitle>
                        </Alert>
                    )}
                    {showWrongAlert && (
                        <Alert className="w-[500px] bg-zinc-800 flex items-center justify-center">
                            <AlertTitle className="text-red-500">Wrong!</AlertTitle>
                        </Alert>
                    )}
                </div>
                <Card className="bg-zinc-800 border-none w-[500px]">
                    <CardHeader>
                        <div className="flex justify-between">
                            <h1 className="text-xl font-bold text-white">Category: {atob(question.category)}</h1>
                            <h1 className="text-white">Points: {points}</h1>
                        </div>
                        <h1 className="text-neutral-300">Difficulty: {atob(question.difficulty)}</h1>
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-white font-semibold my-2">{atob(question.question)}</h1>
                        {question.type === "bXVsdGlwbGU=" ? (
                            <div className="flex flex-col gap-2">
                                {answers.map((answer) => (
                                    <Button onClick={() => checkAnswer(answer)} className="bg-zinc-700 hover:bg-zinc-600" key={answer}>{atob(answer)}</Button>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-row justify-between gap-2">
                                {answers.map((answer) => (
                                    <Button onClick={() => checkAnswer(answer)} className="w-full bg-zinc-700 hover:bg-zinc-600" key={answer}>{atob(answer)}</Button>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (currentQuestion >= questions.length) {
        return (
            <div className="w-screen h-screen bg-zinc-950 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-white">Congratulations!</h1>
                <h1 className="text-5xl font-bold text-white">You scored {points} out of {questions.length * 5}</h1>
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
