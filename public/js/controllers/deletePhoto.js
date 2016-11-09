class deletePhoto {
    constructor(photoService) {
        this.photoService = photoService;
        this.load();
    }
    load() {
        this.photoService.getAll().then((res) => {
            this.photos = res.data;
        })
    }
    delete(photo) {
        this.photoService.delete(photo._id, photo.stachePhoto, photo.pseudoPhoto, photo.lieuPhoto).then(() => {
            this.load()
        })
    }
}
