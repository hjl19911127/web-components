class ImageGallery extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.shadowDom.innerHTML = `${ImageGallery.template}`;
        const template = this.shadowDom.querySelector('#template')
        this.shadowDom.appendChild(template.content.cloneNode(true));
    }

    static get template() {
        return `
            <template id="template">
                <style>${ImageGallery.styles}</style>
                <div>
                    <slot></slot>
                </div>
                <div>
                    <slot name="button"></slot>
                </div>    
            </template>
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
