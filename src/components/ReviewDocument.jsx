import { X } from "lucide-react";
import React, { useState } from "react";

const ReviewDialog = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    
    if (!isOpen) return null;
  
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
  
          {/* Content */}
          <div className="space-y-6">
            <div>
              <label className="block font-medium mb-2">Document</label>
              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center">
                  <div className="mr-3">📄</div>
                  <span>Upload the document</span>
                </div>
                <button className="px-4 py-1 border rounded-lg">
                  Upload
                </button>
              </div>
            </div>
  
            <div>
              <label className="block font-medium mb-2">
                Describe what you are looking for
              </label>
              <textarea
                placeholder="Give us more details of the document you want to generate. This helps our AI to personalise the document to cater to your needs."
                className="w-full p-4 border rounded-lg h-32 text-gray-400"
              />
            </div>
          </div>
  
          {/* Footer */}
          <div className="flex justify-between items-center mt-8">
            <button className="text-indigo-600 flex items-center">
              <span className="mr-1">✨</span>
              Show more
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Continue
            </button>
          </div>
  
          <p className="text-gray-500 text-sm text-center mt-4">
            AI can make mistakes. Verify details and consult an attorney where needed.
          </p>
        </div>
      </div>
    );
  };

  export default ReviewDialog