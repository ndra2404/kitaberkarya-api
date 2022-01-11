var express = require('express');
var router = express.Router();

const {siswaController } = require('../controllers');

/**
 * @swagger
 * /siswa/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id sekolah
 *     summary: Returns the list of all the siswa
 *     tags: [siswa]
 *     responses:
 *       200:
 *         description: The list of the siswa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get('/siswa/:id',siswaController.get);
/**
 * @swagger
 * /siswa:
 *   post:
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id sekolah
 *     summary: Tambah siswa
 *     tags: [siswa]
 *     requestBody:
 *         content:
 *           application/json:
 *              schema:      # Request body contents
 *                  type: object
 *                  properties:
 *                    siswa_nisn:
 *                      type: string
 *                    siswa_nama:
 *                      type: string
 *                    siswa_tempatlahir:
 *                      type: string
 *                    siswa_tgllahir:
 *                      type: string
 *                    siswa_jk:
 *                      type: string
 *                    siswa_foto:
 *                      type: string
 *                    siswa_alamat:
 *                      type: string
 *                    siswa_ibu:
 *                      type: string
 *                    siswa_ayah:
 *                      type: string
 *                    siswa_telp:
 *                      type: string
 *                    siswa_walitelp:
 *                      type: string
 *                    siswa_sekolahid:
 *                      type: integer
 *                    siswa_kelasid:
 *                      type: integer
 *                    siswa_status:
 *                      type: string
 *                    siswa_email:
 *                      type: string
 *     responses:
 *       200:
 *         description: Message yang akan dipakai
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.post('/siswa',siswaController.addData);

module.exports = router;