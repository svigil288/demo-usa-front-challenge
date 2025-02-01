import axiosClient from "./axiosClient";

const getStates = async () => {
    let url = '/searchLegacy/?limit=100&dimension=Geography&hierarchy=State&q=';
    try {
    const response = await axiosClient.get((url));
    return response.data.results;
    }catch (error) {
    console.log('There was an error with the request:', error.message);
    return Promise.reject(error);
    }
}; 

export default getStates;