/* eslint-disable import/prefer-default-export */
import Job from '../models/job_model';

const { ObjectId } = require('mongoose').Types;

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

export const createJob = (req, res) => {
  const job = new Job();
  console.log('body', req.body);
  job.title = req.body.title;
  job.datePosted = req.body.datePosted;
  job.description = req.body.description;
  job.location = req.body.location;
  job.company = req.body.company;
  job.save()
    .then((result) => {
      res.json({ message: 'Job created!' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const deleteJob = (req, res) => {
  Job.find({ _id: new ObjectId(req.params.id) })
    .remove()
    .exec()
    .then((result) => {
      res.json({ message: 'Post deleted!' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const updateJob = (req, res) => {
  Job.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  )
    .then((post) => {
      res.json(post);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
