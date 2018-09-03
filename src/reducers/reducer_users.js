let user = 2;

const test = [{ 
    id: 1,
    username: 'jane',
    email: 'test@test.com',
    favMovie: 'Toy Story',
    favBook: 'Harry Potter'
}]

export default function(state = test, action) {
    // console.log(state)
    return state;
    // switch(action.type) {
    //     case 'CREATE_USER':
    //         return [...state, {
    //             id: user++,
    //             username: action.payload.username,
    //             email: action.payload.email,
    //             favMovie: action.payload.movie,
    //             favBook: action.payload.book
    //         }]
        // default: 
    //         return state;
    // }
}