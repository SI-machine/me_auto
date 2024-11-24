import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ClientsInfo from "./pages/ClientsInfo";
import { BookRoutes } from "./routes/BookRoutes";
import Navigation from "./components/navigation/Navigation";

const App: React.FC = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/videos">Список клиентов</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<ClientsInfo />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
