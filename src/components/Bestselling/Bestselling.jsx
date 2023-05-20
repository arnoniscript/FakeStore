import './styles.css'
import { BsArrowRight } from 'react-icons/bs';

const Bestselling = () => {
    return( 
      <body className='containerbody'>      <div className='Bestselling'> <p>
Best Selling Plants</p>

<div className="description"> <p>Easiest way to healthy life by buying your favorite plants </p></div>
      <button id="mainbutton">See more <BsArrowRight /></button>
      </div>
      <figure className='Showitem'>
        <img src='03.jpg'></img>
<div className='itemname'>Plantinha 01</div>
<div className='itemprice'>R$948,00</div>
      </figure>
      <figure className='Showitem'>
        <img src='03.jpg'></img>
       
<div className='itemname'>Plantinha 02</div>
<div className='itemprice'>R$91,00</div>
      </figure>
      <figure className='Showitem'>
        <img src='03.jpg'></img>
<div className='itemname'>Plantinha 03</div>
<div className='itemprice'>R$9448,00</div>
      </figure>
      
      </body>

      
    )
}

export default Bestselling