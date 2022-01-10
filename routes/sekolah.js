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
/**
 * @swagger
 * /sekolah:
 *   post:
 *     security:
 *       - Bearer: [abc]
 *     summary: sekolahtambah
 *     tags: [sekolah]
 *     parameters:
 *       - in: path
 *         name: add
 *         schema:
 *           type: string
 *         required: true
 *         description: Action Untuk Melakukan Proses API
 *       - in: body
 *         name : user
 *         description: The user to create.
 *         schema :  
 *            type: object
 *            properties:
 *              sekolahName:
 *                type: string
 *              alamatSekolah:
 *                type: string
 *              noTlp:
 *                type: string
 *              typeSekolah:
 *                type: string
 *              email:
 *                type: string
 *     responses:
 *       200:
 *         description: Action Yg Akan di Pakai
 *         contens:
 *           application/json:
 *             schema:
 *               type: array
 *       404:
 *         description: Data Tidak Di Temukan
 */
router.post('/sekolah/',sekolahController.addSekolah);
/**
 * @swagger
 * /sekolah/sekolahtype:
 *   get:
 *     summary: Returns the list of all the sekolah type
 *     tags: [sekolah]
 *     responses:
 *       200:
 *         description: The list of the sekolah type
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get('/sekolah/sekolahtype',sekolahController.getType);
router.post('/sekolah/detail/:id',sekolahController.UpdateSekolah);

module.exports = router;