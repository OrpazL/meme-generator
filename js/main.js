var gCanvas;
var gCtx;

function init() {
    createList(getImgs());

    setCanvas(document.querySelector('.dynamic-canvas'));
    setCtx(gCanvas.getContext('2d'));

}


function handlePage(pageClass, elLink) {
    if (elLink.classList.contains('disabled')) return;

    removeDisplayPrev();
    elLink.classList.add('active');

    let page = $(`.${pageClass}`);
    page.removeClass('d-none');

    renderCanvas();
}

function removeDisplayPrev() {
    let allPages = $('.card-body');
    let allBtns = $('.nav-link');

    for (let i = 0; i < allPages.length; i++) {
        $(allPages[i]).addClass('d-none');
        if ($(allBtns[i]).hasClass('active')) {
            $(allBtns[i]).removeClass('active');
        }
    }
}

//change step
function nextPage(next, id) {
    let elLink = document.querySelector(`#${id}`);

    handlePage(next, elLink);
}


// CANVAS & CTX GET&SET
function setCanvas(canvas) {
    gCanvas = canvas;
}

function setCtx(ctx) {
    gCtx = ctx;
}

function getCanvas() {
    return gCanvas;
}

function getCtx() {
    return gCtx;
}

// upload image

function onFileInputChange(ev) {
    handleImageFromInput(ev, renderImage)
}

function downloadImg(elLink) {
    let dcanvas = getCanvas();
    let scanvas = document.querySelector('.static-canvas');

    var bgImgContent = scanvas.toDataURL('image/jpg');
console.log(bgImgContent)
    var userContent = dcanvas.toDataURL('image/jpg');

    var downloadCanvas = document.createElement('canvas');
    var dcCtx = downloadCanvas.getContext('2d');
    downloadCanvas.width = dcanvas.width;
    downloadCanvas.height = dcanvas.height;

    dcCtx.drawImage(0,0,downloadCanvas.width,downloadCanvas.height);

    elLink.href = bgImgContent + userContent.substring(22);
}

