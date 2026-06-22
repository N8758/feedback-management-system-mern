import api from "./api";

export const submitFeedback = (
  data
) => {
  return api.post(
    "/feedback",
    data
  );
};

export const getFeedbacks = (
  params = {}
) => {
  return api.get(
    "/feedback",
    {
      params,
    }
  );
};

export const getFeedbackById = (
  id
) => {
  return api.get(
    `/feedback/${id}`
  );
};

export const deleteFeedback = (
  id
) => {
  return api.delete(
    `/feedback/${id}`
  );
};

export const updateFeedbackStatus =
  (id, status) => {
    return api.patch(
      `/feedback/${id}/status`,
      {
        status,
      }
    );
  };

export const getAnalytics = () => {
  return api.get(
    "/analytics"
  );
};

export const exportFeedbackCSV =
  () => {
    return api.get(
      "/feedback/export/csv",
      {
        responseType: "blob",
      }
    );
  };