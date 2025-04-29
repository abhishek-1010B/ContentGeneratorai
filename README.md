
# 📚 AI Study Content Generator

Welcome to the AI Study Content Generator, a cutting-edge SaaS application designed to revolutionize learning by generating personalized study materials using advanced AI technology. Built with the latest web development tools and techniques, this platform is perfect for educators, students, and anyone looking to simplify their learning process.

---

## 📋 Table of Contents
- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 📝 About the Project

The AI Study Content Generator combines AI capabilities with scalable SaaS architecture to provide a seamless learning experience. With advanced AI features powered by Gemini AI, it generates tailored study materials, quizzes, and summaries, making learning effective and efficient. Whether you're an individual learner or a large institution, this platform adapts to your needs.
currently the project is not delpoyed due to some issues but u can clone this project to check the output.
### Key Goals of the AI Study Material Generator:
- Simplify the creation of personalized learning materials
- Enable secure and seamless access to resources
- Offer a scalable and reliable learning management system

---

## ✨ Key Features

- **AI-Powered Content Generation**: Uses Gemini AI for generating study materials, quizzes, and summaries.
- **Secure Authentication**: Powered by Clerk for robust user authentication.
- **Scalable Serverless Functions**: Inngest enables efficient serverless operations.
- **Payment Integration**: Stripe supports subscription-based payments for premium users.
- **Responsive Design**: Built with Tailwind CSS for a seamless UI/UX.
- **Real-Time Updates**: Fast and efficient updates with Next.js server-side rendering and API routes.

---

## 🛠 Technologies Used

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Serverless API routes with Next.js
- **Database**: Neon (PostgreSQL-based serverless database)
- **AI Integration**: Gemini AI
- **Authentication**: Clerk
- **Payments**: Stripe
- **Serverless Functions**: Inngest

---

## 🚀 Getting Started

### Prerequisites

Before starting, ensure you have the following installed:

- Node.js (v16+)
- npm or Yarn
- Stripe account
- Clerk account
- Neon database instance
- Inngest account
- OpenAI (or Gemini AI) API key

### Installation

1. **Clone the Repository**
   
   ```
   git clone https://github.com/YourUsername/AI-Study-Material-Generator.git
   cd AI-Study-Material-Generator

2. **Install Dependencies**
   
   ```
   npm install
 
3. **Set Up Environment Variables**
   
   Create a .env.local file in the root directory and add the following variables:

5. **env**
   
    ```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
STRIPE_SECRET_KEY=your_stripe_secret_key
# NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY=
NEXT_PUBLIC_DATABASE_CONNECTION_STRING=
INNGEST_API_KEY=
NEXT_PUBLIC_GEMINI_API_KEY=




NEXT_PUBLIC_CLERK_SIGN_UP_URL
NEXT_PUBLIC_CLERK_SIGN_IN_URL



HOST_URL


6. **Run the Application**
   
    ```
    npm run dev
    ```

7. **Build for Production**
   
    For deploying the app, build the project:
    ```
    npm run build
    ```
---

## 📚 Usage
- **User Registration**: Sign up and log in securely using Clerk authentication.
- **Generate Study Material**: Input topics or upload content to create AI-generated learning materials.
- **Payments**: Subscribe to premium features using Stripe.
- **Real-Time Updates**: Enjoy fast, responsive features powered by serverless functions.

---

## 🤝 Contribution

-We welcome contributions to make the AI Study Material Generator even better! Follow these steps to contribute:

1. **Fork the Project**
   
    Create a copy of the repository by forking it.
    Create a Feature Branch
    ```
    git checkout -b feature/AmazingFeature

2. **Commit Your Changes**
   
    ```
    git commit -m 'Add some AmazingFeature'
    ```

3. **Push to the Branch**
   
    ```
    git push origin feature/AmazingFeature

4. **Open a Pull Request**

    Submit your changes through a pull request for review.

---

## 📜 License
Distributed under the MIT License. See LICENSE for more details.

## 📞 Contact
Project Maintainer:

- Abhishek Duggal
- Email: abhishek.duggal2002@gmail.com
- GitHub: AbhishekDuggal

---
Feel free to reach out with any questions, ideas, or feedback!
