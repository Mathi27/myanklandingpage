import gopal from '../assets/gopals.png';
function Home(){
    return(
        <div className="home-container">
        <p className="intro-text">
          Gear up for the future! 🚀 Currently in R&D mode, crafting the coolest innovations for our next big adventure. Stay tuned, the hype is real.
        </p>
        <img className="founders-image" src={gopal} alt='Founders' />
      </div>
    )
}

export default Home;