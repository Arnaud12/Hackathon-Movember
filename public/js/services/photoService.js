class photoService {

    constructor($http) {
        this.$http = $http;
    }

    create(stache, pseudo, lieu, comment) {
        return this.$http.post('/api/photos', {
            stachePhoto: stache,
            pseudoPhoto: pseudo,
            lieuPhoto: lieu,
            commentPhoto: comment
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
