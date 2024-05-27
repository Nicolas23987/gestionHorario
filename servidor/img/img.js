const ACCESS_KEY = 'TU_ACCESS_KEY';
const API_URL = 'https://api.unsplash.com/photos/random?query=abstract&client_id=UIhHNo8gcBWE7ixQtd-drvEQ140j_FvdtKkC_uZnffM';
export const IMG = ()=> { 
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.urls.regular;
        console.log(imageUrl); // Aquí tendrás la URL de la imagen aleatoria
        return imageUrl
    })
      .catch(error => console.error('Error fetching image:', error));
      
}

// function export = IMG
