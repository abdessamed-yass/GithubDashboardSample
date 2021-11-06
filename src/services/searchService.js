import axios from 'axios'

// autocomplete for searching user
async function searchUser(login, setState, openOverlay) {
    axios
        .request({
            method: 'get',
            url: `https://api.github.com/search/users?q=${login}`,
        })
        .then((response) => {
            if (response.data.total_count == 0) {
                // no result for login
                setState({
                    emptyModal: true
                });
            }
            else {
                setState({
                    searchResults: response.data.items,
                    isShowingResults: true,
                });
            }
        })
        .catch((e) => {
            // limite de request depassé 
            setState({ errorModal: true })
            console.log(e.response.data.message);
        });
};

async function getRepos(page, username, state, setState, openOverlay) {
    setState({ isFetching: true, userFound: false });
    axios.request({
        method: 'get',
        url: `https://api.github.com/users/${username}/repos?page=${page}&per_page=50`,
    })
        .then((response) => {
            if (response.data.length <= 0) {
                //we already got data of last page
                setState({ hasMoreResult: false })
            }
            if (response.data.total_count == 0) {
                setState({
                    emptyModal: true,
                    isFetching: false
                });
            }
            else {
                const nextPage = page + 1;
                setState({
                    page: nextPage,
                    data: [...state.data, ...response.data],
                    isFetching: false,
                });
            }
        })
        .catch((e) => {
            setState({ errorModal: true, isFetching: false })
            console.log(e.response);
        });

}

export default {
    searchUser,
    getRepos

}