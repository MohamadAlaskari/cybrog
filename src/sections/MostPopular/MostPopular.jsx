import "./MostPopular.css";
import { Card } from "../../components/index";
import popular_01 from "../../assets/images/popular_01.jpg"
import popular_02 from "../../assets/images/popular_02.jpg"
import popular_03 from "../../assets/images/popular_03.jpg"
import popular_04 from "../../assets/images/popular_04.jpg"
import popular_05 from "../../assets/images/popular_05.jpg"
import popular_06 from "../../assets/images/popular_06.jpg"
import popular_07 from "../../assets/images/popular_07.jpg"
import popular_08 from "../../assets/images/popular_08.jpg"



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
                <Card img={popular_02} title="Dota2" category="StreamX" star="4" download="2.3M" />
                <Card img={popular_03} title="Pubge" category="Battle s" star="4.3" download="3.4M" />
                <Card img={popular_04} title="Pubge mobile" category="Battle" star="4.3" download="3.4M" />
                <Card img={popular_05} title="Pubge mobile" category="Battle" star="4.3" download="3.4M" />
                <Card img={popular_06} title="Pubge mobile" category="Battle" star="4.3" download="3.4M" />
                <Card img={popular_07} title="Pubge mobile" category="Battle" star="4.3" download="3.4M" />
                <Card img={popular_08} title="Pubge mobile" category="Battle" star="4.3" download="3.4M" />
               









            </div>
        </div>
    );
};

export default MostPopular;
