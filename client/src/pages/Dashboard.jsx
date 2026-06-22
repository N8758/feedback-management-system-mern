import {
  useEffect,
  useState,
} from "react";

import StatCard from "../components/Dashboard/StatCard";
import SearchBar from "../components/Dashboard/SearchBar";
import FilterBar from "../components/Dashboard/FilterBar";
import RecentTable from "../components/Dashboard/RecentTable";
import CategoryPieChart from "../components/Dashboard/CategoryPieChart";
import TrendChart from "../components/Dashboard/TrendChart";

import {
  getAnalytics,
  getFeedbacks,
  exportFeedbackCSV,
} from "../services/feedbackService";

const Dashboard = () => {
  const [analytics, setAnalytics] =
    useState(null);

  const [feedbacks, setFeedbacks] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [page, setPage] =
    useState(1);

  const [totalPages,
    setTotalPages] =
    useState(1);

  const [loading,
    setLoading] =
    useState(true);

  useEffect(() => {
    setPage(1);
  }, [search, category]);

  useEffect(() => {
    fetchData();
  }, [page, search, category]);

  const fetchData =
    async () => {
      try {
        setLoading(true);

        const analyticsRes =
          await getAnalytics();

        setAnalytics(
          analyticsRes.data.data
        );

        const feedbackRes =
          await getFeedbacks({
            page,
            limit: 10,
            search,
            category,
          });

        setFeedbacks(
          feedbackRes.data.data || []
        );

        setTotalPages(
          feedbackRes.data.totalPages ||
            1
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const handleExportCSV =
    async () => {
      try {
        const response =
          await exportFeedbackCSV();

        const url =
          window.URL.createObjectURL(
            new Blob([
              response.data,
            ])
          );

        const link =
          document.createElement("a");

        link.href = url;

        link.setAttribute(
          "download",
          "feedbacks.csv"
        );

        document.body.appendChild(
          link
        );

        link.click();

        link.remove();
      } catch (error) {
        console.log(error);
      }
    };

  if (loading) {
    return (
      <div className="dashboard-loader">
        Loading...
      </div>
    );
  }

  return (
    <div
      id="overview"
      className="dashboard-page"
    >
      <h1 className="dashboard-page-title">
        Feedback Dashboard
      </h1>

      {/* Stats */}
      <div className="dashboard-stats-grid">
        <StatCard
          title="Total Feedback"
          value={
            analytics?.totalFeedback ||
            0
          }
          icon="📊"
        />

        <StatCard
          title="Open"
          value={
            analytics?.openCount ||
            0
          }
          icon="🔴"
        />

        <StatCard
          title="In Progress"
          value={
            analytics?.inProgressCount ||
            0
          }
          icon="🟡"
        />

        <StatCard
          title="Resolved"
          value={
            analytics?.resolvedCount ||
            0
          }
          icon="🟢"
        />
      </div>

      {/* Search & Filter */}
      <div className="dashboard-filter-row">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <FilterBar
          category={category}
          setCategory={setCategory}
        />
      </div>

      {/* Charts */}
      <div
        id="analytics"
        className="dashboard-chart-grid"
      >
        <CategoryPieChart
          data={
            analytics
              ?.categoryDistribution ||
            []
          }
        />

        <TrendChart
          data={
            analytics
              ?.feedbackTrend || []
          }
        />
      </div>

      {/* Export */}
      <div className="export-actions">
        <button
          className="export-btn"
          onClick={
            handleExportCSV
          }
        >
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div id="feedback">
        <RecentTable
          feedbacks={feedbacks}
          refreshData={fetchData}
        />
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
        >
          Previous
        </button>

        <span>
          Page {page} of{" "}
          {totalPages}
        </span>

        <button
          disabled={
            page === totalPages
          }
          onClick={() =>
            setPage(page + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;