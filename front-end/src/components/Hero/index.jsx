import styles from "./index.module.scss"
const Hero = () => {
    return (
        <>
            <div className={`${styles.hero}`}>
                <div className="container">
                    <div className={` ${styles.textContent}`}>
                        <h1>Shop With Us</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.
                        </p>
                        <div><button>Shop Now</button><button>club memberships</button></div></div></div>
            </div>
        </>
    )
}

export default Hero
