
export const greeting = (state = {}, action) => {
    switch (action.type) {
        case "SAY_HELLO":
            return action;
        case "SAY_GOODBYE":
            return action;
        default:
            return state;
    }
}