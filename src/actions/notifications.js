export function showSuccess(payload) {
    return {
        type: 'SHOW_SUCCESS',
        payload
    }
}

export function showWarning(payload) {
    return {
        type: 'SHOW_WARNING',
        payload
    }
}

export function showError(payload) {
    return {
        type: 'SHOW_ERROR',
        payload
    }
}

export function removeNotification(payload) {
    return {
        type: 'REMOVE_NOTIFICATION',
        payload
    }
}
