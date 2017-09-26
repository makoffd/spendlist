export default (expenses = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case 'EXPENSES_RESPONSE':
            return [ ...payload.expenses ]
        case 'LOGOUT':
            return []
        default:
            return expenses
    }
}
