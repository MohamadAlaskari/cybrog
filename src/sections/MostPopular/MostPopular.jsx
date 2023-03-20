import "./MostPopular.css";
import { Card } from "../../components/index";
import popular_01 from "../../assets/images/popular_01.jpg"

const MostPopular = () => {
    return (
        <div className="section-wraper">
            <div className="section-header">
                <h4>
                    Most Popular <em>Right Now</em>
                </h4>
            </div>
            <div className="most-popular-items">
                <Card img={popular_01} title="Fortnite" category="Sandbox" star="4.5" download="1M" />
                <Card img={popular_01} title="Dota2" category="StreamX" star="4" download="2.3M" />
                <Card img={popular_01} title="Pubge" category="Battle s" star="4.3" download="3.4M" />
                <Card img={popular_01} title="Pubge mobile" category="Battle" star="4.3" download="3.4M" />







            </div>
        </div>
    );
};

export default MostPopular;
