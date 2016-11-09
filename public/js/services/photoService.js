class photoService {

    constructor($http) {
        this.$http = $http;
    }

    create(logo, title, descr) {
        return this.$http.post('/api/photos', {
            logoPhoto: logo,
            titrePhoto: title,
            descriptionPhoto: descr
        })
    }

    getAll() {
        return this.$http.get('/api/photos')
    }

    getOne(id) {
        return this.$http.get('/api/photos/' + id)
    }

    delete(id) {
        return this.$http.delete('/api/photos/' + id)
    }

}
