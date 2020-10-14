
import React from 'react';

function Home() {
    let jobList = ["react jobs", "Angular jobs", "Html jobs", "css jobs", "node.js"];

    const getListOfJobs = () => {
        for (let i = 0; i < jobList.length; i++) {
            jobList[i] = <li>{jobList[i]}</li>
        }
        return jobList;
    }
    const jobportal = (text) => {
    return <h1>{text}</h1>;
    }
    const byePortal=(text) => {
        return<h1>{text}</h1>;
    }


    return (
        <div>
            {
                jobportal('WELCOME TO JOB PORTAL')

            }

            <ul>
                {
                    getListOfJobs()

                }

            </ul>
            {
            byePortal('BYE TO JOBPORTAL')
}

    <button onclick="leave this page()">click me</button>

        </div>
    )
}

export default Home;