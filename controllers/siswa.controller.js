const { generalModel } = require('../models')
const { response } = require('../utils/')

const get = (req, res, next) => {
  generalModel
    .getBy("siswa","siswa_sekolahid",req.params.id)
    .then((data) => {
      res.json({ success: true, data: data, total: data.length })
    })
    .catch((err) => {
      response.error500(err.message, [], res)
    })
}
const getsiswa = (req, res, next) => {
  generalModel
    .getBy("siswa","siswa_id",req.params.id)
    .then((data) => {
      res.json({ success: true, data: data[0], total: data.length })
    })
    .catch((err) => {
      response.error500(err.message, [], res)
    })
}

const addData = (req, res) => {

    let datasimpan = {
        siswa_nisn:req.body.siswa_nisn,
        siswa_nama:req.body.siswa_nama,
        siswa_tempatlahir:req.body.siswa_tempatlahir,
        siswa_tgllahir:req.body.siswa_tgllahir,
        siswa_jk:req.body.siswa_jk,
        siswa_alamat:req.body.siswa_alamat,
        siswa_ibu:req.body.siswa_ibu,
        siswa_ayah:req.body.siswa_ayah,
        siswa_telp:req.body.siswa_telp,
        siswa_walitelp:req.body.siswa_walitelp,
        siswa_sekolahid:req.body.siswa_sekolahid,
        siswa_kelasid:req.body.siswa_kelasid,
        siswa_status:req.body.siswa_status,
        siswa_email:req.body.siswa_email
    }
    generalModel
        .addData("siswa","siswa_id",datasimpan)
        .then((data) => {
        res.json({ success: true, Message:"Data Berhasil disimpan" })
        })
        .catch((err) => {
        response.error500(err.message, [], res)
        })
}
const updateData = (req, res) => {

    let datasimpan = {
        siswa_nisn:req.body.siswa_nisn,
        siswa_nama:req.body.siswa_nama,
        siswa_tempatlahir:req.body.siswa_tempatlahir,
        siswa_tgllahir:req.body.siswa_tgllahir,
        siswa_jk:req.body.siswa_jk,
        siswa_alamat:req.body.siswa_alamat,
        siswa_ibu:req.body.siswa_ibu,
        siswa_ayah:req.body.siswa_ayah,
        siswa_telp:req.body.siswa_telp,
        siswa_walitelp:req.body.siswa_walitelp,
        siswa_sekolahid:req.body.siswa_sekolahid,
        siswa_kelasid:req.body.siswa_kelasid,
        siswa_status:req.body.siswa_status,
        siswa_email:req.body.siswa_email
    }
    generalModel
        .Update("siswa","siswa_id",req.params.id,datasimpan)
        .then((data) => {
        res.json({ success: true, Message:"Data Berhasil diupdate" })
        })
        .catch((err) => {
        response.error500(err.message, [], res)
        })
}

const deleteData = (req, res) => {
  generalModel
    .Delete("siswa","siswa_id",req.params.id)
    .then((data) => {
     res.json({ success: true, data: data, Message:"Data Berhasil dihapus" })
    })
    .catch((err) => {
      response.error500(err.message, [], res)
    })
}

module.exports = { get,addData,updateData,deleteData,getsiswa }