import API from "./auth";

// get all jobs 
export const getAllJobs = () => API.get("/jobs/jobs");
