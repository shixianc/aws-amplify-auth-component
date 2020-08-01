import React, { Component } from 'react';
import './ListJobs.css';

import { API, graphqlOperation } from 'aws-amplify';
import {
  listJobs,
  listUsers,
  listProfessionalProfiles,
  getUser,
} from '../graphql/queries';

class ListJobs extends Component {
  state = { jobList: [], user: null };

  async componentDidMount() {
    try {
      // commented out for demo
      // const user = await API.graphql(
      //   graphqlOperation(getUser, {
      //     id: this.props.userData.id,
      //   })
      // );
      // this.setState({ user: user });
      const jobList = await API.graphql(
        graphqlOperation(listJobs, {
          filter: { professionalClass: { eq: 'RegisteredDentalAssistant' } },
        })
      );
      this.setState({ jobList: jobList.data.listJobs.items });
    } catch (err) {
      console.log('error list jobs:', err);
    }
  }

  render() {
    return (
      <form className='form-signin'>
        <label className='form-label'>
          we found some jobs that match your profession
        </label>
        {/* {this.state.jobList.map((job) => (
          <div key={job.id} className='card' style={{ width: 25 + 'em' }}>
            <div key={job.id + '1'} className='card-body'>
              <h5 key={job.id + '2'} className='card-title'>
                {job.professionalClass}
                <span key={job.id + '6'} class='badge badge-info'>
                  SHIFT
                </span>
              </h5>
              <h6 key={job.id + '3'} className='card-subtitle mb-2 text-muted'>
                Whippy's Dental
              </h6>
              <p key={job.id + '4'} className='card-text'>
                Start date: {job.startDate}
                <br />
                Time: from {job.statTime} to {job.endTime}
              </p>
              <a key={job.id + '5'} href='#' className='card-link'>
                $ {job.cost}
              </a>
            </div>
          </div>
        ))} */}
        {this.state.jobList.map((job) => (
          <div key={job.id} className='card' style={{ width: 25 + 'em' }}>
            <div key={job.id + '1'} className='card-body'>
              <h5 key={job.id + '2'} className='card-title'>
                Software Engineer
                <span key={job.id + '6'} class='badge badge-info'>
                  Full Time
                </span>
              </h5>
              <h6 key={job.id + '3'} className='card-subtitle mb-2 text-muted'>
                Tech, Inc.
              </h6>
              <p key={job.id + '4'} className='card-text'>
                Start date: {job.startDate}
                <br />
                Time: from {job.statTime} to {job.endTime}
              </p>
              <a key={job.id + '5'} href='#' className='card-link'>
                $ {job.cost}
              </a>
            </div>
          </div>
        ))}
      </form>
    );
  }
}

export default ListJobs;
//        {this.state.jobList.map((a) => {
//     return <h1>{a.id}</h1>;
// })}
