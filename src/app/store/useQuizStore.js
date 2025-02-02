"use client"; 

import { create } from "zustand";

const useQuizStore = create((set) => ({
  quizData: {
    title: '',
    topic: '',
    description: '',
    duration: '',
    shuffle: '',
    negative_marks: '',
    correct_answer_marks: '',
    coin_count: '',
    questions_count: '',
    max_mistake_count: '',
    questions: [],
  },
  loading: true,
  error: null,

  // Fetch quiz data from API
  fetchQuizData: async () => {
    try {
      const response = await fetch("/api/quiz");
      if (!response.ok) throw new Error("Failed to fetch quiz data");

      const data = await response.json();
      set({ quizData: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  //Shuffles the questions and the options
shuffleQuestions: () => {
  set((state) => {
    const shuffledQuestions = [...state.quizData.questions].sort(() => Math.random() - 0.5);

    const shuffledWithOptions = shuffledQuestions.map((question) => ({
      ...question,
      options: [...question.options].sort(() => Math.random() - 0.5),
    }));

    return {
      quizData: {
        ...state.quizData,
        questions: shuffledWithOptions,
      },
    };
  });
},

}));

export default useQuizStore;
