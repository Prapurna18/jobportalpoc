
import React from 'react';

function Home(){
    let jobList = ["job list 1", "job list 2", "job list 3", "job list 4","job list 5"];

    const getListOfJobs = ()=>{
        for(let i=0;i<jobList.length;i++){
        jobList[i]=<li>{jobList[i]}</li>
        }
        return jobList;
    }
    const jobportal = ()=>{
        return <h1>WELCOME TO JOB PORTAL</h1>;


    
    }
    
    
    return(
        <div>
            {
                jobportal()
            }
            
            <ul>
                {
                   getListOfJobs() 
                }
               
            </ul>
        </div>
    )
}

        export default Home;