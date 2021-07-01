const {Router} = require('express');
const router = Router();
const path = require('path');
const Music = require('../modals/Music');


// Пока работает чисто с музыкой.
router.post('/upload', async(req, res) => {
try{
      let uploadFile = req.files.document;

      const splitArr = uploadFile.name.split('.');

      // Валидация получаемого файла
      if(splitArr[splitArr.length - 1] !== 'mp3'){
            console.log(splitArr[splitArr.length - 1])
            return res.status(300).json({ message: `Не верный формат файла`})
      }

      const imageUrl = `/images/${uploadFile.name}`;

      uploadFile.mv(path.join(__dirname + '/..', 'public', 'audio', uploadFile.name))

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