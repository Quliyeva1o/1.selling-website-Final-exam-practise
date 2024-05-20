import styles from "./index.module.scss"
const Footer = () => {
    return (
        <>
            <div className="container">
                <div className={styles.footer}>
                    <ul><h4>ABOUT US
                    </h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p></ul>
                    <ul>
                        <h4>QUICK LINKS
                        </h4>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Testimonials</li>
                        <li>Contact Us
                        </li>
                    </ul>
                    <ul><h4>Follow Us
                    </h4></ul> <ul><h4>FEATURED PRODUCT
                    </h4><img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" alt="" />
                    <p>Leather Brown Shoe</p></ul>
                </div>
            </div>
        </>
    )
}

export default Footer
