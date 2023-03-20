import "./MostPopular.css";
import { SectionWrapper, SectionHeader, Card } from "../../components/index";

import popular_01 from "../../assets/images/popular_01.jpg"
import popular_02 from "../../assets/images/popular_02.jpg"
import popular_03 from "../../assets/images/popular_03.jpg"
import popular_04 from "../../assets/images/popular_04.jpg"
import popular_05 from "../../assets/images/popular_05.jpg"
import popular_06 from "../../assets/images/popular_06.jpg"
import popular_07 from "../../assets/images/popular_07.jpg"
import popular_08 from "../../assets/images/popular_08.jpg"
//import icons



const MostPopular = () => {
    return (
        <SectionWrapper>
            <SectionHeader>
                Most Popular
                <em>Right Now</em>
            </SectionHeader>

            <div className="most-popular-items">
                <Card img={popular_01} title="Fortnite" category="Sandbox" star="4.5" download="1M" />
                <Card img={popular_02} title="Dota2" category="StreamX" star="4.7" download="2.3M" />
                <Card img={popular_03} title="Pubge" category="Battle s" star="4.3" download="3.4M" />
                <Card img={popular_04} title="Wareface" category="Max 3D" star="4.8" download="2.3M" />
                <Card img={popular_05} title="Eagles Fly" category="Matrix Games" star="3.2" download="1.4M" />
                <Card img={popular_06} title="Gamezer" category="Battle" star="4.3" download="3.4M" />
                <Card img={popular_07} title="Pug G" category="Battle Royals" star="3.1" download="2.2M" />
                <Card img={popular_08} title="Mini Craft" category="Legendary" star="4.8" download="2M" />










            </div>
        </SectionWrapper>
    );
};

export default MostPopular;
