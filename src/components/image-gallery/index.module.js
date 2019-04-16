class ImageGallery extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({mode: 'open'});
        this.shadowDom.innerHTML = `
            <style>${ImageGallery.styles}</style>
            <div>
                <slot></slot>
            </div>
            <div>
                <slot name="button"></slot>
            </div>
        `;
    }

    static get styles() {
        return `
            :host {
                display: block;
                --background-color: #70C1B3;
            }
            
            :host([hidden]) {
                display: none;
            }
            
            .img-item{
                width: 200px;
                height: 200px;  
            }
        `;
    }

}

window.customElements.define('image-gallery', ImageGallery);
