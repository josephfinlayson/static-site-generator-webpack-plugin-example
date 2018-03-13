import footer from './components/Footer/Footer.js'
import header from './components/Header/Header.js'
import Home from './pages/Home/Home'
import Landing from './pages/Landing/Home'

/* Exported static site renderer */
export default function render(locals, callback) {
  return {
    '/footer-component': footer(),
    '/header-component': header(),
    '/': Home({}, callback),
    '/landing': Landing({}, callback)

  }

}