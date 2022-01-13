const sekolahRouter = require('./sekolah')
const siswaRouter = require('./siswa')


module.exports = {
    sekolahRouter,
    siswaRouter
}

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

/**
 * @swagger
 * /sekolah/detail/{id}:
 *   get:
 *     security:
 *       - Bearer: [abc]
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
 /**
 * @swagger
 * /sekolah:
 *   post:
 *     security:
 *       - Bearer: [abc]
 *     summary: sekolahtambah
 *     tags: [sekolah]
 *     requestBody:
 *         content:
 *           application/json:
 *              schema:      # Request body contents
 *                  type: object
 *                  properties:
 *                    sekolahName:
 *                      type: string
 *                    alamatSekolah:
 *                      type: string
 *                    noTlp:
 *                      type: string
 *                    typeSekolah:
 *                      type: integer
 *                    email:
 *                      type: string
 *     responses:
 *       200:
 *         description: Action Yg Akan di Pakai
 *         contens:
 *           application/json:
 *             schema:
 *               type: array
 *       404:
 *         description: Data Tidak Di Temukan
 * /sekolah/sekolahtype:
 *   get:
 *     security:
 *       - Bearer: [abc]
 *     summary: Returns the list of all the sekolah type
 *     tags: [sekolah]
 *     responses:
 *       200:
 *         description: The list of the sekolah type
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 * /sekolah/detail/{id}:
 *   post:
 *     summary: sekolah Update
 *     tags: [sekolah]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id sekolah
 *     requestBody:
 *         content:
 *           application/json:
 *              schema:      # Request body contents
 *                  type: object
 *                  properties:
 *                    sekolahName:
 *                      type: string
 *                    alamatSekolah:
 *                      type: string
 *                    noTlp:
 *                      type: string
 *                    typeSekolah:
 *                      type: integer
 *                    email:
 *                      type: string
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
 /**
 * @swagger
 * /sekolah/detail/{id}:
 *   put:
 *     summary: sekolah delete
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
 *         description: Action Yg Akan di Pakai
 *         contens:
 *           application/json:
 *             schema:
 *               type: array
 *       404:
 *         description: Data Tidak Di Temukan
 */


 //siswa
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
 /**
 * @swagger
 * /siswa/detail/{id}:
 *   post:
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id siswa
 *     summary: update siswa
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
 /**
 * @swagger
 * /siswa/detail/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id siswa
 *     summary: Get detail siswa
 *     tags: [siswa]
 *     responses:
 *       200:
 *         description: Message yang akan dipakai
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
 /**
 * @swagger
 * /siswa/detail/{id}:
 *   put:
 *     summary: siswa delete
 *     tags: [siswa]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id siswa
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