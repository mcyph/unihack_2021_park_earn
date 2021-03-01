import SpectreCSSIcon from "../../controls/icons/SpectreCSSIcon";
import FontAwesomeIcon from "../../controls/icons/FontAwesomeIcon";

let Icons=()=>{
  return <>
    <h2>Icons</h2>
    <h3>Spectre CSS Icons</h3>
    <SpectreCSSIcon icon={ SpectreCSSIcon.ACTION.SEARCH }
                    size={ SpectreCSSIcon.SIZE.TIMES_4 } />
    <hr/>

    <h3>FontAwesome CSS Icons</h3>
    <FontAwesomeIcon iconSet={ FontAwesomeIcon.SOLID }
                     icon="copy"
                     size={ FontAwesomeIcon.SIZE.TIMES_4 } />
  </>;
}

export default Icons;
