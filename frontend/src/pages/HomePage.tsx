import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const HomePage = () => {
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
