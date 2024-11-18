const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Create the model
const generationConfig = {
  temperature: 1,
  top_p: 0.95,
  top_k: 40,
  max_output_tokens: 8192,
  response_mime_type: "application/json",
};

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const courseOutlineAIModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a study material for Python for Exam and level of Difficulty will be easy with summary of course, List of chapters along with the summary for each chapter, Topic list in each chapter in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{"courseSummary": "This course provides an easy introduction to Python programming. It covers fundamental concepts and syntax, making it ideal for beginners preparing for an introductory Python exam.", "chapters": [{"chapterTitle": "Introduction to Python", "chapterSummary": "This chapter introduces the basics of Python, including its history, applications, and how to set up your programming environment.", "topics": ["What is Python?", "Setting up Python environment", "First Python program", "Basic Syntax", "Running Python code"]}, {"chapterTitle": "Variables and Data Types", "chapterSummary": "This chapter covers fundamental data types in Python and how to work with variables.", "topics": ["Variables", "Integers", "Floats", "Strings", "Booleans", "Type Conversion"]}, {"chapterTitle": "Operators", "chapterSummary": "This chapter explores various operators in Python, including arithmetic, comparison, logical, and assignment operators.", "topics": ["Arithmetic Operators", "Comparison Operators", "Logical Operators", "Assignment Operators"]}, {"chapterTitle": "Control Flow", "chapterSummary": "This chapter explains conditional statements and loops in Python.", "topics": ["if-else statements", "for loop", "while loop", "break and continue statements"]}, {"chapterTitle": "Data Structures", "chapterSummary": "This chapter introduces basic data structures such as lists, tuples, and dictionaries.", "topics": ["Lists", "Tuples", "Dictionaries", "Sets"]}, {"chapterTitle": "Functions", "chapterSummary": "This chapter explains how to define and use functions to organize your code.", "topics": ["Defining Functions", "Function Arguments", "Return Values", "Scope"]}, {"chapterTitle": "Input and Output", "chapterSummary": "This chapter demonstrates how to take input from the user and display output.", "topics": ["Taking user input", "Displaying output", "File input and output"]}]}\n\n```',
        },
      ],
    },
  ],
});

// const result = await.send_message("INSERT_INPUT_HERE");
