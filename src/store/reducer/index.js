const initial_state = {
    users: [],
    // {
    //     name: 'usman sadiq',
    //     mail: 'mianusman2488@gmail.com',
    // },
    // {
    //     name: 'bilal sadiq',
    //     mail: 'blalsadiq@gmail.com',
    // },
    current_user: {},
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initial_state, action) => {
    switch (action.type) {
        // case 'set_data':
        //     return {
        //         ...state,
        //         users: [...state.users, action.payloaduser],
        //     };
        case 'SETUSER':
            return {
                ...state,
                current_user: action.payload,
            };

        default:
            return state;
    }

    // return state;
};
