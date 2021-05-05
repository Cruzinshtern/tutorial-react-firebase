export default (todos = [], action) => {
    switch (action.type) {
        case "GET_ALL_TODOS":
            return action.payload;
        case "ADD_TODO":
            return [...todos, action.payload];
        default:
            return todos;
    }
}