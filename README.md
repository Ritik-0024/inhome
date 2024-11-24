Project Report
==============

Project Overview
----------------

This project is a web application designed to assist users in creating and reviewing legal documents using AI technology. The application features a user-friendly interface that guides users through the process of drafting documents and allows them to review existing documents. The application is built using React and Tailwind CSS for styling.

Key Features
------------

*   **Document Drafting**: Users can create legal documents by answering a series of questions. The application personalizes the document based on user input.
*   **Document Review**: Users can upload existing documents for review and receive feedback on them.
*   **Query Section**: A chat interface where users can ask questions and receive automated responses.
*   **Responsive Design**: The application is designed to be responsive, ensuring a seamless experience on both desktop and mobile devices.

Technologies Used
-----------------

*   **Frontend**: React, Tailwind CSS
*   **Icons**: Lucide React for icons
*   **State Management**: React's useState and useEffect hooks
*   **Build Tool**: Vite for faster development and build processes

File Structure
--------------

VerifyOpen In EditorEditorEditCopy code

`1src/ 2├── components/ 3│   ├── Card.jsx 4│   ├── DocumentDialog.jsx 5│   ├── Header.jsx 6│   ├── QuerySection.jsx 7│   ├── ReviewDocument.jsx 8│   └── Sidebar.jsx 9├── App.jsx 10├── main.jsx 11└── index.css 12tailwind.config.js 13vite.config.js`

Installation
------------

To run this project locally, follow these steps:

1.  **Clone the Repository**
    
    bash
    
    VerifyOpen In EditorEditorEditCopy code
    
    `1git clone https://github.com/yourusername/legal-document-app.git 2cd legal-document-app`
    
2.  **Install Dependencies**
    
    bash
    
    VerifyOpen In EditorEditorEditCopy code
    
    `1npm install`
    
3.  **Run the Application**
    
    bash
    
    VerifyOpen In EditorEditorEditCopy code
    
    `1npm run dev`
    
4.  **Open in Browser** Navigate to `http://localhost:3000` in your web browser.
    

Usage
-----

1.  **Start Drafting**: Click on the "Start Drafting" card to begin creating a new document. Fill in the required details and proceed through the steps.
2.  **Review Documents**: Click on the "Review documents" card to upload a document for review.
3.  **Ask Query**: Use the Query Section to interact with the AI and get responses to your legal questions.
