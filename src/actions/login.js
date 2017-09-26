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

export function signupRequest(payload) {
    return {
        type: 'SIGNUP_REQUEST',
        payload
    }
}

export function signupFailed(payload) {
    return {
        type: 'SIGNUP_FAILED',
        payload
    }
}

export function logoutRequest(payload) {
    return {
        type: 'LOGOUT_REQUEST',
        payload
    }
}

export function logout(payload) {
    return {
        type: 'LOGOUT',
        payload
    }
}
