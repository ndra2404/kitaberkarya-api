const knex = require("../config/database");

const get = async () => {
  return new Promise((resolve, reject) => {
    knex
      .from("sekolah")
      .leftJoin('sekolah_type', 'sekolah.typesekolah', 'sekolah_type.sty_typeID')
      .select("sekolahID","sekolahname","alamatsekolah","logosekolah","notlp","email","sty_type as typesekolah")
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getById = async (params) => {
  return new Promise((resolve, reject) => {
    knex
      .from("sekolah")
      .where("sekolahID", params.id)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const addSekolah = async (body) => {
  return new Promise((resolve, reject) => {
    knex("sekolah")
      .insert({
        sekolahname: body.sekolahName,
        alamatsekolah: body.alamatSekolah,
        notlp: body.noTlp,
        email: body.email,
        typesekolah: body.typeSekolah,
      })
      .returning("sekolahID")
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        const error = {
          message: err.originalError
            ? err.originalError.info.message
            : err.message,
        };
        reject(error);
      });
  });
};
const Update = (idSekolah, body) => {
  return new Promise((resolve, reject) => {
    knex("sekolah")
      .update({
        sekolahname: body.sekolahName,
        alamatsekolah: body.alamatSekolah,
        notlp: body.noTlp,
        email: body.email,
        typesekolah: body.typeSekolah,
      })
      .where("sekolahID", idSekolah)
      .returning("sekolahID")
      .then((idSekolah) => {
        resolve(idSekolah);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const Delete = (idSekolah) => {
  return new Promise((resolve, reject) => {
    knex("sekolah")
      .del()
      .where("sekolahID", idSekolah)
      .returning("sekolahID")
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
      .from("sekolah_type")
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  get,
  getById,
  addSekolah,
  getType,
  Update,
  Delete,
};
