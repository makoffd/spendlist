const base = 'http://localhost:3001';
const API = {
    login: '/api/login',
    signup: '/api/signup',
    expenses: '/api/expenses',
    addExpense: '/api/expenses/add'
}

const request = (method, url, params) => {
    const idToken = localStorage.getItem('id_token');
    const headers = new Headers({
        'Content-Type': 'application/json'
    })

    if (idToken) {
        headers.append('x-access-token', idToken)
    }

    const request = new Request(
        base + url,
        {
            method,
            mode: 'cors',
            headers,
            body: JSON.stringify(params)
        }
    )
    return fetch(request);
}

const post = (url, params) => {
    return request('POST', url, params);
}

const get = (url, params) => {
    return request('GET', url, params);
}

const template = async (method, address, params) => {
    const response = await method(address, params);
    const data = await response.json();
    const { error } = data;

    if (error) {
        throw(error)
    }

    return data
}

export default {
    login(params) {
        return template(post, API.login, params);
    },
    signup(params) {
        return template(post, API.signup, params);
    },
    getExpenses(params) {
        return  template(get, API.expenses, params);
    },
    addExpense(params) {
        return template(post, API.addExpense, params);
    },
}
