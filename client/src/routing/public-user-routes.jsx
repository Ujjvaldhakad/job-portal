import { Route, Routes } from "react-router-dom";
import { publicUser } from "../globals/route-names";
import Home15Page from "../app/pannels/public-user/components/home/index15";

import JobsListPage from "../app/pannels/public-user/components/jobs/jobs-list";
import JobDetail1Page from "../app/pannels/public-user/components/jobs/job-detail1";
import JobDetail2Page from "../app/pannels/public-user/components/jobs/job-detail2";
import ApplyJobPage from "../app/pannels/public-user/components/jobs/apply-job";

import EmployersListPage from "../app/pannels/public-user/components/employers/emp-list";
import EmployersDetail1Page from "../app/pannels/public-user/components/employers/emp-detail1";
import EmployersDetail2Page from "../app/pannels/public-user/components/employers/emp-detail2";

import AboutUsPage from "../app/pannels/public-user/components/pages/about-us";
import PricingPage from "../app/pannels/public-user/components/pages/pricing";
import Error404Page from "../app/pannels/public-user/components/pages/error404";
import FaqPage from "../app/pannels/public-user/components/pages/faq";
import ContactUsPage from "../app/pannels/public-user/components/pages/contact-us";
import UnderMaintenancePage from "../app/pannels/public-user/components/pages/under-maintenance";
import ComingSoonPage from "../app/pannels/public-user/components/pages/coming-soon";
import LoginPage from "../app/pannels/public-user/components/pages/login";
import AfterLoginPage from "../app/pannels/public-user/components/pages/after-login";
import IconsPage from "../app/pannels/public-user/components/pages/icons";

import CandidateGridPage from "../app/pannels/public-user/components/candidates/can-grid";
import CandidateListPage from "../app/pannels/public-user/components/candidates/can-list";
import CandidateDetail1Page from "../app/pannels/public-user/components/candidates/can-detail1";
import CandidateDetail2Page from "../app/pannels/public-user/components/candidates/can-detail2";

import BlogListPage from "../app/pannels/public-user/components/blogs/blogs-list";
import BlogDetailPage from "../app/pannels/public-user/components/blogs/blog-detail";

function PublicUserRoutes() {
    return (
        <Routes>
            <Route path={publicUser.HOME15} element={<Home15Page />} />

            <Route path={publicUser.jobs.LIST} element={<JobsListPage />} />
            <Route path={publicUser.jobs.DETAIL1} element={<JobDetail1Page />} />
            <Route path={publicUser.jobs.DETAIL2} element={<JobDetail2Page />} />
            <Route path={publicUser.jobs.APPLY} element={<ApplyJobPage />} />

            <Route path={publicUser.employer.LIST} element={<EmployersListPage />} />
            <Route path={publicUser.employer.DETAIL1} element={<EmployersDetail1Page />} />
            <Route path={publicUser.employer.DETAIL2} element={<EmployersDetail2Page />} />
            <Route path={publicUser.pages.ABOUT} element={<AboutUsPage />} />
            <Route path={publicUser.pages.PRICING} element={<PricingPage />} />
            <Route path={publicUser.pages.ERROR404} element={<Error404Page />} />
            <Route path={publicUser.pages.FAQ} element={<FaqPage />} />
            <Route path={publicUser.pages.CONTACT} element={<ContactUsPage />} />
            <Route path={publicUser.pages.MAINTENANCE} element={<UnderMaintenancePage />} />
            <Route path={publicUser.pages.COMING} element={<ComingSoonPage />} />
            <Route path={publicUser.pages.LOGIN} element={<LoginPage />} />
            <Route path={publicUser.pages.AFTER_LOGIN} element={<AfterLoginPage />} />
            <Route path={publicUser.pages.ICONS} element={<IconsPage />} />
            <Route path={publicUser.candidate.GRID} element={<CandidateGridPage />} />
            <Route path={publicUser.candidate.LIST} element={<CandidateListPage />} />
            <Route path={publicUser.candidate.DETAIL1} element={<CandidateDetail1Page />} />
            <Route path={publicUser.candidate.DETAIL2} element={<CandidateDetail2Page />} />

            <Route path={publicUser.blog.LIST} element={<BlogListPage />} />
            <Route path={publicUser.blog.DETAIL} element={<BlogDetailPage />} />
            <Route path="*" element={<Error404Page />} />
        </Routes>
    )
}

export default PublicUserRoutes;