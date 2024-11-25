# Legal Document Application

## Overview
This web application helps users create and review legal documents using AI technology. The user-friendly interface guides users through drafting documents and reviewing existing ones.

## Features
- **Document Drafting**: Create legal documents by answering questions.
- **Document Review**: Upload and review existing documents.
- **Query Section**: Chat interface for asking questions.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Technologies
- **Frontend**: React, Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React hooks (`useState`, `useEffect`)
- **Build Tool**: Vite

## File Structure
```plaintext
src/
├── components/
│   ├── Card.jsx
│   ├── DocumentDialog.jsx
│   ├── Header.jsx
│   ├── QuerySection.jsx
│   ├── ReviewDocument.jsx
│   └── Sidebar.jsx
├── App.jsx
├── main.jsx
└── index.css
tailwind.config.js
vite.config.js
```
## Installation
To run this project locally, follow these steps:
# Clone the Repository
git clone https://github.com/yourusername/legal-document-app.git
cd legal-document-app

# Install Dependencies
npm install

# Run the Application
npm run dev

# Open in Browser
Navigate to http://localhost:5173
## Usage
Here’s how to use the application:
1. Start Drafting: 
   - Click on the "Start Drafting" card to create a new document. 
   - Fill in the required details and proceed through the steps.

2. Review Documents: 
   - Click on the "Review Documents" card to upload a document for review.

3. Ask Query: 
   - Use the Query Section to interact with the AI and get responses to your legal questions.
