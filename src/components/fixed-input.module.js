class FixedInput extends HTMLInputElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.addEventListener('blur', (e) => {
            console.log('FixedInput blur')
            setTimeout(() => {
                document.body.scrollTop = document.body.scrollTop - 1;
            })
        }, false)
    }
}

window.customElements.define('fixed-input', FixedInput, {
    extends: 'input'
});