import { createContext, useContext, useState } from 'react';

const FilterJobsContext = createContext();

export const FilterJobsProvider = ({ children }) => {
    const [filterJobs, setFilterJobs] = useState([]);

    return (
        <>
            <FilterJobsContext.Provider value={{ filterJobs, setFilterJobs }}>
                {children}
            </FilterJobsContext.Provider>
        </>
    );
};

export const useFilterJobs = () => useContext(FilterJobsContext);


