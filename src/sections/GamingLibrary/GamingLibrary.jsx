import "./GamingLibrary.css";
import { SectionWrapper, SectionHeader, GamingLipraryCard } from "../../components/index";
import GamingLipraryData from "../../Data/GamingLipraryData";

const GamingLibrary = (props) => {
    return (
        <SectionWrapper>
            <SectionHeader>
                Your Gaming
                <em>Library</em>
            </SectionHeader>
            <div className="gaming-liprary-cards">
                {GamingLipraryData.map((item) => {
                    return (
                        <GamingLipraryCard
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            category={item.category}
                            date_added={item.date_added}
                            hours_played={item.hours_played}
                            download={item.download}
                        />
                    );
                })}
            </div>
        </SectionWrapper>
    );
};

export default GamingLibrary;
