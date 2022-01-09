var express = require('express');
var router = express.Router();


//Sekolah
const { sekolahController } = require('./controllers');
router.get('/',sekolahController.get);
router.get('/detail/:id',sekolahController.getById);
router.post('/',sekolahController.addSekolah);
router.get('/sekolahtype',sekolahController.getType);
router.post('/detail/:id',sekolahController.UpdateSekolah);
//

module.exports = router;