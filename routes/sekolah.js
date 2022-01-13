var express = require('express');
var router = express.Router();

const { sekolahController } = require('../controllers');



//Sekolah
router.get('/sekolah/',sekolahController.get);
router.get('/sekolah/detail/:id',sekolahController.getById);
router.post('/sekolah/',sekolahController.addSekolah);
router.get('/sekolah/sekolahtype',sekolahController.getType);
router.post('/sekolah/detail/:id',sekolahController.UpdateSekolah);
router.put('/sekolah/detail/:id',sekolahController.DeleteSekolah);
router.get('/sekolah/qr/:id',sekolahController.generateQR);


module.exports = router;