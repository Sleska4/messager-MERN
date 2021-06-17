const {Router} = require('express');
const router = Router();
const path = require('path');


router.post('/upload', (req, res) => {
try{
      let uploadFile = req.files.document;

      console.log(req.body)

      const imageUrl = `/images/${uploadFile.name}`;

      uploadFile
            .mv(path.join(__dirname + '/..', 'public', 'images', uploadFile.name))
            .then(() => {
                  // perform database save operation here and then give appropriate response
                  res.status(200).json({ message: 'File uploaded', imageUrl: imageUrl });
            })
} catch(err){
            console.log(err)
      }
      })

module.exports = router