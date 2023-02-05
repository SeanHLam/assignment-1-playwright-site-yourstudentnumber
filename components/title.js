

export default function TitleText({
    text = "Title Text"
}) {
    
  return (
    <div className="titleCont">
        <hr className="titleDivider"></hr>
          <h1 className="titleText">{text}</h1>
        <hr className="titleDivider"></hr>
    </div>
  )
}
