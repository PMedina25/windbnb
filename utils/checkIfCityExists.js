export const checkIfCityExists = (data, city) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].city === city) {
            return true;
        }
    }
    return false;
};