class mainController {

    constructor(photoService) {
        this.photoService = photoService;
        this.load();
    }

    load() {
        this.photoService.getAll().then((res) => {
            this.photos = res.data;
        });
    }
}
