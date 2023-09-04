import express from 'express';
import { createTour } from '../controllers/tourController.js';

const router = express.Router();

// create
router.post( '/', createTour );

export default router;