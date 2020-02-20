import mongoose, { Schema } from 'mongoose';

const JobSchema = new Schema({
  title: String,
  location: String,
  description: String,
  datePosted: Date,
}, {
  toJSON: {
    virtuals: true,
  },
});

const JobModel = mongoose.model('Job', JobSchema);
export default JobModel;
