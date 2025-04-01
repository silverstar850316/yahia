"use client";

import React, { useState } from "react";
import { TbMessageChatbot } from "react-icons/tb";
import AIChatBot from "../integrations/aichatbot";

const ChatBot = () => {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setChatBoxOpen(true)}
        className="fixed bottom-4 right-4 z-40 transform rounded-full bg-gradient-to-r from-purple-600 to-blue-500 p-4 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <TbMessageChatbot size={32} />
      </button>
      <AIChatBot open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
};

export default ChatBot;
