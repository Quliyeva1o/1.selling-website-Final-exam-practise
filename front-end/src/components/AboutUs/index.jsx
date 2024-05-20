import styles from './index.module.scss'
const AboutUs = () => {
  return (
    <>
     <div className="container">
     <div className={styles.aboutUs} >
        <div style={{width:"50%",padding:"50px"}}><img style={{width:"100%"}} src="https://preview.colorlib.com/theme/selling/images/about_1.jpg" alt="" /></div>
        <div>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
            <button>learn more</button>
        </div>
      </div>    
     </div>
    </>
  )
}

export default AboutUs
