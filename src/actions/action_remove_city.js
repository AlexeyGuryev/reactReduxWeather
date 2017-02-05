export const REMOVE_CITY = 'REMOVE_CITY'; 

export default function removeCity(city) {
    return {
        type: REMOVE_CITY,
        payload: city
    };
}