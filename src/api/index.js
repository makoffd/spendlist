const base = 'http://localhost:3001';
const API = {
    login: '/api/login',
    expenses: '/api/expenses'
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

export default {
    async login(params) {
        const response = await post(API.login, params);
        const data = await response.json();
        const { error } = data;

        if (error) {
            throw(error)
        }

        return data
    },
    async getExpenses(params) {
        const response = await get(API.expenses, params);
        const data = await response.json();
        const { error } = data;

        if (error) {
            throw(error)
        }

        return data
    }
}
