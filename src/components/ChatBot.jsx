import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef(null);

  const systemPrompt = `You are a professional and friendly portfolio assistant for Sushil Verma, a talented and passionate MERN Stack Developer. Your purpose is to help visitors explore his personal portfolio, learn about his skills, experience, and projects, and get to know him better.

About Sushil Verma:
- Full Name: Sushil Verma
- Role: Full Stack Developer (MERN)
- Education: Currently pursuing MCA (Master of Computer Applications) from Thakur Institute of Management Studies, Career Development & Research.
- Career Goal: To work as a software engineer at a forward-thinking organization and contribute to its innovation and growth through technology.
- Location: Mumbai, India
- Contact: sushilverma40408@gmail.com

Skills:
- **Frontend**: React.js, JavaScript, HTML5, CSS3, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: Git, GitHub, REST APIs, Postman, UI/UX design, chatbot integration, animated interfaces, and Java (with Swing framework for desktop applications)
- **Soft Skills**: Teamwork, leadership, problem-solving, and communication.
- **Languages**: English, Hindi, Marathi
- **Interests**: Fitness, swimming, and exploring new technologies.

Projects:
1. **Course-Flow AI**
   - Description: An AI-powered course generator that recommends customized courses based on user input like course name and difficulty.
   - Tech: MERN stack, animated UI, user dashboard, and authentication.
   - Live: [course-flow-ai.anirudtate.com](https://course-flow-ai.anirudtate.com/)
   - GitHub: [Course-Flow AI Repo](https://github.com/Sushils-Coding/course-flow-ai)

2. **ToyNest**
   - Description: A toy renting and purchasing platform with two usage models:
     - Non-subscribers can buy toys as usual.
     - Subscribers (₹799/month) can borrow up to 5 toys and exchange them 3 times a month.
   - Features: Wishlist, cart, parental insights, catalogue with age-wise filtering, subscription plans, seller contact form, login/authentication, chatbot integration.
   - Live: [toynest-web-app.vercel.app](https://toynest-web-app.vercel.app/)
   - GitHub: [ToyNest Repo](https://github.com/Sushils-Coding/Toynest-webApp)

3. **NewsMonkey**
   - Description: A category-wise live news website that presents current events in an interactive and user-friendly format.
   - Tech: React.js
   - GitHub: [NewsMonkey Repo](https://github.com/Sushils-Coding/NewsMonkey-ReactApp)

4. **Cook Mom – Recipe Recommender**
   - Description: A web app that recommends recipes based on the user’s preferences and interest.
   - Live: [recipe-recommender-bay.vercel.app](https://recipe-recommender-bay.vercel.app/)
   - GitHub: [Cook Mom Repo](https://github.com/Sushils-Coding/Recipe-Recommender)

5. **Bank Management System**
   - Description: A desktop-based banking system simulation created using Java and Swing.
   - GitHub: [Bank Management Repo](https://github.com/Sushils-Coding/Bank-Management-System)

   major projects are course-flow-ai and toynest web app rather then this all are medium to minor projects

   whenever asked about projects, always mention the major ones first and then the others and just mention the name of project untill and unless asked for details.

Your Role:
- Greet and guide visitors through Sushil Verma's portfolio.
- Provide details about his background, skills, and individual projects.
- Share links to live projects or GitHub repos when requested.
- Highlight unique features of his work (e.g., animations, AI use, chatbot integration).
- Never handle inquiries related to hiring, freelance, or collaborations—redirect such requests politely.

Always respond professionally and positively, as a knowledgeable assistant who represents Sushil Verma and his work.
If a question is out of your scope, say:
"I’ll pass this to Sushil Verma to respond directly. 😊"
`;
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const prompt = `${systemPrompt}\n\nUser: ${inputMessage}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const botMessage = { role: 'bot', content: response.text() };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { role: 'bot', content: 'Sorry, The server is busy. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-999 flex items-end">
      {isOpen && (
        <div className="bg-[#090e1a] rounded-lg shadow-2xl w-80 h-96 mr-4 flex flex-col animate-slideIn border border-[#0ea5e9] backdrop-blur-sm bg-opacity-95">
          <div className="bg-gradient-to-r from-[#132248] to-[#0ea5e9] p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaRobot className="text-[#ffff99] animate-pulse" />
              <h3 className="text-[#ffff99] font-bold">Portfolio Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#ffff99] hover:rotate-90 transition-transform duration-300 cursor-pointer sm:cursor-none"
            >
              <FaTimes />
            </button>
          </div>

          <div ref={chatBoxRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[#0ea5e9] scrollbar-track-transparent">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${msg.role === 'user'
                  ? 'ml-auto bg-gradient-to-r from-[#0ea5e9]/20 to-[#ffff99]/30 text-[#ffff99]'
                  : 'mr-auto bg-gradient-to-r from-[#132248]/80 to-[#0ea5e9]/40 text-white'
                  } p-3 rounded-lg max-w-[80%] shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="flex space-x-2 mr-auto bg-[#132248]/80 p-3 rounded-lg animate-pulse">
                <div className="w-2 h-2 bg-[#ffff99] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#0ea5e9] rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-[#ffff99] rounded-full animate-bounce delay-200"></div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-[#0ea5e9]/30">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about toys..."
                className="flex-1 p-2 border border-[#0ea5e9] rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent bg-[#132248] text-[#ffff99] placeholder-[#ffff99]/60"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#0ea5e9] to-[#132248] text-[#ffff99] p-2 rounded-lg hover:opacity-90 transition-opacity duration-300 focus:ring-2 focus:ring-[#0ea5e9] cursor-pointer sm:cursor-none"
              >
                <FaPaperPlane className="transform hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#132248] to-[#0ea5e9] text-[#ffff99] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group animate-floating relative cursor-pointer sm:cursor-none"
        onMouseEnter={(e) => e.currentTarget.querySelector('svg').classList.add('animate-wiggle')}
        onMouseLeave={(e) => e.currentTarget.querySelector('svg').classList.remove('animate-wiggle')}
      >
        <FaRobot
          size={24}
          className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
        {!isOpen && (
          <span className="absolute -top-2 -right-2 h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffff99] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0ea5e9]"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
