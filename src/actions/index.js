export function loginRequest(payload) {
    return {
        type: 'LOGIN_REQUEST',
        payload
    }
}

export function loginResponse(payload) {
    return {
        type: 'LOGIN_RESPONSE',
        payload
    }
}

export function loginFailed(payload) {
    return {
        type: 'LOGIN_FAILED',
        payload
    }
}
