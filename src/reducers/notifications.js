const initialState =  [];

export default (notifications = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SHOW_ERROR':
            return [ ...notifications, { text: payload, type: 'error'} ]
        case 'SHOW_WARNING':
            return [ ...notifications, { text: payload, type: 'warning'} ]
        case 'SHOW_SUCCESS':
            return [ ...notifications, { text: payload, type: 'success'} ]
        case 'REMOVE_NOTIFICATION':
            return notifications.filter((item, index) => (index !== payload))
        default:
            return notifications
    }
}
