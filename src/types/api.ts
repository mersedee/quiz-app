export interface CategoryType {
  id: number
  name: string
}

export interface QuestionType {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}
