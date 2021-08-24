const initialstate = [{
    id: 1,
    title: 'task 1',
    content: 'hello world',
    status:'not started'
}]

const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'ADD_TO_DO':
            return [...state, {
                id: Math.floor(Math.random() * 9999999),
                title: action.payload.title,
                content: action.payload.content,
                status:'not started'
            }]
        case 'UPDATE_TO_DO':
            return state.map(el => {
                return el.id===action.payload.id?action.payload:el
            })
        default:
            return state
    }
}

export default Reducer;