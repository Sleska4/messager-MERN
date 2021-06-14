const {Router} = require('express');
const router = Router();
const User = require('../modals/User');

router.get('/get-info/:id', async(req, res) => {
    const {_id} = req.body;
    try{
        const userInfo = await User.findOne({_id: req.params.id});
        res.json({name} = userInfo)
    } catch(err){
        console.log(err)
    }
})

module.exports = router