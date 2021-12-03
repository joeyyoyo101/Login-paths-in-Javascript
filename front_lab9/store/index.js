export default {
    state: () => ({
        StateDialog: false
    }),
    mutations: {
        setStateDialog(state, payload) {
            state.StateDialog = payload
        }
    }
}