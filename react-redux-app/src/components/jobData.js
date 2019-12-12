import React from 'react';
import Job from './job';

const JobData = (props) => {
    console.log(props)
    return (
        <div>
            {props.data.map(jobData => <Job key={jobData.id} job={jobData} />)}
        </div>
    )
}

export default JobData