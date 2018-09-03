

export const getProducts = () => dispatch => {
    return dispatch({
        type: "getProducts",
        payload: {}
    })
}

export const filterProducts = (size, theme) => dispatch => {
    return dispatch({
        type: "filterProducts",
        payload: {
            size,
            theme
        }
    })
}