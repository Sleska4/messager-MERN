const {Router} = require('express');
const router = Router();


router.post('/addImg', (req, res) => {
    try{
        console.log(req.files)
    //     const uploadFile = req.files.uploadFiles;
    //     const imageUrl = `/images/${uploadFiles.name}`;
    //     uploadFiles.mv(path.join(__dirname, 'public', images, uploadFile.name))
    //     .then(() => {
    //         res.json({message: 'File uploaded', imageUrl})
    // })
    } catch(err) {
        console.log(err)
    }
})

module.exports = router