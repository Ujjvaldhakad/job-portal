import axios from "axios";

const jobApi = axios.create({
    baseURL: "http://localhost:8080/api",
});

// get all jobs
export const getAllJobs = () => jobApi.get("/jobs/jobs");

export default jobApi;