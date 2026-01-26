// get jobs function
import { useState, useEffect } from "react";
import { getAllJobs } from "../api/jobapis";


const useJobs = () => {
    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        try {
            // get jobs
            const res = await getAllJobs();
            setJobs(res.data || []); // ensure array
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        fetchJobs();
    }, []);

    return {
        jobs,
        fetchJobs,
    };
};

export default useJobs;


// const daysOld = (Date.now() - new Date(createdAt)) / 86400000 | 0;
// 86400000 = 1 day = 24×60×60×1000 ms



