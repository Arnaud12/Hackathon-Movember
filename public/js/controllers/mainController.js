class mainController {

    constructor(photoService) {
        this.photoService = photoService;
        this.load();
    }

    // carousel() {
    //     $('.carousel.carousel-slider').carousel({
    //         full_width: true
    //     });
    //     autoplay();
    //
    //     function autoplay() {
    //         $('.carousel').carousel('next');
    //         setTimeout(autoplay, 4500);
    //     }
    // }

    load() {
        this.photoService.getAll().then((res) => {
            this.photos = res.data;
        })
    }
}
