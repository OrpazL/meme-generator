function startSearch(e) {
    e.preventDefault();

    const regex = new RegExp(escapeRegex($('.search').val()), 'gi');

    let images = findImages(regex);

    createList(images);
}

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function findImages(regex) {
    return gImages.filter(img => img.keywords.find(keyword => regex.test(keyword)) !== undefined );
}