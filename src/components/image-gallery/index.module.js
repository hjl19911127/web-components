class CustomLogin extends HTMLElement {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.shadowDom.innerHTML = `
            <style>${CustomLogin.styles}</style>
            <div class="login-panel">
                <h3>登陆组件</h3>
                <form id="login-form">
                    <div class="form-item">
                        <label>用户名：</label>
                        <input type="text" name="username">
                    </div>
                    <div class="form-item">
                        <label>密码：</label>
                        <input type="password" name="password">
                    </div>
                    <div class="form-item">
                        <button type="button" id="login">登录</button>
                        <button type="button">清空</button>
                    </div>
                </form>
            </div>
        `;
        this.shadowDom
            .querySelector('#login')
            .addEventListener('click', () => this.handleLoginClick());
        this.loginBtn = this.shadowDom.querySelector('#login');
    }

    handleLoginClick() {
        // 通过自定义事件向父组件通信
        this.dispatchEvent(
            new CustomEvent('login', {
                detail: {
                    username: this.shadowDom.querySelector('input[type=text]')
                        .value,
                    password: this.shadowDom.querySelector(
                        'input[type=password]'
                    ).value,
                    encrypt: this.encrypt
                }
            })
        );

        // 内部元素自定义事件
        this.loginBtn.dispatchEvent(
            new CustomEvent('login-btn', {
                detail: { message: 'a custom event' },
                composed: true
            })
        );
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

            h3{
                margin-top: 0;
            }

            label {
                display: inline-block;
                width: 4em;
            }
            
            .login-panel {
                background-color: var(--background-color);
                padding: 10px;
            }
            
            .form-item {
                margin-bottom: 5px;
            }
        `;
    }

    // 映射property to attribute
    get disabled() {
        return this.hasAttribute('disabled');
    }

    set disabled(val) {
        if (val) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    // 当 custom element首次被插入文档DOM时
    connectedCallback() {
        console.log('connectedCallback');
    }

    // 当 custom element从文档DOM中删除时
    disconnectedCallback() {
        console.log('invoked disconnectedCallback');
    }

    // 当 custom element被移动到新的文档时
    adoptedCallback() {
        console.log('invoked adoptedCallback');
    }

    // 观察 attributes 清单
    static get observedAttributes() {
        return ['disabled'];
    }

    // 当 custom element attribute变化时
    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log(attrName, oldVal, newVal);
        if (this.disabled) {
            this.shadowDom.querySelectorAll('input').forEach(input => {
                input.setAttribute('disabled', '');
            });
        } else {
            this.shadowDom.querySelectorAll('input').forEach(input => {
                input.removeAttribute('disabled');
            });
        }
    }
}

window.customElements.define('custom-login', CustomLogin);
