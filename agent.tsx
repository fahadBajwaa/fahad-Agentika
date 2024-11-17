import React, { useState, useEffect } from 'react';
import { Agent, TTS } from 'react-agents';

// Example function to simulate feedback analysis
const analyzeAnswer = (answer: string) => {
  if (answer.length > 50) {
    return "Great job! Your answer was detailed and thoughtful.";
  } else {
    return "Consider elaborating more on your experience to provide a clearer picture.";
  }
};

export default function MyAgent() {
  // State to manage the conversation stages
  const [conversationState, setConversationState] = useState("GREETING");
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState("");

  // Define prompts for each stage of the conversation
  const prompts = {
    GREETING: "Hello! I'm Portgas D Ace, your Interview Coach. Let's get started with your interview preparation!",
    ASKING_JOB_ROLE: "To start, could you tell me what job role you're preparing for?",
    ASKING_SKILL_LEVEL: "Great! Now, could you share your skill level for this job role? Are you a beginner, intermediate, or expert?",
    PRACTICE_SESSION: "Let's dive into a practice question. Tell me about a time you handled a difficult challenge at work.",
    WAITING_FOR_RESPONSE: "Nice! I'm analyzing your response now...",
    END_SESSION: "Well done! You've completed the practice session. Would you like to start again or exit?"
  };

  // Use effect to trigger initial greetings and ask first question
  useEffect(() => {
    handleUserMessage(""); // Trigger greeting and first prompt immediately
  }, []);

  // Function to handle user input and change conversation state
  const handleUserMessage = (message: string) => {
    switch (conversationState) {
      case "GREETING":
        setResponse(prompts.ASKING_JOB_ROLE);
        setConversationState("ASKING_JOB_ROLE");
        break;
      case "ASKING_JOB_ROLE":
        setResponse(prompts.ASKING_SKILL_LEVEL);
        setConversationState("ASKING_SKILL_LEVEL");
        break;
      case "ASKING_SKILL_LEVEL":
        setResponse(prompts.PRACTICE_SESSION);
        setConversationState("PRACTICE_SESSION");
        break;
      case "PRACTICE_SESSION":
        setResponse(prompts.WAITING_FOR_RESPONSE);
        setConversationState("WAITING_FOR_RESPONSE");
        break;
      case "WAITING_FOR_RESPONSE":
        const analysis = analyzeAnswer(message); // Perform action (analysis of the user's answer)
        setFeedback(analysis);  // Provide feedback to the user
        setResponse(prompts.END_SESSION);
        setConversationState("END_SESSION");
        break;
      case "END_SESSION":
        setResponse(prompts.GREETING);
        setConversationState("GREETING");
        break;
      default:
        setResponse("Something went wrong. Please start again.");
        setConversationState("GREETING");
    }
  };

  // Handle the change in user input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(event.target.value);
  };

  // Trigger conversation flow when Enter is pressed
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && userMessage.trim()) {
      handleUserMessage(userMessage);
      setUserMessage(""); // Clear input field after submission
    }
  };

  const [userMessage, setUserMessage] = useState("");

  return (
    <Agent>
      {/* TTS Component for dynamic voice response */}
      <TTS voiceEndpoint="elevenlabs:kadio:YkP683vAWY3rTjcuq2hX" />
      
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', width: '300px' }}>
        {/* Displaying current response from the agent */}
        <div style={{ marginBottom: '20px', fontSize: '16px' }}>
          <strong>{response}</strong>
        </div>

        {/* User input field */}
        <input
          type="text"
          value={userMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your answer here..."
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        
        {/* Displaying feedback after user answers */}
        {feedback && (
          <div style={{ marginTop: '20px', color: '#28a745', fontSize: '14px' }}>
            <strong>Feedback: </strong>{feedback}
          </div>
        )}
      </div>
    </Agent>
  );
}
