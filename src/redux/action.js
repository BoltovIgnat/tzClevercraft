export function testAction (payload) {
    return {
        type: 'TEST_REDUCE/TEST_SAGA',
        payload: payload
        
    }
}

export function testSyncAction (payload) {
    return {
        type: 'TEST_REDUCE/TEST_REDUX',
        payload: payload
        
    }
}
