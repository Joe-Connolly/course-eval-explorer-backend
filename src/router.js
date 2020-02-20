import { Router } from 'express';
import * as Reviews from './controllers/review_controller';
import * as Jobs from './controllers/jobs_controller';


const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our query products 2!' });
});

// your routes will go here
router.route('/reviews')
  .post(Reviews.getReviews);

// TODO switch to GET
router.route('/jobs')
  .post(Jobs.createJob)
  .get(Jobs.getJobs);

router.route('/jobs/:id')
  .delete(Jobs.deleteJob)
  .put(Jobs.updateJob);

export default router;
