const {Router} = require('express')
const { postBooking, getAllBooking, getBookingById } = require('../controllers/booking')
const router = Router()

router.post('/', async (req, res, next) => {
    
    try {
      await postBooking(req.body)
        res.json('booking created')
        
    } catch (error) {
      next(error)  
    }

})

router.get('/', async (req, res, next) => {
    
    try {
        res.json(await getAllBooking())

    } catch (error) {
      next(error)  
    }

})

router.get('/:id', async (req, res, next) => {
    
    const { id } = req.params
    
    try {
        res.json(await getBookingById(id))
                
    } catch (error) {
      next(error)  
    }

})


module.exports = router