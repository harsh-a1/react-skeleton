const todo = (state = [], action) => {
    switch (action.type) {
    case 'LEFT':
        return [
                ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]

    case 'UPLOAD_IMAGE' :
        return [
                ...state,
            {
                id:"test"
            }
        ]
    default:
        return state
    }
}

export default todo
