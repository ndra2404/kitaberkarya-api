const knex = require('../config/database')

const get = async () => {
  return new Promise((resolve, reject) => {
    knex
      .from('sekolah')
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
const getById = async (params) => {
  return new Promise((resolve, reject) => {
    knex
      .from('sekolah')
      .where("sekolahID",params.id)
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
const addSekolah = async body =>{
     return new Promise((resolve, reject) => {
         knex('sekolah')
         .insert({
             sekolahname:body.sekolahName,
             alamatsekolah:body.alamatSekolah,
             notlp:body.noTlp,
             email:body.email,
             typesekolah:body.typeSekolah
         })
         .returning('sekolahID')
         .then(response => {
        resolve(response);
      })
        .catch(err => {
            const error = {
            message: err.originalError ? err.originalError.info.message : err.message
            };
            reject(error);
        });
     })
}
const Update = (idSekolah, body) => {
  return new Promise((resolve, reject) => {
    knex('sekolah')
      .update({
             sekolahname:body.sekolahName,
             alamatsekolah:body.alamatSekolah,
             notlp:body.noTlp,
             email:body.email,
             typesekolah:body.typeSekolah
         })
      .where('sekolahID', idSekolah)
      .returning('sekolahID')
      .then((idSekolah) => {
        resolve(idSekolah);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const getType = async () => {
  return new Promise((resolve, reject) => {
    knex
      .from('sekolahType')
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

module.exports = {
    get,getById,addSekolah,getType,Update
}