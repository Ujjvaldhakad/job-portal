import React from "react";
import { setShowJobsValue } from "../../../../../hooks/useshowJobs";


function SectionRecordsFilter({ _config }) {


    const onChangeShowJobs = (e) => {
        setShowJobsValue(Number(e.target.value));
    }


    return (
        <>
            <div className="product-filter-wrap d-flex justify-content-between align-items-center m-b30">
                <span className="woocommerce-result-count-left">
                    {
                        _config.prefix
                    }
                    {
                        _config.showRange ? (" 1-" + _config.showingUpto + " of ") : " "
                    }
                    {
                        _config.total + " " + _config.type
                    }
                </span>
                <form className="woocommerce-ordering twm-filter-select" method="get">
                    <select onChange={onChangeShowJobs} className="wt-select-bar-2 selectpicker" data-live-search="true" data-bv-field="size">
                        <option value="10">Show 10</option>
                        <option value="20">Show 20</option>
                        <option value="30">Show 30</option>
                        <option value="40">Show 40</option>
                        <option value="50">Show 50</option>
                        <option value="60">Show 60</option>
                    </select>
                </form>
            </div>
        </>
    )
}

export default SectionRecordsFilter;