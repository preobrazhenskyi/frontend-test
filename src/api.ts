
export async function fetchCharacters(page: number): Promise<any[]> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = JSON.stringify({
        query: `{
            characters(page: ${page}) {
                results {
                    name
                    status
                    location {
                        type
                        name
                    }
                }
            }
        }`,
        variables: {}
    });

    const options: RequestInit = {
        method: "POST",
        redirect: "follow",
        headers,
        body,
    };

    const request = await fetch("https://rickandmortyapi.com/graphql/", options);
    const response = await request.json();
    
    return response.data.characters.results;
}
