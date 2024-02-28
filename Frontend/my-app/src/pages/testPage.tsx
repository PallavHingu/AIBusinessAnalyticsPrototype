import React, { useState } from 'react';
import ChatBot, { ChatStep } from 'react-simple-chatbot';
import NewChatBox from '../components/newChatBox';
import "./testPage.css"

interface ChatMessage {
  id: number;
  user: boolean;
  message: string;
}

function DynamicChatbot() {
  return (
    <div className="parentChatBoxContainer">
        <NewChatBox/>
    </div>
  )
}

export default DynamicChatbot;