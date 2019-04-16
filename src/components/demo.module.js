class CustomElement extends HTMLElement {
    constructor() {
        super();
    }
}

window.customElements.define('custom-element', CustomElement);
