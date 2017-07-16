const initialState =  {

};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        // case ACTION:
        //     return {
        //       ...state,
        //         visibilityFilter: payload
        //     }
        default:
            return state
    }
}
