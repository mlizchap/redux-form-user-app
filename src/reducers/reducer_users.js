

const test = [{ 
    id: 1,
    username: 'jane!!',
    email: 'test@test.com',
    favMovie: 'Toy Story',
    favBook: 'Harry Potter'
}]

let id = 0;
export default function(state = [], action) {
    switch(action.type) {
        case 'CREATE_USER':
            return [...state, {
                id: ++id,
                username: action.payload.username,
                email: action.payload.email,
                favMovie: action.payload.favMovie,
                favBook: action.payload.favBook
            }]
        default: 
            return state;
    }
}