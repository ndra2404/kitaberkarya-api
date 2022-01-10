var express = require('express');
var router = express.Router();

const { sekolahController } = require('../controllers');



//Sekolah
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
router.get('/sekolah/',sekolahController.get);
/**
 * @swagger
 * /sekolah/detail/{id}:
 *   get:
 *     summary: Returns the list of all the sekolahDetail
 *     tags: [sekolah]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id sekolah
 *     responses:
 *       200:
 *         description: The list of the sekolahDetail
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get('/sekolah/detail/:id',sekolahController.getById);
router.post('/sekolah/',sekolahController.addSekolah);
router.get('/sekolah/sekolahtype',sekolahController.getType);
router.post('/sekolah/detail/:id',sekolahController.UpdateSekolah);

module.exports = router;