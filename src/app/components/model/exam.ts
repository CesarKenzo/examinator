import { Question } from "./question";

export interface Exam {
    id?: number,
    numberOfQuestions: number,
    questions: Question[],
    subject?: string,
    dueTo?: Date,
}