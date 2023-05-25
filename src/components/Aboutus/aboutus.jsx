import './styles.css'
import { RiPlantLine } from 'react-icons/ri';
import { FiBox, FiPhoneOutgoing } from 'react-icons/fi';
const Aboutus = () => {
    return(
        <div className="principal">
            <h1> About us </h1>
            <h2> Order now and apreciate the beauty of nature </h2>
            <div className='services'>
            
                <div className='firstservice'>
                <icon>  <RiPlantLine /></icon>
                <h1>Large Assorment</h1>
                <h2> We offer many different types of products with fewer variations in each category</h2>
                </div>

             
                <div className='secondservice'>  
                <icon>  <FiBox /></icon>
                 <h1>Large Assorment</h1>  <h2> We offer many different types of products with fewer variations in each category</h2></div>
                <div className='thirdservice'>  
                <icon>  <FiPhoneOutgoing /></icon>
                 <h1>Large Assorment</h1>  <h2> We offer many different types of products with fewer variations in each category</h2></div>
            </div>

           
        </div>
    )
}

export default Aboutus