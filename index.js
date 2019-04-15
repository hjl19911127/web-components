window.addEventListener('DOMContentLoaded', function () {
    var customLoginComponent = document.getElementById('custom-login');
    customLoginComponent.setAttribute('encrypt', {
        sign: '666', cipher: 'md5'
    })
});