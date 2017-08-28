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
