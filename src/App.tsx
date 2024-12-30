import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ClientsInfo from "./pages/ClientsInfo";
import { BookRoutes } from "./routes/BookRoutes";
import Navigation from "./components/navigation/Navigation";
import AskAi from "./pages/AskAI";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<ClientsInfo />} />
          <Route path="/books/*" element={<BookRoutes />} />
          <Route path="/ask-ai" element={<AskAi />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
