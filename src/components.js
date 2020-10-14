
import React from 'react';
import components from './components';
function Home(){
    let jobList = ["react jobs", "Angular jobs", "Html jobs", "css jobs","node.js"];

    const getListOfJobs = ()=>{
        for(let i=0;i<jobList.length;i++){
        jobList[i]=<li>{jobList[i]}</li>
        }
        return jobList;
    }
class joblist extends React.component{
    constructor(){
        super();
        this.state={
            search:''
        };
    }
    updateSearch(event){
        this.setState({search: event.target.value.substr(0,20)});
    }
}



render() {
    let filteredjobList = this.props.joblist.filter(
        (joblist) =>  {
            return joblist.name.indexOf(this.state.search) !== -1;
        }
    
    );
    return(
        <div>
                        <input type="text"
            value={this.StaticRange.search}
            onChange={this.updateSearch.bind(this)}/>

            <ul>
                {filteredjobLists.map((joblist)=>{
                    return<joblists joblists={joblist}
                    key={joblist.id}/>

                })}
                </ul>
            
            

        </div>
    )

    )
}