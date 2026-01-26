import { NavLink } from "react-router-dom";
import { publicUser } from "../../../../../../globals/route-names";
import SectionSideAdvert from "./section-side-advert";
import { useEffect, useState } from "react";
import useJobs from "../../../../../../hooks/usejob";
import { useFilterJobs } from "../../../../../../hooks/useFilterJobsProvider";

function SectionJobsSidebar1() {
    const { jobs } = useJobs();
    const { setFilterJobs } = useFilterJobs();

    const [selectedFilters, setSelectedFilters] = useState({
        category: "All Category",
        location: "All Location",
        jobType: "All Job Type",
        datePosts: "All Date Posts",
    });

    // initial load
    useEffect(() => {
        setFilterJobs(jobs);
    }, [jobs, setFilterJobs]);

    // helper: days ago
    const getDaysAgo = (date) => {
        return Math.floor(
            (Date.now() - new Date(date)) / 86400000
        );
    };

    const filterJobsHandler = (e) => {
        const { name, value } = e.target;

        const updatedFilters = {
            ...selectedFilters,
            [name]: value,
        };

        setSelectedFilters(updatedFilters);

        let filtered = jobs;

        // category
        if (updatedFilters.category !== "All Category") {
            filtered = filtered.filter(
                (job) => job.title === updatedFilters.category
            );
        }

        // location
        if (updatedFilters.location !== "All Location") {
            filtered = filtered.filter(
                (job) => job.location === updatedFilters.location
            );
        }

        // job type
        if (updatedFilters.jobType !== "All Job Type") {
            filtered = filtered.filter(
                (job) => job.jobType === updatedFilters.jobType
            );
        }

        // date posts
        if (updatedFilters.datePosts !== "All Date Posts") {
            filtered = filtered.filter((job) => {
                const daysAgo = getDaysAgo(job.createdAt);

                if (updatedFilters.datePosts === "Today") return daysAgo === 0;
                if (updatedFilters.datePosts === "Yesterday") return daysAgo === 1;
                if (updatedFilters.datePosts === "This Week") return daysAgo <= 7;
                if (updatedFilters.datePosts === "This Month") return daysAgo <= 30;
                if (updatedFilters.datePosts === "This Year") return daysAgo <= 365;

                return true;
            });
        }

        setFilterJobs(filtered);
    };

    return (
        <>
            <div className="side-bar">
                <div className="sidebar-elements search-bx">
                    <form>
                        {/* Category */}
                        <div className="form-group mb-4">
                            <h4 className="section-head-small mb-4">Category</h4>
                            <select
                                name="category"
                                onChange={filterJobsHandler}
                                className="wt-select-bar-large selectpicker"
                            >
                                <option>All Category</option>
                                <option>Web Designer</option>
                                <option>Developer</option>
                                <option>Accountant</option>
                                <option>HR Manager</option>
                            </select>
                        </div>

                        {/* Location */}
                        <div className="form-group mb-4">
                            <h4 className="section-head-small mb-4">Location</h4>
                            <select
                                name="location"
                                onChange={filterJobsHandler}
                                className="wt-select-bar-large selectpicker"
                            >
                                <option>All Location</option>
                                <option>Delhi</option>
                                <option>Mumbai</option>
                                <option>Vijay Nagar</option>
                                <option>Downtown</option>
                            </select>
                        </div>

                        {/* Job Type */}
                        <div className="twm-sidebar-ele-filter">
                            <h4 className="section-head-small mb-4">Job Type</h4>
                            <select
                                name="jobType"
                                onChange={filterJobsHandler}
                                className="wt-select-bar-large selectpicker"
                            >
                                <option>All Job Type</option>
                                <option>Full Time</option>
                                <option>Internship</option>
                                <option>Freelance</option>
                                <option>Part Time</option>
                            </select>
                        </div>

                        {/* Date Posts */}
                        <div className="twm-sidebar-ele-filter">
                            <h4 className="section-head-small mb-4">Date Posts</h4>
                            <select
                                name="datePosts"
                                onChange={filterJobsHandler}
                                className="wt-select-bar-large selectpicker"
                            >
                                <option>All Date Posts</option>
                                <option>Today</option>
                                <option>Yesterday</option>
                                <option>This Week</option>
                                <option>This Month</option>
                                <option>This Year</option>
                            </select>
                        </div>
                    </form>
                </div>

                {/* Tags */}
                <div className="widget tw-sidebar-tags-wrap">
                    <h4 className="section-head-small mb-4">Tags</h4>
                    <div className="tagcloud">
                        <NavLink to={publicUser.jobs.LIST}>General</NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Jobs</NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Payment</NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Application</NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Work</NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Recruiting</NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Employer</NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Income</NavLink>
                        <NavLink to={publicUser.jobs.LIST}>Tips</NavLink>
                    </div>
                </div>
            </div>

            <SectionSideAdvert />
        </>
    );
}

export default SectionJobsSidebar1;
