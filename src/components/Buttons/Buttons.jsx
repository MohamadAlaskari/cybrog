import './Buttons.css'

const PrimaryButton = (props) => {
  return (
    <>
      <div className="button primary-button">

        <a href="/#" target="_blank">{props.children}</a>
      </div>
    </>
  )
}

const SecondaryButton = (props) => {
  return (
    <>
      <div className="button secondary-button">
        <a href="/#" target="_blank">{props.children}</a>

      </div>    </>
  )
}


export default PrimaryButton
export { SecondaryButton }