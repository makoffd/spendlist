const base = 'http://localhost:3001';
const API = {
    login: '/api/login'
}

export default {
    async login(params) {
        const data = await fetch(
            base + API.login,
            {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(params)
            }
        );

        return data;
    }
}
