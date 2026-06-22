import {
  useState,
} from "react";
import {
  loginAdmin,
} from "../services/authService";
import {
  useNavigate,
} from "react-router-dom";

const AdminLogin = () => {
  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res =
        await loginAdmin({
          email,
          password,
        });

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");
    } catch (error) {
      alert(
        error?.response?.data
          ?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <h1 className="admin-login-title">
          Admin Login
        </h1>

        <form
          onSubmit={
            handleSubmit
          }
          className="admin-login-form"
        >
          <input
            type="email"
            placeholder="Email"
            className="admin-login-input"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="admin-login-input"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button
            className="admin-login-button"
            disabled={loading}
          >
            {loading
              ? "Logging..."
              : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;