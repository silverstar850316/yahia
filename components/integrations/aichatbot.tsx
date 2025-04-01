"use client";

import { useState, useEffect, useRef } from "react";
import { LuCircleUserRound } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

export default function ChatbotPage({ open, onClose }: AIChatBoxProps) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "yahia"; content: string }[]
  >([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleAsk = async () => {
    if (!question.trim()) return;

    const newUserMessage = { role: "user" as const, content: question };
    setMessages((prev) => [...prev, newUserMessage]);
    setQuestion("");
    setLoading(true);
    setError("");

    const yahiaTypingMessage = {
      role: "yahia" as const,
      content: "yahia is typing...",
    };
    setMessages((prev) => [...prev, yahiaTypingMessage]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: newUserMessage.content }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Failed to get response");
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let result = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          result += decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { role: "yahia", content: result };
            return updated;
          });
        }
      }
    } catch (err: any) {
      const msg = err.message || "Error contacting AI";
      setError(
        msg.includes("429")
          ? "You exceeded your OpenAI quota. Please check your billing at platform.openai.com/account/usage."
          : msg,
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (textareaRef.current) textareaRef.current.focus();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!loading && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 right-0 z-50 w-full p-2 sm:w-[95%] sm:p-4 md:w-[80%] lg:max-w-[500px]"
        >
          <div className="flex h-[90vh] flex-col rounded-xl bg-[#343541] text-white shadow-xl">
            <header className="border-b border-[#2f2f32] p-4 text-center text-xl font-bold md:text-2xl">
              Chat with Yahia Elazhar
              <button
                onClick={onClose}
                className="float-right text-base md:text-lg"
              >
                X
              </button>
            </header>

            <main
              ref={chatContainerRef}
              className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6"
            >
              {messages.length === 0 && !loading ? (
                <div className="flex h-full items-center justify-center text-gray-400">
                  Start the conversation with Yahia Elazhar!
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-start gap-3 ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.role === "yahia" && (
                        <img
                          src="/images/bot.png"
                          alt="yahia avatar"
                          className="h-8 w-8 rounded-full"
                        />
                      )}
                      <div
                        className={`max-w-xs whitespace-pre-wrap rounded-xl px-4 py-3 text-sm sm:max-w-md sm:text-base md:max-w-lg ${
                          msg.role === "user"
                            ? "rounded-tr-none bg-blue-600 text-white"
                            : "rounded-tl-none bg-[#444654] text-gray-100"
                        }`}
                      >
                        {msg.content}
                      </div>
                      {msg.role === "user" && (
                        <LuCircleUserRound className="h-8 w-8 rounded-full" />
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}

              {error && (
                <div className="rounded-lg border border-red-500 bg-red-500/10 p-4 text-red-300">
                  {error}
                </div>
              )}
            </main>

            <footer className="border-t border-[#2f2f32] px-4 py-3">
              <div className="relative mx-auto flex max-w-3xl items-end">
                <textarea
                  ref={textareaRef}
                  rows={1}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => {
                    if (loading) return;
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleAsk();
                    }
                  }}
                  placeholder="Send a message..."
                  disabled={loading}
                  className="flex w-full resize-none rounded-md bg-[#40414f] py-3 pl-4 pr-12 text-sm text-white placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                />
                <button
                  onClick={handleAsk}
                  disabled={loading || !question.trim()}
                  className="absolute bottom-3 right-3 text-white transition hover:text-blue-400 disabled:opacity-40"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l14.25-6.375c.66-.3 1.336.376 1.036 1.036L13.5 21l-2.75-6.25L4.5 12.75z"
                    />
                  </svg>
                </button>
              </div>
            </footer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
