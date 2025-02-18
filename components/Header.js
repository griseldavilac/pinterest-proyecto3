export const Header = () => {
  const header = document.createElement('header')

  // Contenedor del logo
  const logoContainer = document.createElement('div')
  logoContainer.classList.add('logo')

  // Imagen del logo
  const logo = document.createElement('img')
  logo.src = '/assets/pinterest-logo.png' // Ruta original
  logo.alt = 'Pinterest'
  logoContainer.appendChild(logo)

  // Navegación
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  ul.classList.add('nav-list') // MODIFICACION 1: Añadir clase para responsividad
  const navItems = ['Inicio', 'Explorar', 'Crear']

  navItems.forEach((item) => {
    const li = document.createElement('li')
    li.classList.add('nav-item') // MODIFICACION 2: Clases para mejorar el responsive
    const a = document.createElement('a')
    a.href = '#'
    a.textContent = item
    if (item === 'Inicio') {
      a.classList.add('active')
    }
    li.appendChild(a)
    ul.appendChild(li)
  })
  nav.appendChild(ul)

  // Barra de búsqueda con ajuste responsivo
  const searchBar = document.createElement('div')
  searchBar.classList.add('search-bar')

  const input = document.createElement('input')
  input.type = 'text'
  input.placeholder = 'Buscar imágenes...'
  input.id = 'searchInput'
  input.classList.add('search-input') // MODIFICACION 3: Clases para responsividad

  const button = document.createElement('button')
  button.id = 'searchBtn'
  button.textContent = 'Buscar'
  button.classList.add('search-button') // MODIFICACION 4: Ajustes para mejor UX

  searchBar.appendChild(input)
  searchBar.appendChild(button)

  header.appendChild(logoContainer)
  header.appendChild(nav)
  header.appendChild(searchBar)

  return header
}
