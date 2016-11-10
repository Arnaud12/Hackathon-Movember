class usersController {
    constructor(mailUserService) {
        this.mailUserService= mailUserService;
    }
    mailTransport(email) {
        this.mailUserService.mailTransport(email.name, email.email, email.tel, email.msg);
    }

}
