const { sekolahModel } = require('../models')
const { response } = require('../utils/')


const get = (req, res, next) => {
  sekolahModel
    .get()
    .then((data) => {
      res.json({ success: true, data: data, total: data.length })
    })
    .catch((err) => {
      response.error500(err.message, [], res)
    })
}
const getById = (req, res) => {
  sekolahModel
    .getById(req.params)
    .then((data) => {
     response.data(data, res)
    })
    .catch((err) => {
      response.error500(err.message, [], res)
    })
}

const addSekolah = (req, res) => {
  sekolahModel
    .addSekolah(req.body)
    .then((data) => {
      res.json({ success: true, data: data, Message:"Data Berhasil disimpan" })
    })
    .catch((err) => {
      response.error500(err.message, [], res)
    })
}
const getType = (req, res, next) => {
  sekolahModel
    .getType()
    .then((data) => {
      res.json({ success: true, data: data, total: data.length })
    })
    .catch((err) => {
      response.error500(err.message, [], res)
    })
}
const UpdateSekolah = (req, res) => {
  sekolahModel
    .Update(req.params.id,req.body)
    .then((data) => {
     res.json({ success: true, data: data, Message:"Data Berhasil diupdate" })
    })
    .catch((err) => {
      response.error500(err.message, [], res)
    })
}
const DeleteSekolah = (req, res) => {
  sekolahModel
    .Delete(req.params.id)
    .then((data) => {
     res.json({ success: true, data: data, Message:"Data Berhasil dihapus" })
    })
    .catch((err) => {
      response.error500(err.message, [], res)
    })
}

module.exports = { get,getById,addSekolah,UpdateSekolah,getType,DeleteSekolah }