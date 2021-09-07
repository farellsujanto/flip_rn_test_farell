// Basic request for GET method
export async function getRequest(url: string) {
    try {
        const data = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        });
        return data.json();
    } catch (e) {
        // TODO: Handle error
        console.log(e);
    }

}