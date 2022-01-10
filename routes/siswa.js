var express = require('express');
var router = express.Router();

const {siswaController } = require('../controllers');

/**
 * @swagger
 * /sekolah:
 *   get:
 *     summary: Returns the list of all the sekolah
 *     tags: [sekolah]
 *     responses:
 *       200:
 *         description: The list of the sekolah
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get('/siswa/:id',siswaController.get);
router.post('/siswa',siswaController.addData);

module.exports = router;