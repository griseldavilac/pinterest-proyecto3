export const ImageCard = (imageData) => {
  // Creamos el div principal de la tarjeta
  const card = document.createElement('div')
  card.classList.add('card')

  // Imagen principal
  const img = document.createElement('img')
  img.src = imageData.urls.regular
  img.alt = imageData.alt_description || 'Imagen de Unsplash'
  card.appendChild(img)

  // Contenedor de la info del usuario
  const userInfo = document.createElement('div')
  userInfo.classList.add('user-info')

  // Imagen de perfil del usuario con tamaño uniforme
  const userImg = document.createElement('img')
  userImg.src = imageData.user.profile_image.medium
  userImg.alt = imageData.user.name
  userImg.classList.add('user-img') // Se le da una clase para tamaño uniforme

  userInfo.appendChild(userImg)

  // Nombre del usuario
  const userName = document.createElement('span')
  userName.textContent = imageData.user.name
  userInfo.appendChild(userName)

  card.appendChild(userInfo)

  return card
}
