const ImageGallery = window.customElements.get('image-gallery')

class BadElement extends ImageGallery {
    constructor() {
        super();
    }
}

window.customElements.define('image-gallery-bad', BadElement, );
