import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer(){
  return(
      <footer className={styles.footer}>
        <Link to='/'><img src="Diflix.png" width="100" alt="logo Di flix" /></Link>
        <div>
          <p>Desenvolvido por <a href="https://www.linkedin.com/feed/">Diego oliveira</a> &copy;2023 Alguns direitos reservados</p>
        </div>
      </footer>
    )
}

export default Footer;