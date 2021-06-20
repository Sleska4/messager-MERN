const {Router} = require('express');
const router = Router();
const path = require('path');
const Music = require('../modals/Music');


router.post('/upload', async(req, res) => {
try{
      let uploadFile = req.files.document;

      const imageUrl = `/images/${uploadFile.name}`;

      uploadFile.mv(path.join(__dirname + '/..', 'public', 'images', uploadFile.name))

      const title = req.body.title || "Без названия";
      const author = req.body.author || "Без автора";

      const music = new Music({
            link: `/static${imageUrl}`,
            author,
            title
      });

      await music.save();
      
      res.status(201).json({ message: `${title}, добавленно.`})

      } catch(err){
            console.log(err)
      }
})

router.get('/music', async(req, res) => {
      try {

            const music = await Music.find();

            res.json(music);
            
      } catch(err) {
            console.log(err)
      }
});

module.exports = router