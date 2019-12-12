import React from 'react';

const Job = (porps) => {
    return (
        <div className='jobCard'>
            <img src={porps.job.company_logo} alt='none' />
            <h3><a href={porps.job.company_url}>{porps.job.company}</a></h3>
            <h4>{porps.job.title}</h4>
            <p>{porps.job.location}</p>
            <p>{porps.job.type}</p>
            <div>{porps.job.description}</div>
            {porps.job.how_to_apply}
        </div>
    )
}

export default Job