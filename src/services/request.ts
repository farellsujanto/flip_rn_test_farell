export async function getRequest(url: string) {
    try {
        const data = await fetch(url);
        return data;
    } catch(e) {
        // Handle error
        console.log(e);
    }
    
}