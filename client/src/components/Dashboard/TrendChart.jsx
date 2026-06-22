import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const TrendChart = ({
  data = [],
}) => {
  const chartData =
    data.map((item) => ({
      date: new Date(
        item._id
      ).toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
        }
      ),
      count: item.count,
    }));

  return (
    <div className="dashboard-chart-card">
      <div className="dashboard-chart-header">
        <h2 className="dashboard-chart-title">
          Feedback Trend
        </h2>

        <select className="dashboard-chart-filter">
          <option>
            Last 30 Days
          </option>
        </select>
      </div>

      {chartData.length === 0 ? (
        <div className="dashboard-chart-empty">
          No feedback data available
        </div>
      ) : (
        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <LineChart
            data={chartData}
          >
            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="date"
            />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="count"
              stroke="#6d5dfc"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default TrendChart;