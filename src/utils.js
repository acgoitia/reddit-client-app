async const redditJson = (url) => {

    const response = await fetch(url);
    const data = await response.json();
    return data;

}

export default redditJson