const StatCard = ({
  title,
  value,
  icon,
}) => {
  return (
    <div className="dashboard-stat-card">
      <div className="dashboard-stat-icon">
        {icon}
      </div>

      <div className="dashboard-stat-content">
        <h3 className="dashboard-stat-title">
          {title}
        </h3>

        <h2 className="dashboard-stat-value">
          {value}
        </h2>
      </div>
    </div>
  );
};

export default StatCard;