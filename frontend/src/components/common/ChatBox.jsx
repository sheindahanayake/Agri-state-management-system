import React, { useState, useRef, useEffect } from "react";
import { Send, MessageCircle } from "lucide-react";

const ChatBox = ({ rentals }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Agri State Management assistant. I can help you find the perfect fertilizer. What are you looking for today?",
      sender: "bot",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newUserMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
    };
    setMessages((prev) => [...prev, newUserMessage]);

    const botResponse = {
      id: messages.length + 2,
      text: "Let me check that for you. Can you please provide more details?",
      sender: "bot",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setInputMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-[500px] bg-white shadow-xl rounded-3xl flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-green-600 to-purple-800 text-white p-4 rounded-t-3xl flex justify-between items-center shadow-md">
            <h3 className="font-semibold text-lg">Agri State Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-white text-purple-600 hover:bg-gray-200 p-2 rounded-full"
            >
              ×
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] px-4 py-3 rounded-lg shadow-md ${
                    msg.sender === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t flex bg-gray-100 rounded-b-3xl shadow-md">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-600 text-white px-6 py-2 rounded-r-full hover:bg-green-700"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Chat Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition-all animate-bounce"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatBox;
