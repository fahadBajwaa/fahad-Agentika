# fahad-Agentika

## Portgas D Ace: Your Interview Coach

Portgas D Ace is an interactive AI Interview Coach designed to simulate mock interviews, provide constructive feedback, and help users prepare for job interviews. Built using the `react-agents` library, the agent dynamically guides users through practice sessions, evaluates responses, and offers personalized tips.

---

## Features

- **Dynamic Voice Interaction**: Integrated Text-to-Speech (TTS) using ElevenLabs API.
- **Conversation Management**: State-based conversation flow to guide users through the interview process.
- **Feedback Analysis**: Simulates feedback on user responses based on content length and relevance.
- **Interactive Input**: User-friendly text input for real-time engagement.
- **Restart Option**: Allows users to restart or end the session at any point.

---

## Installation

1. Clone the repository:

   git clone <repository_url>
   
   cd project

2. Install dependencies:

    npm install

3. Start the development server:

     npm start

---

## Usage

- Navigate to http://localhost:3000 in your browser.
- The agent will greet you and guide you through the mock interview process.
- Interact with the agent by typing your responses in the input box and pressing Enter.
- Receive feedback on your responses and proceed through the conversation stages.

---

---

## Agent Flow

- **Greeting**: The agent introduces itself and initiates the session.
- **Role Inquiry**: Asks the user about the job role they are preparing for.
- **Skill Assessment**: Requests the user's skill level (beginner, intermediate, expert).
- **Practice Question**: Provides a behavioral interview question for the user to answer.
- **Feedback Analysis**: Evaluates the user's response and provides tips for improvement.
- **Completion**: Concludes the session and offers an option to restart.

---

## Dependencies
- React
- react-agents
- ElevenLabs TTS API
