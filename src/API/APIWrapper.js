import axios from 'axios';

export function testAPIModules() {
    getDriverRaces()
}

export async function getRacersList(page) {
    const result = await axios.get(`/drivers.json?limit=30&offset=${(page - 1) * 30}`);

    return result;
}

export async function getDriverRaces(id) {
    const result = await axios.get(`/drivers/${id}/results.json`);

    return result;
}