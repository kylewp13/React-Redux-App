import React from 'react';
import { connect } from 'react-redux';

import JobData from './components/jobData';
import { getData } from './actions/index'



function App(props) {
  // console.log(props)
  return (
    <div className="App">
      <h1>GitHub Jobs</h1>
      <button onClick={() => props.getData()}>Get More jobs</button>
      <JobData data={props.jobs} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    jobs: state.jobs
  }
};

export default connect(
  mapStateToProps,
  { getData }
)(App)

// export default App;
