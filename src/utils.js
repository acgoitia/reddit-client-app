export const redditJson = async (url) => {

    const response = await fetch(url);
    const data = await response.json();
    return data;

};

export const jsonToTitle = (promise) => {
    const title = promise.then(data => data[0].data.children[0].data.title);
    return title;
}
