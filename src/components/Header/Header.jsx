// Images/GIF Imports
import  shoppingImgGIF  from '../../assets/shopping_cart.gif'

// CSS Imports
import './Header.css'



function Header(){
    return(
        <div className='header-wrapper'>

            <h1 className='header-text'>
                Quick ShopList
            </h1>

            <div className='header-image-wrapper'>
                <img
                    className='header-img' 
                    src={shoppingImgGIF} 
                />
            </div>
    
        </div>
    );
}

export default Header;