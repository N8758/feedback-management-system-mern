import {
  Link,
  useNavigate,
} from "react-router-dom";
import {
  Bell,
  User,
  Moon,
  Sun,
} from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

import useAuth from "../../hooks/useAuth";
import {
  getAnalytics,
} from "../../services/feedbackService";

const Navbar = () => {
  const navigate =
    useNavigate();

  const {
    isAuthenticated,
    logout,
  } = useAuth();

  const [
    notificationCount,
    setNotificationCount,
  ] = useState(0);

  const [
    notifications,
    setNotifications,
  ] = useState([]);

  const [
    showNotifications,
    setShowNotifications,
  ] = useState(false);

  const [
    darkMode,
    setDarkMode,
  ] = useState(false);

  useEffect(() => {
    loadNotifications();

    const theme =
      localStorage.getItem(
        "theme"
      );

    if (theme === "dark") {
      setDarkMode(true);

      document.body.classList.add(
        "dark-theme"
      );
    }
  }, []);

  const loadNotifications =
    async () => {
      try {
        const res =
          await getAnalytics();

        const data =
          res.data.data;

        const todayNotifications =
          data
            ?.todayNotifications ||
          [];

        setNotificationCount(
          todayNotifications.length
        );

        setNotifications(
          todayNotifications
        );
      } catch (error) {
        console.log(error);
      }
    };

  const toggleTheme =
    () => {
      const next =
        !darkMode;

      setDarkMode(next);

      if (next) {
        document.body.classList.add(
          "dark-theme"
        );

        localStorage.setItem(
          "theme",
          "dark"
        );
      } else {
        document.body.classList.remove(
          "dark-theme"
        );

        localStorage.setItem(
          "theme",
          "light"
        );
      }
    };

  const handleLogout =
    () => {
      logout();
      navigate(
        "/admin/login"
      );
    };

  return (
    <nav className="app-navbar">
      <div className="app-navbar-left">
        <h2 className="app-navbar-title">
          Dashboard
        </h2>
      </div>

      <div className="app-navbar-right">
        <button
          className="theme-btn"
          onClick={
            toggleTheme
          }
        >
          {darkMode ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>

        <div
          style={{
            position:
              "relative",
          }}
        >
          <button
            className="app-navbar-icon-btn"
            onClick={() =>
              setShowNotifications(
                !showNotifications
              )
            }
          >
            <Bell size={20} />

            {notificationCount >
              0 && (
              <span className="app-navbar-badge">
                {
                  notificationCount
                }
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="notification-dropdown">
              <h4>
                Notifications
              </h4>

              {notifications.length ===
              0 ? (
                <p>
                  No notifications
                </p>
              ) : (
                notifications.map(
                  (
                    item
                  ) => (
                    <div
                      key={
                        item._id
                      }
                      className="notification-item"
                    >
                      <strong>
                        {
                          item.category
                        }
                      </strong>

                      <p>
                        {
                          item.comment
                        }
                      </p>

                      <small>
                        {new Date(
                          item.createdAt
                        ).toLocaleString(
                          "en-IN"
                        )}
                      </small>
                    </div>
                  )
                )
              )}
            </div>
          )}
        </div>

        {isAuthenticated ? (
          <div className="app-navbar-profile">
            <User
              size={18}
            />

            <span>
              Admin
            </span>

            <button
              className="app-navbar-button"
              onClick={
                handleLogout
              }
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/admin/login"
            className="app-navbar-button"
          >
            Admin Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;