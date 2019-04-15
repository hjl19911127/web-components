class CustomLogin extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <style>${CustomLogin.styles}</style>
            <div class="login-panel">
                <h3>登陆组件</h3>
                <div class="form-item">
                    <label>用户名：</label>
                    <input type="text" disabled="${this.disabled}">
                </div>
                <div class="form-item">
                    <label>密码：</label>
                    <input type="password" disabled="${this.disabled}">
                </div>
            </div>
        `;
    }

    static get styles() {
        return `
            :host {
                display: block;
            }
            
            :host([hidden]) {
                display: none;
            }
            
            label {
                display: inline-block;
                width: 4em;
            }
            
            .login-panel {
                background-color: #70C1B3;
                padding: 10px;
            }
            
            .form-item {
                margin-bottom: 5px;
            }
        `;
    }

    get disabled() {
        return this.hasAttribute('disabled');
    }

    set disabled(val) {
        // Reflect the value of `disabled` as an attribute.
        if (val) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
        this.toggle();
    }

    toggle() {

    }

    // 当 custom element首次被插入文档DOM时
    connectedCallback() {

    }

    // 当 custom element从文档DOM中删除时
    disconnectedCallback() {

    }

    // 当 custom element被移动到新的文档时
    adoptedCallback() {

    }

    // 当 custom element增加、删除、修改自身属性时
    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}

window.customElements.define('custom-login', CustomLogin,);