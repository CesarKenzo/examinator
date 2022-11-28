import { Exam } from "./exam";

export interface Task {
    id?: number,
    title: string,
    grade?: number,
    userId: number[],
    exam: Exam,
    userAnswers: string[]
}