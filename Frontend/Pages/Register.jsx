import { useState } from "react";
import { FaUser } from "react-icons/fa";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
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
          <FaUser /> Register
        </h1>
        <p>Please Create an Account</p>
      </section>
      <form action="">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={onChange}
          />
        </div>

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
        <div>
          <input
            type="text"
            id="password2"
            name="password2"
            placeholder="Enter Your Confirm Password"
            value={password2}
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

export default Register;
