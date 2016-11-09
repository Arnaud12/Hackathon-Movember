class createPhoto {
    constructor(photoService) {
        this.photoService = photoService;
        this.photo = {}
        this.load();

        function uploadFile(file) {
            var url = '/api/picture';
            var xhr = new XMLHttpRequest();
            var fd = new FormData();
            xhr.open("POST", url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText);
                }
            };
            fd.append("upload_file", file);
            xhr.send(fd);
        };

        var uploadfiles = document.querySelector('#uploadImage');
        uploadfiles.addEventListener('change', function() {
            var files = this.files;
            for (var i = 0; i < files.length; i++) {
                uploadFile(this.files[i]);
            }
        }, false);

    }

    load() {
        this.photoService.getAll().then((res) => {
            this.photos = res.data;
        })
    }

    create(photo) {
        var urlImage = '/uploads/img_' + document.getElementById('uploadImage').value.split(/(\|\/)/g).pop().replace('C:\\fakepath\\', '');
        console.log(urlImage);
        photo.stachePhoto = urlImage;

        if (!photo.lieuPhoto)
            photo.lieuPhoto = "&nbsp;";

        this.photoService.create(photo.stachePhoto, photo.pseudoPhoto,photo.lieuPhoto, photo.commentPhoto).then(() => {
            this.photo = {};
            this.load()
        })
    }

    delete(photo) {
        this.photoService.delete(photo._id, photo.stachePhoto, photo.pseudoPhoto, photo.lieuPhoto, photo.commentPhoto).then(() => {
            this.load()
        })
    }
}
