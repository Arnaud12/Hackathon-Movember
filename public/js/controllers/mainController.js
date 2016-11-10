class mainController {

    constructor(photoService) {
        this.photoService = photoService;
        this.load();
    }

    addHearth(index) {
        if ($("#image-" + index).attr("src") == 'assets/img/like.png') {
            $("#image-" + index).attr("src", "assets/img/like1.png");
            $("#number-" + index).text(Number($("#number-" + index).text()) + 1)
        } else {
            $("#image-" + index).attr("src", "assets/img/like.png");
            $("#number-" + index).text(Number($("#number-" + index).text()) - 1)
        }
    }

    load() {
        this.photoService.getAll().then((res) => {
            this.photos = res.data;
        });
    }
}
