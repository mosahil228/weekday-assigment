import React, { useState, useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Cards = () => {
    const [job, setJobs] = useState([]);
    const [page, setPage] = useState(8);
    const [expanded, setExpanded] = useState(false);
    let maxChars = 350;
    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        const fetchData = async () => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
                "limit": page,
                "offset": 0
            });
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
            };

            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
            const result = await response.json();
            setJobs(result.jdList);
            console.log(result.jdList);

        };

        fetchData();
    }, [page]); 

    //infinite scrolling
    const handleInfiniteScroll = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setPage((prev) => prev+8)
            }
        } catch (error) {
            console.log(error);
        }


    }
    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll);
    },[])
    return (
        <div className='card-section'>
            {job.map(data => (
                <div className='card' key={data.jdUid}>
                    <div className='inner-card'>
                        <div className='logo-box'>
                            <div className='logo'>
                                <img src={data.logoUrl} alt='img' />
                            </div>
                            <div className='company'>
                                <h1>{data.companyName}</h1>
                                <h3>{data.jobRole} Engineer</h3>
                                <p>{data.location}</p>
                            </div>
                        </div>


                        {/* handling null value  */}
                        <h4>Estimated Salary: ₹{`${data.minJdSalary === null ? Math.round(data.maxJdSalary / 2, 0) : data.minJdSalary} - ${data.maxJdSalary}`} LPA ✅</h4>
                        <h2>About Company:</h2>


                        {/* //expand collapsed functionality */}
                        <div className={`para ${expanded ? 'expanded' : ''}`}>
                            <p>{expanded ? data.jobDetailsFromCompany : `${data.jobDetailsFromCompany.slice(0, maxChars)}...`}</p>
                            {data.jobDetailsFromCompany.length > maxChars && (
                                <button onClick={toggleExpand}>{expanded ? <FaAngleUp /> : <FaAngleDown />}</button>
                            )}
                        </div>
                        <h1 className='exp'>Mininum Experience</h1>
                        <p className='expYear'>{`${data.minExp === null ? 0 : data.minExp}`} Years</p>
                        <button className='apply'><AiOutlineThunderbolt /> Easy Apply</button>

                    </div>

                </div>

            ))}

        </div>


    )
}

export default Cards



