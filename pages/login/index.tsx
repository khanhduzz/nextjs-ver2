import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {

      console.log(JSON.stringify({ username, password }));

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.status === 200 && data.isAuthenticated) {
        // sessionStorage.setItem("user", JSON.stringify({ username, password }));
        // console.log("Data in page: ", data);
        window.location.href = "/";
        // router.push("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
    }
  }

  return (
    <>
      <div className="comments-wrap">
        <div id="comments" className="row">
          <h3>Welcome to NextJs</h3>
          <div className="respond">
            <form name="contactForm" id="contactForm" method="post" onSubmit={handleSubmit}>
              <fieldset>
                <div className="form-field">
                  <input name="username" type="text" id="username" className="full-width" placeholder="Username" defaultValue="" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-field">
                  <input name="password" type="password" id="password" className="full-width" placeholder="Password" defaultValue="" onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit" className="submit button-primary">Log in</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login