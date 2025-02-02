"use client";

import { useEffect } from "react";
import useQuizStore from "@/app/store/useQuizStore";

export default function QuizDataProvider() {
  const fetchQuizData = useQuizStore((state) => state.fetchQuizData);

  useEffect(() => {
    fetchQuizData();
  }, [fetchQuizData]);

  return null; 
}
