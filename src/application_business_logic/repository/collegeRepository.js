module.exports = class {
  constructor(storageRepository) {
    this.repository = storageRepository;
  }
  create(entity) {
    console.log("this is from the the repository");
    return this.repository.create(entity);
  }
  getAll() {
    return this.repository.getAll();
  }
  getById(uuidIdentifier) {
    return this.repository.getById(uuidIdentifier);
  }
  updateProfile(uuidIdentifier, updates) {
    return this.repository.update(uuidIdentifier, updates);
  }
  delete(uuidIdentifier) {
    return this.repository.delete(uuidIdentifier);
  }
};
