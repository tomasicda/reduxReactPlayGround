
const getRepos = (dispatch, query) => {
    //this is not really best way of doing an ajax call. Usally the middle way path is  better with asychronous calls, more on that later 
    fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log('do we have data? ', data);
            dispatch({ type: 'SET_REPOS', repos: data.items })
        });
}

export default {
    getRepos
}