export const fetchData = async () => {
    try {
        const response = (await fetch('https://jsonplaceholder.typicode.com/todos/1'));
        return await response.json();
    } catch (error) {
        throw new error('Failed to fetch data.');
    }
}