import ComparisonSlider from "../../controls/images/ComparisonSlider";
import Parallax from "../../controls/images/Parallax";

let Images=()=>{
  return <>
    <h3>Image Comparison Slider</h3>
    <p>
      <ComparisonSlider beforeImgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/" +
                                      "Oryctolagus_cuniculus_Rcdo.jpg/220px-Oryctolagus_cuniculus_Rcdo.jpg"}
                        afterImgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/" +
                                     "Oryctolagus_cuniculus_Rcdo.jpg/220px-Oryctolagus_cuniculus_Rcdo.jpg"} />
    </p>
    <hr/>

    <h3>Image Parallax</h3>
    <Parallax src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/" +
                   "Oryctolagus_cuniculus_Rcdo.jpg/220px-Oryctolagus_cuniculus_Rcdo.jpg"}
              title="image title" />
  </>;
}

export default Images;
