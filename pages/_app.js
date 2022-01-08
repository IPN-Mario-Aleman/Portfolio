import '../styles/globals.css'
import '../components/Header/header.css'
import '../components/HomeScreen/home.css'
import '../components/About/about.css'
import '../components/Skills/skills.css'
import '../components/Portfolio/portfolio.css'
import '../components/Footer/footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCoffee)
library.add(fas)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
