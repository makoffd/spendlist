const initialState =  [];
let id = 0;

export default (notifications = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SHOW_ERROR':
            return [ ...notifications, { id: id++, text: payload, type: 'error' } ]
        case 'SHOW_WARNING':
            return [ ...notifications, { id: id++, text: payload, type: 'warning'} ]
        case 'SHOW_SUCCESS':
            return [ ...notifications, { id: id++, text: payload, type: 'success'} ]
        case 'REMOVE_NOTIFICATION':
            return notifications.filter(item => (item.id !== payload))
        default:
            return notifications
    }
}
