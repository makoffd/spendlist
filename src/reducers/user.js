export default (user = null, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'LOGIN_RESPONSE':
            return {
                ...user,
                ...payload
            }
        case 'LOGOUT':
            return null
        default:
            return user
    }
}
