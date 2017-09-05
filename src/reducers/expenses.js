export default (expenses = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case 'EXPENSES_RESPONSE':
            return [ ...payload.expenses ]
        default:
            return expenses
    }
}
