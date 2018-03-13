import styles from './Home.css'
import html from './Home.html'

import {injectExpressions} from '../../utils'
import header from '../../components/Header/Header'

export default (_locals, callback) => injectExpressions(html, {styles: styles, header: header()}, callback)
