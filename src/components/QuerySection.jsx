import React, { useState, useRef, useEffect } from "react";

const QuerySection = () => {
  const [messages, setMessages] = useState([]); // Store chat messages
  const [input, setInput] = useState(""); // Store user input
  const chatEndRef = useRef(null); // Reference for scrolling to the bottom of the chat container

  // Scroll to the bottom of the chat when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Custom automated responses based on input
  const generateBotResponse = (userMessage) => {
    if (userMessage.toLowerCase().includes("hello")) {
      return "Hi there! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("eviction")) {
      return "Eviction laws can vary by state. Could you provide more details about your query?";
    } else {
      return "Thank you for your query. We will get back to you shortly.";
    }
  };

  // Handles message submission
  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user's message
    const userMessage = {
      text: input,
      type: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Clear input
    setInput("");

    // Add an automated response after a short delay
    setTimeout(() => {
      const botMessage = {
        text: generateBotResponse(input),
        type: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000); // Simulate delay
  };

  return (
    <div className="flex flex-col h-full bg-gray-100 p-4 rounded-lg shadow-md">
      {/* Chat Messages Section */}
      <div className="flex-1 overflow-y-auto bg-white p-4 rounded-lg shadow-inner" style={{ maxHeight: "70vh" }}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            } mb-2`}
          >
            {message.type === "bot" && (
              <img
                src="https://via.placeholder.com/32"
                alt="Bot Avatar"
                className="w-8 h-8 rounded-full mr-2"
              />
            )}
            <div className="flex flex-col max-w-sm">
              <div
                className={`px-4 py-2 rounded-lg ${
                  message.type === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.text}
              </div>
              <span className="text-xs text-gray-500 mt-1">
                {message.timestamp}
              </span>
            </div>
            {message.type === "user" && (
              <img
                src="https://via.placeholder.com/32/007bff/ffffff?text=U"
                alt="User Avatar"
                className="w-8 h-8 rounded-full ml-2"
              />
            )}
          </div>
        ))}
        {/* Scroll Anchor */}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input Box */}
      <div className="flex items-center space-x-2 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default QuerySection;
