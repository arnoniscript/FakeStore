import './styles.css'

const HomeCategories = () => {
    return( 
        <body>
        <div className="principalwhite">
           <h1> Categories </h1>
            <h2> Find what you are looking for </h2>
            <br></br>
            <div className='flex-container'>
            <figure className="flex-container-item"> 
    <img src='03.jpg'></img>
    <div className='itemname'>Natural plants</div>
<div className='itemprice'> </div></figure>
<figure className='flex-container-item'>
    <img src='03.jpg'></img><div className='itemname'>Plant acessories</div>
<div className='itemprice'>Horem ipsum dolor sit amet, consectetur adipiscing elit.</div></figure>
    <figure className='flex-container-item'><img src='03.jpg'></img>
    <div className='itemname'>Artificial Plants</div>
<div className='itemprice'> </div></figure></div>

            </div>
<div>

</div>
</body>
    )
}

export default HomeCategories;