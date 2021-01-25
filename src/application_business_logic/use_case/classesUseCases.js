module.exports = class {
    create(entity, repository){
        console.log("this is from the use cases")
        return repository.create(entity)
    }
    getAll(repository) {
        return repository.getAll()
    }
    getById(id, repository) {
        return repository.getById(id)
    }
 
    delete(id,repository) {
        return repository.delete(id)
    }
    updateProfile(id, updates, repository) {
        // const fields = this.checkUpdateFields(updates)
        return repository.updateProfile(id, updates)
    }
};