class FixedInput extends HTMLInputElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.addEventListener('blur', (e) => {
            console.log('FixedInput blur')
            setTimeout(() => {
                document.documentElement.scrollTop = document.documentElement.scrollTop - 10;
            })
        }, false)
    }
}

window.customElements.define('fixed-input', FixedInput, {
    extends: 'input'
});