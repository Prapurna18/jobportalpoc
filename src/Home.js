import React from 'react';

function Home(props) {
    let jobList = ["react jobs", "Angular jobs", "Html jobs", "css jobs", "node.js"];
    const result=jobList.filter(
        (eachString)=>{
            return eachString=="react jobs"
        }
    )
    console.log(result);


    const getListOfJobs = () => {
        for (let i = 0; i < result.length; i++) {
            result[i] = <li>{result[i]}</li>
        }
        return result;
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
                <h1>{props.interest}{props.cards}</h1>
                <button onClick={props.thousand} type="button" >1000</button>
                <button onClick={props.decrement} type="button" >-1000</button>
                <button onClick={props.interval} type="button" >reset</button>


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