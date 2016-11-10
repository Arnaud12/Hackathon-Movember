class accueilController {
    constructor(accueilService, photoService) {
        this.accueilService = accueilService;
        this.loadComments();
        this.photoService = photoService;
        this.loadPhotos();
    }
    loadAccueils() {
        this.accueilService.getAll().then((res) => {
            this.accueils = res.data;
        });
    }
    updateAccueils(accueil) {
        this.accueilService.update(accueil.vote).then(() => {
            this.loadAccueils();

        });
    }
    loadPhotos() {
        this.photoService.getAll().then((res) => {
            this.photos = res.data;
            $('.heart').click(function() {
                if ($(this).attr("src") == 'assets/img/like.png') {
                    $(this).attr("src", "assets/img/like1.png");
                    $("#" + $(this).attr('num')).text(Number($("#" + $(this).attr('num')).text()) + 1)
                } else {
                    $(this).attr("src", "assets/img/like.png");
                    $("#" + $(this).attr('num')).text(Number($("#" + $(this).attr('num')).text()) - 1)

                }
            });
        });
    }
