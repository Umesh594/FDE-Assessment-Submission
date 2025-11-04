Project Overview:
This project demonstrates a text analysis system built using React, n8n and the Groq API(I have used groq API because I dont have free credits for other AI tools). The goal is to create a automation pipeline that analyzes user entered text through a web interface and provides AI generated summaries in real time.

When a user types a paragraph the text is sent to an n8n workflow via a webhook. The workflow processes the input using the Groq LLM model openai/gpt-oss-120b and returns a summary and sentiment result which is displayed instantly in the user interface.

This assignment highlights:
Integration between the frontend and n8n automation flow
Real time AI inference using the Groq LLM
Clean user interface design using React+Tailwind CSS

n8n Workflow Overview:

The n8n workflow has four main nodes that work together to process user input and deliver results:
Webhook Node:
Receives POST requests from the frontend containing the text to analyze.

Groq API Node:
Calls the Groq LLM endpoint with a dynamic prompt using the input text.
The prompt is designed to ensure a concise and informative response.

Set Result Node:
Extracts and cleans the LLM response to ensure the output format remains consistent.

Respond to Webhook Node:
Sends a structured response back to the frontend.
The workflow is activated in production mode and the live webhook URL is connected directly to the frontend code.

Frontend Integration:
The frontend was developed using React and TypeScript with Tailwind CSS for styling.
Core Functionalities:
A text area for user input
A character and word counter for real time feedback
An action button Analyze Text with AI to send the text to the backend
A response display card showing the AI analysis result. When the button is clicked the frontend sends a POST request to the n8n webhook URL with the input text in JSON format. It then waits for the JSON response and updates the UI dynamically.

Conclusion:
This project successfully demonstrates how n8n can integrate seamlessly with modern web technologies and AI services. It delivers a clean functional and efficient system where a user can analyze text in real time through an intelligent workflow powered by Groq LLM.