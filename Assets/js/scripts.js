




// Start Quiz

// instructions?
// timer starts with 15 seconds
// questions to pop up
// store the score
// display the score
// score is calculated by time remaining
// incorrect answers lose points
// save initals to high score
// store score in local Storage
// prepend high score

//   * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

//   * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

//   * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

//   * When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

// * Your application should also be responsive, ensuring that it adapts to multiple screen sizes.

// * Refer to the animated GIF below for a demonstration of the application functionality.

// ![code quiz](./Assets/04-Web-APIs-homework-demo.gif)


// ### Hints

// * Store your questions as an array of objects in a separate file, `questions.js`, that follows this format:

// ```js
// var questions = [
//   {
//     title: "Commonly used data types DO NOT include:",
//     choices: ["strings", "booleans", "alerts", "numbers"],
//     answer: "alerts"
//   },
//   {
//     title: "The condition in an if / else statement is enclosed within ____.",
//     choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
//     answer: "parentheses"
//   },
//   ///etc.
// ];
// ```

// * The length of the array in `questions.js` determines the length of play. Fifteen seconds per question is a good estimate, so 5 questions will result in a length of play of 75 seconds.


// ## Minimum Requirements

// * Functional, deployed application.

// * GitHub repository with README describing project.

// * The first view of the application displays a button that starts the quiz.

// * Clicking the start button displays a series of questions.

// * Once the quiz begins, a timer starts.

// * If a question is answered incorrectly, additional time is subtracted from the timer.

// * The timer stops when all questions have been answered or the timer reaches 0.

// * After the game ends, the user can save their initials and score to a highscores view using local storage.

// ## Bonus

// * Add audio files to alert the user of correct or incorrect answers. Be sure to include the appropriate license.

// * Customize the application theme.

// * Create multiple quizzes and an option for users to choose between them.

// * Add the application to your portfolio.




// * The URL of the deployed application

// * The URL of the GitHub repository

