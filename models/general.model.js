const knex = require('../config/database')

const get = async (table) => {
  return new Promise((resolve, reject) => {
    knex
      .from(table)
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
const getBy = async (table,primary,params) => {
  return new Promise((resolve, reject) => {
    knex
      .from(table)
      .where(primary,params)
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
const addData = async (table,primary,body) =>{
     return new Promise((resolve, reject) => {
         knex(table)
         .insert(body)
         .returning("siswa_nis")
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
const Update = (table,primary,idSekolah, body) => {
  return new Promise((resolve, reject) => {
    knex(table)
      .update(body)
      .where(primary, idSekolah)
      .returning(primary)
      .then((idSekolah) => {
        resolve(idSekolah);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const Delete = (table,primary,idSekolah) => {
  return new Promise((resolve, reject) => {
    knex(table)
      .del()
      .where(primary, idSekolah)
      .then((idSekolah) => {
        resolve(idSekolah);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

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
    get,getBy,addData,getType,Update,Delete
}