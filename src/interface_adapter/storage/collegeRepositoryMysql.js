const db = require("../../framework_drivers/database/sequelize");

module.exports = class {
  constructor() {
    this.db = db;
    this.model = this.db.model("college");
  }
  async create(entity) {
    console.log("this is from the storage repository");
    return await this.model.create(entity);
  }
  async getAll() {
    return await this.model.findAll();
  }
  async getById(uuidIdentifier) {
    return await this.model.findByPk(uuidIdentifier);
  }
  async update(id, updates) {
    console.log("updating user ", uuidIdentifier, updates);
    return await this.model.update(updates, { where: { uuidIdentifier } });
  }
  async delete(id) {
    return await this.model.destroy({ where: { uuidIdentifier } });
  }
};
