<<<<<<< HEAD
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

=======
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

>>>>>>> bdcdd0c8278c31f258dfcbc8f87b4258f195b6c3
module.exports = router;