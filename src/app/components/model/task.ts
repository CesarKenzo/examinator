export interface Task {
    id?: number,
    grade?: number,
    userId: number[],
    examId: number,
    userAnswers: string[]
}