var disabledLogin = false;
var customLoginComponent;

function bindEvent() {
    // 自定义事件
    customLoginComponent.addEventListener('login', function(e) {
        console.log(e);
        console.log(e.composedPath());
    });
    customLoginComponent.addEventListener('login-btn', function(e) {
        console.log(e);
        console.log(e.composedPath());
    });
    // native事件
    customLoginComponent.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.composedPath());
    });
}

window.addEventListener('DOMContentLoaded', function() {
    // 通过js初始化 组件
    const el = customElements.get('custom-login');
    const myElement = new el();
    document.getElementById('J_insertLogin').appendChild(myElement);

    customLoginComponent = document.getElementById('custom-login');

    if (customLoginComponent) {
        customLoginComponent.encrypt = {
            sign: '666',
            cipher: 'md5'
        };
    }

    document
        .getElementById('J_toggleLogin')
        .addEventListener('click', function() {
            disabledLogin = !disabledLogin;
            if (disabledLogin) {
                customLoginComponent.setAttribute('disabled', '');
            } else {
                customLoginComponent.removeAttribute('disabled');
            }
        });
    bindEvent();
});
