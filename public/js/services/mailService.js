class mailUserService {

    constructor($http) {
        this.$http = $http;
    }

    mailTransport(data1, data2, data3) {
      debugger;
        return this.$http.post('/api/sendEmail', {
            name: data1,
            email: data2,
            tel: data3
        });
    }
}
