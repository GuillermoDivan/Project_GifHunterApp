export const getGifs = async(category) => {
    const url=`https://api.giphy.com/v1/gifs/search?api_key=pxhct74u9Oq1QvOK3Z6IfHTJ5O6bsfQ7&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
  
    return gifs;
  }