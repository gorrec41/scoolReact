function Acordion() {
    console.log("Acordion rendering");
    
    return (
      <div>
            <AcordionTitle />
            <AcordionBody />
      </div>
    )
}
function AcordionTitle() {
    console.log("AcordionTitle rendering");
    
    return (
      <h3>Меню</h3>
    )
}
function AcordionBody() {
    console.log("AcordionBody rendering");
    
    return (

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>

    )
}
export default Acordion