import "./MostPopular.css";
import { SectionWrapper, SectionHeader, Card } from "../../components/index";
import MostpopularData from "./../../Data/MostpopularData";

const MostPopular = () => {

    return (
        <SectionWrapper>
            <SectionHeader>
                Most Popular
                <em>Right Now</em>
            </SectionHeader>
            <div className="most-popular-items">
                {MostpopularData.map((item) => {
                    return (
                        <Card key={item.id} img={item.img} title={item.title} category={item.category} star={item.star} download={item.download} />
                    )
                })}
            </div>
        </SectionWrapper>
    );
};

export default MostPopular;
