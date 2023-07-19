import express, { json } from 'express'
import { createStadium, updateStadium, deleteStadium, getStadium, getStadiums, countByCity, countbyType, getStadiumSeats } from '../controllers/stadiumController.js'
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post('/',verifyAdmin, createStadium);

//UPDATE
router.put('/:id',verifyAdmin, updateStadium);

//DELETE
router.delete('/:id',verifyAdmin, deleteStadium);

//GET
router.get('/find/:id', getStadium);

//GET ALL
router.get('/', getStadiums);
router.get('/countByCity', countByCity);
router.get('/countByType', countbyType);
router.get('/stadium/:id', getStadiumSeats);

export default router;