const MyUserReducer = (currentState, action) => {
    switch (action.type) {
        case "login":
            return {
                ...currentState,
                user: action.payload.user,
                accessToken: action.payload.accessToken,
            };
        case "logout":
            return {
                ...currentState,
                user: null,
                accessToken: null
            }
    }

    return currentState;
}

export default MyUserReducer