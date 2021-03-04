import SpectreCSSIcon from "../../controls/icons/SpectreCSSIcon";
import FontAwesomeIcon from "../../controls/icons/FontAwesomeIcon";

let Icons=()=>{
  let spectreIcons = [];
  for (let k in SpectreCSSIcon.NAVIGATION) {
    spectreIcons.push(
        <SpectreCSSIcon icon={SpectreCSSIcon.NAVIGATION[k]}
                        size={SpectreCSSIcon.SIZE.TIMES_4}/>
    )
  }
  for (let k in SpectreCSSIcon.ACTION) {
    spectreIcons.push(
        <SpectreCSSIcon icon={SpectreCSSIcon.ACTION[k]}
                        size={SpectreCSSIcon.SIZE.TIMES_4}/>
    )
  }
  for (let k in SpectreCSSIcon.OBJECT) {
    spectreIcons.push(
        <SpectreCSSIcon icon={SpectreCSSIcon.OBJECT[k]}
                        size={SpectreCSSIcon.SIZE.TIMES_4}/>
    )
  }

  return <>
    <h2>Icons</h2>
    <h3>Spectre CSS Icons</h3>
    { spectreIcons }
    <hr/>

    <h3>FontAwesome CSS Icons</h3>
    <FontAwesomeIcon iconSet={ FontAwesomeIcon.SOLID }
                     icon="copy"
                     size={ FontAwesomeIcon.SIZE.TIMES_4 } />
  </>;
}

export default Icons;
