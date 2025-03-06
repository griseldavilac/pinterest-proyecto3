import { Header } from './components/Header.js'
import { Gallery } from './components/Gallery.js'

// Añadir el Header al principio del body
document.body.prepend(Header())

// URL de la API de Unsplash
const API_URL =
  'https://api.unsplash.com/search/photos?client_id=J89-V7DBHP5ouPccGkIGUpJGPVxMzR1myx-Rh9JPmpU'

const galleryContainer = document.getElementById('gallery')
let currentPage = 1
let loading = false

// Función para obtener imágenes
async function fetchImages(query = 'nature', page = 1, perPage = 50) {
  try {
    const response = await fetch(
      `${API_URL}&query=${query}&per_page=${perPage}&page=${page}`
    )
    if (!response.ok) throw new Error('Error al obtener las imágenes')

    const data = await response.json()

    if (data.results.length === 0 && query !== 'gatos') {
      alert(
        `No se encontraron resultados para "${query}". Mostrando resultados para "gatos".`
      )
      fetchImages('gatos', 1, perPage)
    } else {
      galleryContainer.appendChild(Gallery(data.results))
    }
  } catch (error) {
    console.error('Error al obtener las imágenes:', error)
  }
}

// Cargar imágenes al iniciar
fetchImages('nature', currentPage, 50)

// Scroll infinito
window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.scrollHeight - 100 &&
    !loading
  ) {
    loading = true
    currentPage++
    fetchImages('nature', currentPage, 20).then(() => {
      loading = false
    })
  }
})

// Búsqueda
const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')

function performSearch() {
  const query = searchInput.value.trim()
  if (query) {
    galleryContainer.innerHTML = ''
    currentPage = 1
    fetchImages(query, currentPage, 50)
    searchInput.value = ''
  }
}

searchBtn.addEventListener('click', performSearch)
searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    performSearch()
  }
})

// Click en el logo para reiniciar
const logo = document.querySelector('.logo img')
logo.addEventListener('click', () => {
  galleryContainer.innerHTML = ''
  currentPage = 1
  fetchImages('nature', currentPage, 50)
})
