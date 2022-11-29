import fs from 'fs';

export function getAllPlacesIds() {
  const places = fs.readFileSync('travelguide.json')
  const data = JSON.parse(places)
  
  return data.map((place) => {
    return {
      params: {
        id: place.id
      }
    }
  })
}

export function getPlaceData(id) {
  const places = fs.readFileSync('travelguide.json')
  const data = JSON.parse(places)

  const place = data.find(place => place.id === id)

  // Combine the data with the id
  return {
    id,
    ...place,
  };
}

export function getImagesPaths(id) {
  const images = {}
  const imageDirectory = `public/images/${id}`
  const imagepaths = fs.readdirSync(imageDirectory, (err, files) => {
    if (err) {
      console.log('Unable to get image' + err)
    }
    
    return files
  })
  imagepaths.forEach(file => {
    images[file] = `images/${id}/${file}`
  });

  return images
}