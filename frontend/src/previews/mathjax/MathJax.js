// https://medium.com/@roopamg777/render-mathematical-equations-latex-using-mathjax-and-react-hooks-e69e36523fff

import React, { useEffect } from 'react';

function MathJax(props) {
  let node = React.createRef();
  useEffect(() => {
    renderMath();
  });
  const renderMath = () => {
    window.MathJax.Hub.Queue([
      "Typeset",
      window.MathJax.Hub,
      node.current
    ]);
  }
  return (
      <div ref={node}>
        { props.children }
      </div>
  );
}

export default MathJax;

