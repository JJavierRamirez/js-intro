const getImagen = async()=>{

    try {
        const apiKey = '1NPZFzz8l6KfEqT6dqJfN8O9DLZxXYTA';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getImagen();
