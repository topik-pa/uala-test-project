const constants = {
    SORT_COLORS: "SORT_COLORS",
    ADD_COLOR: "ADD_COLOR",
    RATE_COLOR: "RATE_COLOR",
    REMOVE_COLOR: "REMOVE_COLOR"
}

const color = (state = {}, action) => {
    switch (action.type) {
        case constants.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            }
        case constants.RATE_COLOR:
            return (state.id !== action.id) ?
            state : 
            {
                ...state,
                rating: action.rating
            }
        default:
            return state
    }
}

describe("color reducer", () => 
    {
        it("ADD_COLOR success", () => {
            const state = {}
            const action = {
                type: constants.ADD_COLOR,
                id: 0,
                title: "TEST ADD COLOR",
                color: '#550066',
                timestamp: new Date().toString()
            }
            const results = color(state, action)
            expect(results)
                .toEqual({
                    id: 0,
                    title: "TEST ADD COLOR",
                    color: '#550066',
                    timestamp: action.timestamp,
                    rating: 0
                })
        })

    }   
)
