import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const HomePage = () => {
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
  if (name != null) {
    return <div>Hi, {name}</div>;
  }
  return (
    <Container className="mt-5 mb-5" style={{ backgroundColor: "#fff" }}>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/login">LogIn</Link>
      </nav>
      <nav>
        <Link to="/signup">SignUp</Link>
      </nav>
    </Container>
  );
};

export default HomePage;
