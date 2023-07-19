import express, { json } from 'express'
import { createStadium, 
    updateStadium, 
    deleteStadium, 
    getStadium, 
    getStadiums,
    getStadiumSeats, 
    countByCity, 
    countbyType,
 } from '../controllers/stadiumController.js'
import { verifyAdmin } from '../utils/verifyToken.js';
import Stadium from "../models/stadiumModel.js";

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
router.get("/seat/:id", getStadiumSeats);

export default router;