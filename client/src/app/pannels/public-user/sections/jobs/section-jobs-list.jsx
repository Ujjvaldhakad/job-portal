import JobZImage from "../../../../common/jobz-img";
import { NavLink } from "react-router-dom";
import { publicUser } from "../../../../../globals/route-names";
import SectionPagination from "../common/section-pagination";
import useJobs from "../../../../../hooks/usejob";

function SectionJobsList() {

    const { jobs } = useJobs();

    return (
        <>
            <div>
                <div className="twm-jobs-list-wrap">
                    <ul>
                        {jobs.map((job) => (
                            <li key={job._id}>
                                <div className="twm-jobs-list-style1 mb-5">
                                    <div className="twm-media">
                                        <JobZImage src="images/jobs-company/pic1.jpg" alt="#" />
                                    </div>
                                    <div className="twm-mid-content">
                                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-job-title">
                                            <h4>{job.title}<span className="twm-job-post-duration">/ 1 days ago</span></h4>
                                        </NavLink>
                                        <p className="twm-job-address">{job.location}</p>
                                        <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">{job.website}</a>
                                    </div>
                                    <div className="twm-right-content">
                                        <div className="twm-jobs-category green"><span className="twm-bg-green">New</span></div>
                                        <div className="twm-jobs-amount">{job.estimatedSalary} <span>/ Month</span></div>
                                        <NavLink to={publicUser.jobs.DETAIL1} className="twm-jobs-browse site-text-primary">Browse Job</NavLink>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <SectionPagination />
            </div>

        </>
    )
}

export default SectionJobsList;