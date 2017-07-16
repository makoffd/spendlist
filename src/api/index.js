const API = {
    login: 'login'
}

export default {
    login(params) {
        fetch(API.login, params)
    }
}
