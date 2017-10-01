const base = 'http://localhost:3001';
const API = {
    login: '/api/login',
    signup: '/api/signup',
    expenses: '/api/expenses',
    addExpense: '/api/expenses/add',
    deleteExpense: '/api/expenses/delete',
    editExpense: '/api/expenses/edit'
}

const getQueryString = params => {
    const esc = encodeURIComponent;

    return Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
}

const request = (method, url, params) => {
    const idToken = localStorage.getItem('id_token');
    const headers = new Headers({
        'Content-Type': 'application/json'
    })
    const requestParams = {
        method,
        mode: 'cors',
        headers
    }

    if (idToken) {
        headers.append('x-access-token', idToken)
    }

    let requestUrl = base + url;
    if (['GET', 'DELETE'].indexOf(method) > -1) {
        if (params) {
            requestUrl = requestUrl + '?' + getQueryString(params)
        }
    } else {
        requestParams.body = JSON.stringify(params);
    }

    const request = new Request(
        requestUrl,
        requestParams
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
    deleteExpense(params) {
        return template(get, API.deleteExpense, params);
    },
    editExpense(params) {
        return template(post, API.editExpense, params);
    },
}
