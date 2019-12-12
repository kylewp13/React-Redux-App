import { 
    DATA_LOAD_START,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_FAILURE
} from '../actions/index' ;

const initialState = {
    isLoading: false,
    error: '',
    jobs: [
        {
        "id": "9aa50596-590f-4725-9a09-797ec9476110",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/9aa50596-590f-4725-9a09-797ec9476110",
        "created_at": "Thu Dec 12 12:50:28 UTC 2019",
        "company": "Channable",
        "company_url": null,
        "location": "Netherlands, Utrecht ",
        "title": "Python Software Engineer",
        "description": "<p><strong>Who are we?</strong>\nWe are a young and fast-growing start-up from Utrecht focusing on the e-commerce and online marketing sectors. Channable was founded 5 years ago and developed into a company with an international team of over 90 young professionals. While you can still benefit from the start-up vibe, working at Channable also means being part of a professional company with a highly skilled Development team.</p>\n<p><strong>What will your role be?</strong>\nIn this position you will be part of the product team, that works on our main web application. You will mainly be working on our Python3 backend, which powers our API and serves as the main entry point for our services. You will also be working on our API integrations, ads services, our export channels, new user-facing features, and our background jobs through which we process hundreds of millions of products per day. You will also be closely working together with our Infrastructure and DevOps teams, which are working on many other services that power Channable under the hood.</p>\n<p><strong>Your tasks will include the following:</strong></p>\n<ul>\n<li>Contributing to our Python components and support new API’s</li>\n<li>Design, development and testing of new product features</li>\n<li>Collaborate with and review PRs of other team members</li>\n<li>Improve the reliability and robustness of our application</li>\n<li>Work on scalability and performance improvements</li>\n<li>Work together with the sales and support teams on requirements and issues</li>\n</ul>\n<p><strong>We are using the following technologies and tools:</strong></p>\n<ul>\n<li>Languages: Python, SQL</li>\n<li>Libraries: Flask, SQLAlchemy, Click, requests, async, logging</li>\n<li>Tools: Postgres, Redis, GCS, Alembic, mypy, pip, Sentry, Icepeak</li>\n</ul>\n<p>If you want to read more about our development adventures, check out our tech blog: <a href=\"https://tech.channable.com/\">https://tech.channable.com/</a></p>\n<p>You can also take a look at some of our open-source work at <a href=\"https://github.com/channable\">https://github.com/channable</a> to get a feeling of how we work together and what our code looks like.</p>\n<p>Who are we looking for?</p>\n<ul>\n<li>At least 1 year experience in developing web applications in Python</li>\n<li>Experience with web development, web technologies and APIs</li>\n<li>Good understanding of HTTP, TLS/SSL and TCP/IP</li>\n<li>Familiarity with SQL and relational databases, preferably Postgres</li>\n<li>Good working knowledge of Linux, git and the command-line</li>\n<li>Committed to high engineering standards</li>\n</ul>\n<p><strong>And then there are some things that are ‘nice to have’:</strong></p>\n<ul>\n<li>Experience in tuning and scaling a big application</li>\n<li>Familiar with functional programming and its concepts</li>\n<li>Having worked with distributed systems before</li>\n<li>DevOps mentality</li>\n</ul>\n<p><strong>Practical requirements:</strong></p>\n<ul>\n<li>EU citizenship or a work permit, preferably already living in The Netherlands</li>\n<li>Available for at least 4 days a week, preferably full-time</li>\n</ul>\n<p><strong>What do we offer?</strong></p>\n<ul>\n<li>Challenging full-time function with space for personal initiative</li>\n<li>An interesting job within a talented development team, with different levels of experience</li>\n<li>Competitive salary</li>\n<li>Career opportunities within Channable</li>\n<li>Working for a fast growing company with a young and ambitious team</li>\n<li>Awesome office in the city center of Utrecht and activities like hackatons and sports</li>\n</ul>\n",
        "how_to_apply": "<p>Apply through our job page:</p>\n<p><a href=\"https://channable.recruitee.com/o/python-software-engineer-utrecht\">https://channable.recruitee.com/o/python-software-engineer-utrecht</a></p>\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1Y2IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e4557badb8688da1235a157f1fc7b0770351dff7/Channable_Logo.png"
        },
        {
        "id": "92146c14-0b2e-4040-8dce-525a4e869af8",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/92146c14-0b2e-4040-8dce-525a4e869af8",
        "created_at": "Thu Dec 12 03:51:30 UTC 2019",
        "company": "Apple Inc.",
        "company_url": "https://jobs.apple.com/en-us/details/200128968",
        "location": "Cupertino",
        "title": "Full Stack Web Developer (Rails/React)",
        "description": "<p><strong>Summary</strong></p>\n<p>We are looking for someone that is strong in Rails, and also enjoys writing JavaScript frontends part of the time. You will also be expected to participate in the feature design process with our lean and talented team.</p>\n<p>The applications we build are used daily by the people at Apple that design our products along with those that figure out how to make them at scale. This includes; Manufacturing Design Engineers, Product Designers, Mechanical Engineers, Quality Engineers, Supply Chain Managers, along with our Suppliers. We work closely with them to design and architect the best solutions for the challenges faced when making the highest quality hardware products.</p>\n<p><strong>Key Qualifications</strong></p>\n<ul>\n<li>5+ years in a senior role working across the entire web stack with a skilled team.</li>\n<li>5+ years building robust HTTP API's and backend services using Ruby on Rails.</li>\n<li>3+ years developing complex applications with SQL based database solutions (PostgreSQL, MySQL etc.) at medium scale</li>\n<li>Experience writing JavaScript single page apps using React or similar framework.</li>\n<li>Experience in Docker is expected.</li>\n<li>Experience in Go (golang) is a plus.</li>\n<li>Manufacturing experience or exposure is a plus, but not required.</li>\n<li>A strong desire to produce high quality software through test driven development, code reviews, and other best practices.</li>\n</ul>\n<p><strong>Description</strong></p>\n<p>The Manufacturing Design Systems team is looking for an experienced Software Developer with a passion for designing and architecting backend API’s and is comfortable anywhere in the stack. Our application developers are responsible for building an application that enables Apple to manufacture every product. You should be good at anticipating, but not over architecting your solutions. You are able develop clear and simple solutions for complex problems.</p>\n<p>None of us are the best at everything but all are the best at something. You should be the best at delivering high quality API’s.</p>\n<p><a href=\"https://jobs.apple.com/en-us/details/200128968\">Full job posting</a></p>\n",
        "how_to_apply": "<p>Email your resume to <a href=\"mailto:peterfriday@apple.com\">peterfriday@apple.com</a></p>\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdk41IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1ee94706f1437de09472bf031ebccc670b30c2d4/applelogo.png"
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DATA_LOAD_START: 
            return {
                ...state,
                isLoading: true
            };
        case DATA_LOAD_SUCCESS:
            return {
                ...state,
                jobs: action.payload,
                isLoading: false
            };
        case DATA_LOAD_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
    // return state:
};

export default reducer;