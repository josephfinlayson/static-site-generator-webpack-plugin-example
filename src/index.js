import footer from './components/Footer/Footer.js'
import header from './components/Header/Header.js'


/* Exported static site renderer */
export default function render(locals) {
  return {
    '/footer': footer(),
    '/header': header()
  }

}