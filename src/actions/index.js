export function createUser(values) {
    return {
        type: 'CREATE_USER',
        payload: values
    }
}