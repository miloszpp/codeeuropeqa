export interface Question {
    content: string;
    timestamp: number;
}

export interface AddQuestionCommand {
    content: string;
}