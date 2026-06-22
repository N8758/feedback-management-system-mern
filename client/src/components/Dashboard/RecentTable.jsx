import {
  deleteFeedback,
  updateFeedbackStatus,
} from "../../services/feedbackService";

const RecentTable = ({
  feedbacks,
  refreshData,
}) => {
  const handleDelete =
    async (id) => {
      try {
        const ok =
          window.confirm(
            "Delete this feedback?"
          );

        if (!ok) return;

        await deleteFeedback(id);

        refreshData();
      } catch (error) {
        alert(
          "Failed to delete feedback"
        );
      }
    };

  const handleStatusChange =
    async (
      id,
      status
    ) => {
      try {
        await updateFeedbackStatus(
          id,
          status
        );

        refreshData();
      } catch (error) {
        alert(
          "Failed to update status"
        );
      }
    };

  return (
    <div className="dashboard-table-card">
      <h2 className="dashboard-table-title">
        Recent Feedback
      </h2>

      <table className="dashboard-feedback-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Comment</th>
            <th>Email</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {feedbacks?.map(
            (item) => (
              <tr
                key={item._id}
              >
                <td>
                  {item.category}
                </td>

                <td>
                  {item.comment}
                </td>

                <td>
                  {item.email ||
                    "-"}
                </td>

                <td>
                  {new Date(
                    item.createdAt
                  ).toLocaleString(
                    "en-IN",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "numeric",
                      minute:
                        "2-digit",
                      hour12: true,
                    }
                  )}
                </td>

                <td>
  <select
    className="feedback-status-select"
    value={item.status}
    disabled={
      item.status ===
      "Resolved"
    }
    onChange={(e) =>
      handleStatusChange(
        item._id,
        e.target.value
      )
    }
  >
    {item.status ===
    "Open" ? (
      <>
        <option value="Open">
          Open
        </option>

        <option value="In Progress">
          In Progress
        </option>
      </>
    ) : item.status ===
      "In Progress" ? (
      <>
        <option value="In Progress">
          In Progress
        </option>

        <option value="Resolved">
          Resolved
        </option>
      </>
    ) : (
      <option value="Resolved">
        Resolved
      </option>
    )}
  </select>
</td>

                <td>
                  <button
                    className="feedback-delete-btn"
                    onClick={() =>
                      handleDelete(
                        item._id
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTable;