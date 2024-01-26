import './footer.css'

const Footer = () => {
    return (
      <div className='main-footer'>
        <ul>
          <li>
            <img src="./images/twitter.png" />
          </li>
          <li>
            <img src="./images/facebook.png" />
          </li>
          <li>
            <img src="./images/instagram.png" />
          </li>
        </ul>

        <img src="./images/logo.svg" className='logo-image' />

        <h3>Desenvolvido por Miderson Camargo</h3>
      </div>
    );
}

export default Footer