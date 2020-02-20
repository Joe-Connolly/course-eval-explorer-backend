/* eslint-disable import/prefer-default-export */
import Job from '../models/job_model';

const JOBS = [
  {
    key: 'adsjsfsssf223',
    title: 'Software Engineer',
    location: 'Albany, NY',
    company: 'L3Harris',
    datePosted: 'May 3rd 2019',

  },
  {
    key: 'adsjsfss3333223',
    title: 'Software Engineer (New grad)',
    location: 'Albany, NY',
    company: 'Dropbox',
    datePosted: 'October 3rd 2019',
  },
];

export const getJobs = (req, res) => {
  Job.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
