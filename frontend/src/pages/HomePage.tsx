import { SyntheticEvent } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const HomePage = (props: {
  name: string | null;
  setName: (name: string | null) => void;
}) => {
  const logout = async (e: SyntheticEvent) => {
    await fetch("http://127.0.0.1:8000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    props.setName(null);
  };

  if (props.name != null) {
    return (
      <div>
        <div>Hi, {props.name}</div>
        <Button variant="primary" type="submit" onClick={logout}>
          logout
        </Button>
      </div>
    );
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
