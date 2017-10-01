export function requestExpenses(payload) {
    return {
        type: 'EXPENSES_REQUEST',
        payload
    }
}

export function expensesResponse(payload) {
    return {
        type: 'EXPENSES_RESPONSE',
        payload
    }
}

export function expensesRequestFailed(payload) {
    return {
        type: 'EXPENSES_REQUEST_FAILED',
        payload
    }
}

export function addExpense(payload) {
    return {
        type: 'ADD_EXPENSE_REQUEST',
        payload
    }
}

export function addExpenseRequestFailed(payload) {
    return {
        type: 'ADD_EXPENSE_REQUEST_FAILED',
        payload
    }
}

export function deleteExpense(payload) {
    return {
        type: 'DELETE_EXPENSE_REQUEST',
        payload
    }
}

export function deleteExpenseRequestFailed(payload) {
    return {
        type: 'DELETE_EXPENSE_REQUEST_FAILED',
        payload
    }
}

export function editExpense(payload) {
    return {
        type: 'EDIT_EXPENSE_REQUEST',
        payload
    }
}

export function editExpenseRequestFailed(payload) {
    return {
        type: 'EDIT_EXPENSE_REQUEST_FAILED',
        payload
    }
}
