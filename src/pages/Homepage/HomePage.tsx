import { FC } from "react"
import Button from "../../components/Button/Button"
import "./Homepage.css";
import img from "../../assets/vector2.png"
import { Link } from "react-router-dom";
const HomePage: FC = () => {
    return (
        <main className="homepage">
            <div className="homepage__main">
                <div className="homepage_main--text">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius laudantium error exercitationem animi soluta.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatibus corrupti illo suscipit eos officia minus et rem repellendus architecto!</p>
                </div>
                <div className="homepage__main--btn">
                    <Button>
                        <Link to="/addQuote">
                            Add a quote
                        </Link>
                    </Button>
                    <Button>see recent quote</Button>
                </div>


            </div>
            <div className="homepage__background">
                <img src={img} />
            </div>
        </main>
    )
}
export default HomePage