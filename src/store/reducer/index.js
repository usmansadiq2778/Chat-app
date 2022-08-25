const initial_state = {
    users: [
        {
            name: 'usman sadiq',
            mail: 'mianusman2488@gmail.com',
        },
        {
            name: 'bilal sadiq',
            mail: 'blalsadiq@gmail.com',
        },
    ],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initial_state, action) => {
    // eslint-disable-next-line default-case
    console.log('action ma data mil tha ha', action);
    switch (action.type) {
        case 'set_data':
            return {
                ...state,
                users: [...state.users, action.user],
            };

        default:
            return state;
    }

    // return state;
};
