export default (currencies = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case 'EXPENSES_RESPONSE':
            return [ ...payload.currencies ]
        case 'LOGOUT':
            return []
        default:
            return currencies
    }
}
