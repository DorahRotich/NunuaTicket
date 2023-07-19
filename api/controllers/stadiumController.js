import Seat from '../models/seatModel.js'
import Stadium from '../models/stadiumModel.js'

export const createStadium = async (req, res, next) => {
    const newStadium = new Stadium(req.body)
    try{
        const savedStadium = await newStadium.save()
        res.status(200).json(savedStadium)
    } catch (error) {
        next(error)
    }
}

export const updateStadium = async (req, res, next) => {
    try{
        const updateStadium = await Stadium.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true })
        res.status(200).json(updateStadium)
    } catch (error) {
        next(error)
    }
}

export const deleteStadium = async (req, res, next) => {
    try{
        await Stadium.findByIdAndDelete(req.params.id);
        res.status(200).json('Hotel has been deleted successfully')
    } catch (error) {
        next(error)
    }
}

export const getStadiums = async (req, res, next) => {
    const { min, max, limit, ...others } = req.query;
    console.log(req.query)
    try {
        const allStadiums = await Stadium.find({
        ...others,
        cheapestSeat: { $gt: min | 1, $lt: max || 999 },
        }).limit(req.query.limit);
        res.status(200).json(allStadiums)
        console.log(allStadiums)
    } catch (error) {
        next(error)
    }
    // try{
    //     const allStadiums = await Stadium.find()
    //     res.status(200).json(allStadiums)
    // } catch (error) {
    //     next(error)
    // }
}

export const getStadium = async (req, res, next) => {
    // const id = req.params.id;
    try{
        const stadium = await Stadium.findById(req.params.id)
        res.status(200).json(stadium)
    } catch (error) {
        next(error)
    }
}

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
   
    try{
        const citiesList = await Promise.all(cities.map((city) => {
            return Stadium.countDocuments({ city:city })
        }))
        res.status(200).json(citiesList)
    } catch (error) {
        next(error)
    }
};
export const countbyType = async (req, res, next) => {
    try{
    const EPLCount = await Stadium.countDocuments({ type: "EPL" });
    const CountyCount = await Stadium.countDocuments({ type: "County" });
    const concertCount = await Stadium.countDocuments({ type: "concert" });
    const rallyCount = await  Stadium.countDocuments({ type: "rally" });
    const sportsCount = await Stadium.countDocuments({ type: "sports" });
   
    
    res.status(200).json([
        { type: "EPL", count: EPLCount },
        { type: "County", count: CountyCount },
        { type: "concert", count: concertCount },
        { type: "rally", count: rallyCount },
        { type: "sports", count: sportsCount },  
    ]);
    } catch (error) {
        next(error)
    }
};

export const getStadiumSeats = async (req, res, next) => {
    try {
      const stadium = await Stadium.findById(req.params.id);
      const list = await Promise.all(
        stadium.seats.map((seat) => {
          return Seat.findById(seat);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };