import React, { useState } from "react";
import { X, ChevronUp, ChevronDown } from "lucide-react";

const ReviewDialog = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isQuestionExpanded, setIsQuestionExpanded] = useState(true);
  const [expandedQuestion, setExpandedQuestion] = useState(1);
  const [formData, setFormData] = useState({
    document: null,
    description: "",
    receivingParty: "",
    additionalDetails: {
      urgency: "normal",
      specialInstructions: ""
    },
    questions: {
      domain: "",
      medicationTypes: "",
      childrenData: "",
      userComments: ""
    }
  });

  const questions = [
    {
      id: 1,
      title: "What is your domain or URL of your website?",
      key: "domain"
    },
    {
      id: 2,
      title: "What types of medication or products does MedInc sell?",
      key: "medicationTypes"
    },
    {
      id: 3,
      title: "Will any data be collected from children 13 and under?",
      key: "childrenData"
    },
    {
      id: 4,
      title: "Can users of the website post comments or reviews?",
      key: "userComments"
    }
  ];

  if (!isOpen) return null;

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log("Form submitted:", formData);
      onClose();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleQuestionExpand = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  const handleAnswerChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      questions: {
        ...prev.questions,
        [key]: value
      }
    }));
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block font-medium mb-2">Document</label>
              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center">
                  <div className="mr-3">📄</div>
                  <span>{formData.document ? formData.document.name : "Upload the document"}</span>
                </div>
                <button className="px-4 py-1 border rounded-lg hover:bg-gray-50">
                  Upload
                </button>
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Describe what you are looking for
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Give us more details of the document you want to generate. This helps our AI to personalise the document to cater to your needs."
                className="w-full p-4 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-[#fafaf9] rounded-lg">
              <button
                onClick={() => setIsQuestionExpanded(!isQuestionExpanded)}
                className="w-full p-4 flex justify-between items-center"
              >
                <span className="font-medium">Who's on the receiving end of the document?</span>
                {isQuestionExpanded ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              
              {isQuestionExpanded && (
                <div className="p-4 pt-0">
                  <textarea
                    value={formData.receivingParty}
                    onChange={(e) => setFormData({ ...formData, receivingParty: e.target.value })}
                    placeholder="Type in your answer here..."
                    className="w-full p-4 border rounded-lg h-32 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            {questions.map((question) => (
              <div 
                key={question.id}
                className="bg-[#fafaf9] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => handleQuestionExpand(question.id)}
                  className="w-full p-4 flex justify-between items-center hover:bg-[#f5f5f4] transition-colors"
                >
                  <span className="font-medium text-left">
                    {question.id}. {question.title}
                  </span>
                  {expandedQuestion === question.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {expandedQuestion === question.id && (
                  <div className="p-4 pt-0">
                    <textarea
                      value={formData.questions[question.key]}
                      onChange={(e) => handleAnswerChange(question.key, e.target.value)}
                      placeholder="Type in your answer here..."
                      className="w-full p-4 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#f7f6f2] rounded-lg w-full max-w-2xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Review a document</h2>
            <span className="text-gray-500 text-sm">✓ saved</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center mb-8">
          {['Share Document', 'Primary Party Details', 'Final Touches'].map((label, index) => (
            <React.Fragment key={index}>
              <div className={`flex items-center ${step === index + 1 ? 'text-black' : 'text-gray-400'}`}>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-2 
                  ${step === index + 1 ? 'border-black' : 'border-gray-400'}`}>
                  {index + 1}
                </div>
                <span className="font-medium">{label}</span>
              </div>
              {index < 2 && (
                <div className="mx-4 border-t border-gray-300 flex-grow"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Content */}
        {renderStepContent()}

        {/* Footer */}
        <div className="flex justify-between items-center mt-8">
          <button 
            onClick={handleBack}
            className={`text-indigo-600 flex items-center ${step === 1 ? 'invisible' : ''}`}
          >
            Back
          </button>
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

export default ReviewDialog;