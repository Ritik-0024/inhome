import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Card from "./components/Card";
import QuerySection from "./components/QuerySection";
import ReviewDialog from "./components/ReviewDocument";
import DocumentDialog from "./components/DocumentDialog";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isDocDialogOpen, setIsDocDialogOpen] = useState(false);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);

  const handleCardClick = (section) => {
    if (section === "startDrafting") {
      setIsDocDialogOpen(true);
    } else if(section === 'reviewDocument'){
      setIsReviewDialogOpen(true);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Conditional Rendering */}
        <main className="flex-1 p-8 bg-[#f7f6f2]">
          {activeSection === "home" ? (
            <>
              <h1 className="text-3xl font-semibold mb-6">How can we help you today?</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Cards */}
                <Card
                  title="Start Drafting"
                  description="Create AI powered legal documents by answering a few questions"
                  icon="📄"
                  onClick={() => handleCardClick("startDrafting")}
                />
                <Card
                  title="Review documents"
                  description="Get your legal documents reviewed and find answers to your questions"
                  icon="🛠️"
                  onClick={() => handleCardClick("reviewDocument")}
                />
                <Card
                  title="Ask Query"
                  description="find answers to your questions"
                  icon="🛠️"
                  onClick={() => handleCardClick("querySection")}
                />
              </div>
            </>
          ) : (
            <QuerySection />
          )}
        </main>
      </div>

      {/* Document Dialog */}
      <DocumentDialog
        isOpen={isDocDialogOpen} 
        onClose={() => setIsDocDialogOpen(false)} 
      />
      <ReviewDialog
        isOpen={isReviewDialogOpen} 
        onClose={() => setIsReviewDialogOpen(false)} 
      />
    </div>
  );
};

export default App;