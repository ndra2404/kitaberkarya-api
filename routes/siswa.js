var express = require('express');
var router = express.Router();

const {siswaController } = require('../controllers');

router.get('/siswa/:id',siswaController.get);
router.post('/siswa',siswaController.addData);
router.post('/siswa/detail/:id',siswaController.updateData);
router.put('/siswa/detail/:id',siswaController.deleteData);
router.get('/siswa/detail/:id',siswaController.getsiswa);

module.exports = router;