import React from "react";

// Components
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-semibold mb-6">How can we help you today?</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Cards */}
            <Card
              title="Start Drafting"
              description="Create AI powered legal documents by answering a few questions"
              icon="📄"
            />
            <Card
              title="Review documents"
              description="Get your legal documents reviewed and find answers to your questions"
              icon="🛠️"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
