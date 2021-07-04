export type Option = {
    id: string;
    content: string;
    isAnswer: boolean;
  };
  
  export type Question = {
    id: string;
    question: string;
    points: number;
    options: Array<Option>;
    /**
     * Add just a number without minus sign
     */
    negativePoints: number;
    selectedOptionId?: string | null;
  };
  
  export type Quiz = {
    id: string;
    name: string;
    coverImageUrl: string;
    totalScore: number;
    questions: Array<Question>;
  };
  