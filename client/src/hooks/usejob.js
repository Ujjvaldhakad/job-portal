// get jobs function
import { useState, useEffect } from "react";
import { getAllJobs } from "../api/jobapis";


const useJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchJobs = async () => {
        try {
            // get jobs
            const res = await getAllJobs();
            console.log(res)
            setJobs(res.data || []); // ensure array
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    return {
        jobs,
        loading,
        fetchJobs,
    };
};

export default useJobs;