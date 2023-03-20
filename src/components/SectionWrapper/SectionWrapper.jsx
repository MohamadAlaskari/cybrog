import './SectionWrapper.css'

const SectionWrapper = (props) => {
    return (
        <div className="section-wraper">{props.children}</div>
    )
}

export default SectionWrapper