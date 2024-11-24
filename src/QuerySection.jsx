import React, { useState } from "react";

const QuerySection = ({ closeQuerySection }) => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const messageInput = e.target.elements.message.value.trim();
    if (messageInput) {
      // Add user's message
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", text: messageInput },
      ]);

      // Simulate an automated reply
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", text: "This is an automated reply to your query." },
        ]);
      }, 1000);

      e.target.reset(); // Clear input
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={closeQuerySection}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          ✖
        </button>

        {/* Chat Section */}
        <div className="h-96 overflow-y-auto border border-gray-300 rounded-lg mb-4 p-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              } mb-2`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.type === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="flex items-center">
          <input
            type="text"
            name="message"
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuerySection;
