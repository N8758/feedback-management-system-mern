import Navbar from "../Navbar/Navbar";

const Layout = ({
  children,
}) => {
  const scrollToSection = (
    id
  ) => {
    const element =
      document.getElementById(
        id
      );

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <div className="app-logo">
          Acodash
        </div>

        <nav className="app-sidebar-nav">
          <button
            className="app-sidebar-link"
            onClick={() =>
              scrollToSection(
                "overview"
              )
            }
          >
            📊 Overview
          </button>

          <button
            className="app-sidebar-link"
            onClick={() =>
              scrollToSection(
                "feedback"
              )
            }
          >
            💬 Feedback
          </button>

          <button
            className="app-sidebar-link"
            onClick={() =>
              scrollToSection(
                "analytics"
              )
            }
          >
            📂 Categories
          </button>

          <button
            className="app-sidebar-link"
            onClick={() =>
              scrollToSection(
                "analytics"
              )
            }
          >
            📈 Analytics
          </button>

          <button
            className="app-sidebar-link"
            onClick={() =>
              scrollToSection(
                "overview"
              )
            }
          >
            ⚙️ Settings
          </button>

          <button
            className="app-sidebar-link"
            onClick={() =>
              scrollToSection(
                "overview"
              )
            }
          >
            🔗 Integrations
          </button>
        </nav>
      </aside>

      <div className="app-layout-content">
        <Navbar />

        <main className="app-layout-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;