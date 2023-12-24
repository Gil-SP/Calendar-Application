import express from 'express';
import { getEvents, createEvent, updateEvent, deleteEvent } from '../controllers/event.controller.js';
import { verifyToken } from '../utility/verifyUser.js';

const router = express.Router();

router.use(verifyToken);
router.get('/', getEvents);
router.post('/create', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;


