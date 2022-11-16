function generateAlbum(pics) {
    let albumCode = "";
    for (i = 1; i <= pics; i++) {
        if (i < 10) {
            i = "0" + i;
        }
        albumCode +=
        `<div class="col-4 col-lg-3 d-flex justify-content-center my-3 my-lg-5">
            <a href="./img/${i}.png" data-lightbox="screenshot">
                <img class="img-thumbnail dropShadow grow" src="./img/t${i}.png" alt="thumbnail${i}">
            </a>
        </div> `
        }
        return albumCode;
    };
