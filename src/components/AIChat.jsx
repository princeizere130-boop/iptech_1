
import { useState, useRef, useEffect } from "react";
import "./AIChat.css";

function AIChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "ai",
      text: "Hello 👋 Welcome to IPTECH_1 AI. How can I help you today?",
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open]);

  // AI response
  const getAIResponse = (question) => {
    const q = question.toLowerCase();

    if (
      q.includes("service") ||
      q.includes("services") ||
      q.includes("mukora iki")
    ) {
      return `IPTECH_1 provides technology services including:

• Website development
• Mobile applications
• AI solutions
• IoT projects
• Software development
• Technology training

Ask me about any of these and I will explain more.`;
    }

    if (
      q.includes("course") ||
      q.includes("courses") ||
      q.includes("learn") ||
      q.includes("learning") ||
      q.includes("kwiga")
    ) {
      return `At IPTECH_1 you can learn technologies such as:

• Programming
• Web development
• Mobile development
• Artificial Intelligence
• IoT
• Software development

Ask me which course you are interested in.`;
    }

    if (
      q.includes("programming") ||
      q.includes("coding") ||
      q.includes("program")
    ) {
      return `Programming is one of the areas you can learn at IPTECH_1.

You can learn technologies such as HTML, CSS, JavaScript, React and other programming tools.

Tell me what you want to build and I can guide you.`;
    }

    if (
      q.includes("ai") ||
      q.includes("artificial intelligence") ||
      q.includes("ubwenge")
    ) {
      return `AI means Artificial Intelligence 🤖.

IPTECH_1 can help you understand and build AI-powered applications, chatbots and intelligent technology projects.`;
    }

    if (
      q.includes("iot") ||
      q.includes("internet of things")
    ) {
      return `IoT means Internet of Things 🌐.

It allows physical devices, sensors and machines to communicate and exchange data.

IPTECH_1 can help you learn and build IoT projects.`;
    }

    if (
      q.includes("instagram") ||
      q.includes("@iptech_1")
    ) {
      return `You can find IPTECH_1 on Instagram:

📱 @iptech_1

Follow the page for technology updates, projects, courses and other content.`;
    }

    if (
      q.includes("hello") ||
      q.includes("hi") ||
      q.includes("hey") ||
      q.includes("muraho")
    ) {
      return `Hello 👋

Welcome to IPTECH_1 AI.

I can help you with:
• Services
• Courses
• Programming
• AI
• IoT
• Projects

What would you like to know?`;
    }

    if (
      q.includes("website") ||
      q.includes("web")
    ) {
      return `IPTECH_1 can help with modern website development.

We can build responsive websites that work well on:
📱 Phones
📱 Tablets
💻 Computers

Tell me what type of website you want to build.`;
    }

    return `Thanks for your question! 🤖

I am the IPTECH_1 AI Assistant.

You can ask me about:
• IPTECH_1 services
• Courses
• Programming
• AI
• IoT
• Website development
• Projects
• Instagram @iptech_1`;
  };

  const sendMessage = (text = message) => {
    const cleanMessage = text.trim();

    if (!cleanMessage || loading) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      text: cleanMessage,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    // Simulate AI thinking
    setTimeout(() => {
      const response = getAIResponse(cleanMessage);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "ai",
          text: response,
        },
      ]);

      setLoading(false);
    }, 700);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "Services",
    "Courses",
    "Programming",
    "AI",
  ];

  const quickQuestionText = {
    Services: "What services does IPTECH_1 provide?",
    Courses: "What courses can I learn?",
    Programming: "Tell me about programming",
    AI: "Tell me about AI",
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        type="button"
        className={`ai-chat-toggle ${open ? "active" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="IPTECH_1 AI Assistant"
      >
        {open ? "×" : "AI"}

        {!open && <span className="ai-status-dot" />}
      </button>

      {/* CHAT BOX */}
      {open && (
        <div className="ai-chat-box">

          {/* HEADER */}
          <div className="ai-chat-header">

            <div className="ai-avatar">
              AI
            </div>

            <div className="ai-chat-title">
              <strong>IPTECH_1 AI</strong>

              <span>
                <i />
                ONLINE
              </span>
            </div>

            <button
              type="button"
              className="ai-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

          </div>

          {/* MESSAGES */}
          <div className="ai-chat-body">

            {messages.map((item) => (
              <div
                key={item.id}
                className={`ai-message ${item.role}`}
              >
                <div className="ai-message-label">
                  {item.role === "user"
                    ? "YOU"
                    : "IPTECH_1 AI"}
                </div>

                <div className="ai-message-text">
                  {item.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="ai-message ai">

                <div className="ai-message-label">
                  IPTECH_1 AI
                </div>

                <div className="ai-typing">
                  <span />
                  <span />
                  <span />
                </div>

              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* QUICK QUESTIONS */}
          <div className="ai-quick-questions">

            {quickQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() =>
                  sendMessage(
                    quickQuestionText[question]
                  )
                }
                disabled={loading}
              >
                {question}
              </button>
            ))}

          </div>

          {/* INPUT */}
          <div className="ai-chat-input">

            <textarea
              ref={inputRef}
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={handleKeyDown}
              placeholder="Ask IPTECH_1..."
              rows="1"
              disabled={loading}
            />

            <button
              type="button"
              onClick={() => sendMessage()}
              disabled={!message.trim() || loading}
            >
              {loading ? "..." : "➤"}
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default AIChat;

