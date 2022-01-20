const BASE_URL = "http://localhost:3000";
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
  const respose = await fetch(url, options);
  const data = await respose.json();
  return data;
}

const api = {
  teams: {
    list() {
      return callApi("/teams");
    },
    create(team) {
      return callApi(`/teams`, {
        method: "POST",
        body: JSON.stringify(team),
      });
    },
    read(teamId) {
      return callApi(`/badges/${teamId}`);
    },
    update(teamId, updates) {
      return callApi(`/teams/${teamId}`, {
        method: "PUT",
        body: JSON.stringify(updates),
      });
    },
    remove(teamId) {
      return callApi(`/teams/${teamId}`, {
        method: "Delete",
      });
    },
  },
};
