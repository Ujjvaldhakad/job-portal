import React, { useState } from "react";
import { registerUser, adminRegister } from "../../../api/auth";

function SignUpPopup() {
    const [activeTab, setActiveTab] = useState('candidate');
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // manual validation (IMPORTANT)
        if (!formData.username || !formData.email || !formData.phone || !formData.password) {
            alert("All fields are required");
            return;
        }

        try {
            let response;
            if (activeTab === 'candidate') {
                response = await registerUser(formData);
                console.log("Candidate Registration SUCCESS:", response.data);
            } else {
                response = await adminRegister(formData);
                console.log("Employer Registration SUCCESS:", response.data);
            }
            alert("Registered successfully!");
        } catch (error) {
            console.error(error);
            alert(error?.response?.data?.message || "Registration failed");
        }
    };

    return (
        <>
            <div
                className="modal fade twm-sign-up"
                id="sign_up_popup"
                aria-hidden="true"
                aria-labelledby="sign_up_popupLabel"
                tabIndex={-1}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        {/* 🔴 noValidate is VERY IMPORTANT */}
                        <form onSubmit={handleSubmit} noValidate>

                            <div className="modal-header">
                                <h2 className="modal-title" id="sign_up_popupLabel">Sign Up</h2>
                                <p>Sign Up and get access to all the features of NOK</p>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                            </div>

                            <div className="modal-body">
                                <div className="twm-tabs-style-2">

                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <button
                                                className="nav-link active"
                                                data-bs-toggle="tab"
                                                data-bs-target="#sign-candidate"
                                                type="button"
                                                onClick={() => setActiveTab('candidate')}
                                            >
                                                <i className="fas fa-user-tie" /> Candidate
                                            </button>
                                        </li>

                                        <li className="nav-item">
                                            <button
                                                className="nav-link"
                                                data-bs-toggle="tab"
                                                data-bs-target="#sign-employer"
                                                type="button"
                                                onClick={() => setActiveTab('employer')}
                                            >
                                                <i className="fas fa-building" /> Employer
                                            </button>
                                        </li>
                                    </ul>

                                    <div className="tab-content">

                                        {/* ================= Candidate ================= */}
                                        <div className="tab-pane fade show active" id="sign-candidate">
                                            <div className="row">

                                                <div className="col-lg-12 mb-3">
                                                    <input
                                                        name="username"
                                                        className="form-control"
                                                        placeholder="Username*"
                                                        value={formData.username}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="col-lg-12 mb-3">
                                                    <input
                                                        name="password"
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Password*"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="col-lg-12 mb-3">
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email*"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="col-lg-12 mb-3">
                                                    <input
                                                        name="phone"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Phone*"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="col-lg-12 mb-3">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="agree1" />
                                                        <label className="form-check-label" htmlFor="agree1">
                                                            I agree to the <a href="#">Terms and conditions</a>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <button type="submit" className="site-button">
                                                        Sign Up
                                                    </button>
                                                </div>

                                            </div>
                                        </div>

                                        {/* ================= Employer ================= */}
                                        {/* NOTE: Uses SAME formData → no required attributes */}
                                        <div className="tab-pane fade" id="sign-employer">
                                            <div className="row">

                                                <div className="col-lg-12 mb-3">
                                                    <input
                                                        name="username"
                                                        className="form-control"
                                                        placeholder="Username*"
                                                        value={formData.username}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="col-lg-12 mb-3">
                                                    <input
                                                        name="password"
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Password*"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="col-lg-12 mb-3">
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email*"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="col-lg-12 mb-3">
                                                    <input
                                                        name="phone"
                                                        className="form-control"
                                                        placeholder="Phone*"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="col-md-12">
                                                    <button type="submit" className="site-button">
                                                        Sign Up
                                                    </button>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUpPopup;
