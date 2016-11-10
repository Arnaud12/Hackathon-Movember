class accueilController {
    constructor(accueilService) {
        this.accueilService = accueilService;
        this.loadComments();
    }
    loadAccueils() {
        this.accueilService.getAll().then((res) => {
            this.accueils = res.data;
        });
    }

    updateAccueils(accueil) {
        this.accueilService.update(accueil.vote).then(() => {
            this.loadAccueils();
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
