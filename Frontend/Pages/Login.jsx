import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <section>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please Login Your Account</p>
      </section>
      <form action="">
        <div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={onChange}
          />
        </div>

        <div className="btn">
          <button onSubmit={onSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
