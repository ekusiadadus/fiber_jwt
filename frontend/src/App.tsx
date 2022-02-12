import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import "./styles/App.css";
function App() {
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://127.0.0.1:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      setName(content.name);
    })();
  });
  return (
    <BrowserRouter>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage name={name} />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
