import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

// Existing DocumentDialog for Start Drafting
const DocumentDialog = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    documentType: '',
    description: '',
    primaryParty: 'PARALLEL HQ',
    primaryAddress: '#227, 3rd Floor, Leela Kiran, 13th Cross Road, 5th Main Rd, Indira Nagar 1st Stage, Bengaluru, Karnataka 560038',
    questions: {
      domain: '',
      products: '',
      childrenData: '',
      comments: ''
    }
  });

  const [expandedQuestion, setExpandedQuestion] = useState(1);

  const questions = [
    {
      id: 1,
      question: "What is your domain or URL of your website?",
      field: "domain"
    },
    {
      id: 2,
      question: "What types of medication or products does MedInc sell?",
      field: "products"
    },
    {
      id: 3,
      question: "Will any data be collected from children 13 and under?",
      field: "childrenData"
    },
    {
      id: 4,
      question: "Can users of the website post comments or reviews?",
      field: "comments"
    }
  ];

  const handleContinue = () => {
    setStep(step + 1);
  };
  const handleQuestionClick = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  const handleAnswerChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      questions: {
        ...prev.questions,
        [field]: value
      }
    }));
  };

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#f7f6f2] rounded-lg w-full max-w-2xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Draft a new document</h2>
            <span className="text-gray-500 text-sm">✓ saved</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center mb-8">
          {['Document Details', 'Primary Party Details', 'Final Touches'].map((label, index) => (
            <React.Fragment key={index}>
              <div className={`flex items-center ${step === index + 1 ? 'text-black' : 'text-gray-400'}`}>
                <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center mr-2">
                  {index + 1}
                </div>
                <span className="font-medium">{label}</span>
              </div>
              {index < 2 && (
                <div className="mx-4 border-t border-gray-300 w-12"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Content based on step */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2">Document Type</label>
              <input
                type="text"
                placeholder="e.g. Non-Disclosure Agreement"
                className="w-full p-3 border rounded-lg"
                value={formData.documentType}
                onChange={(e) => setFormData({...formData, documentType: e.target.value})}
              />
              <div className="flex gap-2 mt-2">
                <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  Mutual NDA
                </button>
                <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  Non Disclosure Agreement
                </button>
                <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  Legal Notice
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-lg font-medium mb-2">Describe the specifics</label>
              <textarea
                placeholder="Give us more details of the document you want to generate. This helps our AI to personalise the document to cater to your needs."
                className="w-full p-3 border rounded-lg h-32"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2">Primary Party Details</label>
              <div className="border rounded-lg p-4">
                <div className="font-medium">{formData.primaryParty}</div>
                <div className="text-gray-500 text-sm mt-1">{formData.primaryAddress}</div>
                <button className="text-blue-600 mt-2">Change</button>
              </div>
            </div>
          </div>
        )}

        
{step === 3 && (
          <div className="space-y-4">
            {questions.map((q) => (
              <div 
                key={q.id}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-100"
                  onClick={() => handleQuestionClick(q.id)}
                >
                  <span className="font-medium">
                    {q.id}. {q.question}
                  </span>
                  {expandedQuestion === q.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {expandedQuestion === q.id && (
                  <div className="p-4 bg-white">
                    <textarea
                      className="w-full p-3 border rounded-lg"
                      placeholder="Type in your answer here..."
                      value={formData.questions[q.field]}
                      onChange={(e) => handleAnswerChange(q.field, e.target.value)}
                      rows="4"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {/* Footer */}
        <div className="flex justify-between items-center mt-8">
          <button className="text-blue-600">Show more</button>
          <button
            onClick={handleContinue}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            {step === 3 ? 'Generate Document' : 'Continue'}
          </button>
        </div>

        <p className="text-gray-500 text-sm text-center mt-4">
          AI can make mistakes. Verify details and consult an attorney where needed.
        </p>
      </div>
    </div>
  );
};

export default DocumentDialog;