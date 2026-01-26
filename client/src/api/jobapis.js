import API from "./auth";

/* ==================== get all jobs ====================*/
export const getAllJobs = () => API.get("/jobs/jobs");

/* ==================== post job for employer ====================*/
export const postJobForEmployer = (jobData) => API.post("/jobs/job", jobData);

