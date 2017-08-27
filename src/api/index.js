const base = 'http://localhost:3001';
const API = {
    login: '/api/login'
}

const post = (url, params) => {
    const request = new Request(
        base + url,
        {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(params)
        }
    )
    return fetch(request);
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
    }
}
