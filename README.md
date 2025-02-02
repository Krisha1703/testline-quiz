# 🎯 Quiz App

## 📋 Overview
The **Quiz App** is an engaging, interactive, and user-friendly quiz game designed to challenge users with multiple-choice questions. It features dynamic game mechanics such as score tracking, streak bonuses, power-ups, and a responsive UI that keeps users entertained while testing their knowledge.

![quiz-1.png](/screenshots/quiz-1.png)
*Initial question screen with the progress bar.*

## 🚀 Features
- **📡 Quiz Data:** Fetched dynamically from an external API for fresh and updated content.
- **🎮 Game Menu:** Includes options to shuffle questions, restart the quiz, track your score, view points, and access the quiz shop.

![quiz-2.png](/screenshots/quiz-2.png)
*Correct answer screen.*

- **⚡ Power-Ups:**
  - 🎯 **50/50:** Eliminates two incorrect options.

  ![50-50.png](/screenshots/50-50.png)
   *Using the 50/50 power-up to eliminate incorrect options.*

  - ⏭️ **Skip Question:** Allows skipping a question without penalty.
  - ❄️ **Freeze Timer (30s):** Freezes the countdown timer for 30 seconds.
  - 💡 **Hint:** Provides helpful clues, purchasable with coins.

  ![hint.png](/screenshots/hint.png)
   *Using the Hint power-up to get a clue.*

- **💰 Points & Coins System:**
  - ✅ **Correct Answer:** +4 points and 1 coin.
  - ❌ **Wrong Answer:** -1 point.

  ![incorrect-answer.png](/screenshots/incorrect-answer.png)
   *Incorrect answer screen with power-ups enabled after purchasing.*

  - 🔥 **Streak Bonus:** 4 points plus additional points equal to the current streak count.
- **📊 Results Summary:** Displays final score percentage, mistakes made, unanswered questions, total coins earned, and points scored.

![quiz-result2.png](/screenshots/quiz-result2.png)
*Results summary showing the quiz outcome.*

- ⏱️ **Timer:** The quiz has timer of 15 minutes and ends automatically when the timer runs out.
- 🎨 **Interactive UI:** Smooth animations, consistent design, and an intuitive layout for an immersive experience.
- 🤝 **User-Friendly:** Simple navigation and easy-to-understand gameplay mechanics.
- 🌟 **Engaging Game Theme:** Implementation of gamification enhances overall quiz experience.

## 📚 Learning Support
- 📝 **Explanation for Each Question:** Detailed explanations to help users learn from mistakes.
- 📖 **Reading Materials:** Additional resources linked to each question for deeper understanding.
- 🎯 **Practice Materials:** Extra exercises provided to reinforce learning.

## 🛠️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Krisha1703/testline-quiz.git
   ```
2. Navigate to the project directory:
   ```bash
   cd testline-quiz
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## 🖥️ Technologies Used
- **Frontend:** Next.js ⚡, Tailwind CSS 🎨, Framer Motion 🖼️
- **State Management:** Zustand 🗂️
- **API Integration:** Fetching quiz data from external APIs 🌐


