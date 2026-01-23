import JobZImage from "../../../../common/jobz-img";
import { NavLink } from "react-router-dom";
import { publicUser } from "../../../../../globals/route-names";
import SectionPagination from "../common/section-pagination";
import { useState } from "react";
import { useFilterJobs } from "../../../../../hooks/FilterJobsProvider";

function SectionJobsList() {

    const { filterJobs } = useFilterJobs();
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 10;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const currentJobs = filterJobs.slice(startIndex, endIndex);

    return (
        <div>
            <div className="twm-jobs-list-wrap">
                <ul>
                    {currentJobs.map((job) => (
                        <li key={job._id}>
                            <div className="twm-jobs-list-style1 mb-5">
                                <div className="twm-media">
                                    <JobZImage src="images/jobs-company/pic1.jpg" alt="#" />
                                </div>
                                <div className="twm-mid-content">
                                    <NavLink to={publicUser.jobs.DETAIL1} className="twm-job-title">
                                        <h4>
                                            {job.title}
                                            <span className="twm-job-post-duration">
                                                /{((Date.now() - new Date(job.createdAt)) / 86400000) | 0} days ago
                                            </span>
                                        </h4>
                                    </NavLink>
                                    <p className="twm-job-address"><b>{job.location},</b>  Job type :-{job.jobType}-:</p>
                                    <a href={job.website} className="twm-job-websites site-text-primary">
                                        {job.website}
                                    </a>
                                </div>
                                <div className="twm-right-content">
                                    <div className="twm-jobs-category green"><span className="twm-bg-green">New</span></div>
                                    <div className="twm-jobs-amount">{job.estimatedSalary} <span>/ Month</span></div>
                                    <NavLink to={publicUser.jobs.DETAIL1} className="twm-jobs-browse site-text-primary">
                                        Browse Job
                                    </NavLink>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <SectionPagination
                currentPage={currentPage}
                totalPages={Math.ceil(filterJobs.length / ITEMS_PER_PAGE)}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default SectionJobsList;
