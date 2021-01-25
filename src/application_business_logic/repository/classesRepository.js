module.exports = class{
    constructor(storageRepository) {
        this.repository = storageRepository
    }
    create(entity) {
        console.log("this is from the the repository")
        return this.repository.create(entity)
    }
    getAll() {
        return this.repository.getAll()
    }
    getById(id) {
        return this.repository.getById(id)
    }
    updateProfile(id,updates){
        return this.repository.update(id,updates)
    }
    delete(id) {
        return this.repository.delete(id)
    }
}