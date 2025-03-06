export const Header = () => {
  const header = document.createElement('header')

  // Contenedor del logo
  const logoContainer = document.createElement('div')
  logoContainer.classList.add('logo')

  // Imagen del logo
  const logo = document.createElement('img')
  logo.src = './Pinterest-logo.png' // CORRECCIÓN: Ruta corregida
  logo.alt = 'Pinterest'
  logoContainer.appendChild(logo)

  // Botón del menú hamburguesa (visible solo en móviles)
  const menuToggle = document.createElement('button')
  menuToggle.classList.add('menu-toggle')
  menuToggle.innerHTML = '☰' // Icono del menú

  // Navegación principal
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  ul.classList.add('nav-list')

  const navItems = ['Inicio', 'Explorar', 'Crear']

  navItems.forEach((item) => {
    const li = document.createElement('li')
    li.classList.add('nav-item')
    const a = document.createElement('a')
    a.href = '#'
    a.textContent = item
    li.appendChild(a)
    ul.appendChild(li)
  })

  nav.appendChild(ul)

  // Barra de búsqueda
  const searchBar = document.createElement('div')
  searchBar.classList.add('search-bar')

  const input = document.createElement('input')
  input.type = 'text'
  input.placeholder = 'Buscar imágenes...'
  input.id = 'searchInput'

  const button = document.createElement('button')
  button.id = 'searchBtn'
  button.textContent = 'Buscar'

  searchBar.appendChild(input)
  searchBar.appendChild(button)

  // Evento para abrir/cerrar el menú hamburguesa en móviles
  menuToggle.addEventListener('click', () => {
    ul.classList.toggle('show')
  })

  // Añadir elementos al header
  header.appendChild(logoContainer)
  header.appendChild(menuToggle)
  header.appendChild(nav)
  header.appendChild(searchBar)

  return header
}
