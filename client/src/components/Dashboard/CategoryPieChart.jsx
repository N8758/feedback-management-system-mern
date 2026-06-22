import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const colors = [
  "#6366f1",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#06b6d4",
];

const CategoryPieChart = ({
  data = [],
}) => {
  return (
    <div className="dashboard-chart-card">
      <div className="dashboard-chart-header">
        <h2 className="dashboard-chart-title">
          Category Distribution
        </h2>

        <select className="dashboard-chart-filter">
          <option>
            Last 30 Days
          </option>

          <option>
            Last 7 Days
          </option>

          <option>
            Last 90 Days
          </option>
        </select>
      </div>

      {data.length === 0 ? (
        <div className="dashboard-chart-empty">
          No data available
        </div>
      ) : (
        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="_id"
              outerRadius={110}
              innerRadius={60}
              label
            >
              {data.map(
                (
                  entry,
                  index
                ) => (
                  <Cell
                    key={index}
                    fill={
                      colors[
                        index %
                          colors.length
                      ]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default CategoryPieChart;