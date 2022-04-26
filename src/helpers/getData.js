

export const getData = async () => {
    const url = 'https://gitlab.com/-/snippets/2041384/raw/master/data.json'
    let response = await fetch(url)
    response = await response.json()
    
    return response;
}

