import express from "express";
import {
  createSeat,
  deleteSeat,
  getSeat,
  getSeats,
  updateSeat,
  updateSeatAvailability,
} from "../controllers/seatController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:stadiumid", verifyAdmin, createSeat);

//UPDATE
router.put("/availability/:id", updateSeatAvailability);
router.put("/:id", verifyAdmin, updateSeat);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteSeat);
//GET

router.get("/:id", getSeat);
//GET ALL

router.get("/", getSeats);

export default router;