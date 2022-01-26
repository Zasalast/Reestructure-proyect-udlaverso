const BASE_URL = "https://udlaverso.herokuapp.com";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
    Math.floor(Math.random() * (min - max + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
    delay(randomNumber(min, max));
async function callApi(endpoint, options = {}) {
    await simulateNetworkLatency();
    options.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };
    const url = BASE_URL + endpoint;
    console.log(url, "url api2");
    const respose = await fetch(url, options);
    const data = await respose.json();
    return data;
}

const api = {
    users: {
        list() {
            return callApi("/users");
        },
        create(team) {
            return callApi(`/users`, {
                method: "POST",
                body: JSON.stringify(team),
            });
        },
        read(teamId) {
            return callApi(`/users/${teamId}`);
        },
        update(teamId, updates) {
            return callApi(`/users/${teamId}`, {
                method: "PUT",
                body: JSON.stringify(updates),
            });
        },
        /* remove(teamId) {
            return callApi(`/users/${teamId}`, {
                method: "Delete",
            });
        }, */
    },
};
