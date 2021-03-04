import { Component } from "react";
import Prism from "prismjs";
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-handlebars.min.js'
import 'prismjs/components/prism-lua.min.js'
import 'prismjs/components/prism-c.min.js'
import 'prismjs/components/prism-cpp.min.js'
import 'prismjs/components/prism-ruby.min.js'
import 'prismjs/components/prism-java.min.js'
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-bash.min.js'
import 'prismjs/components/prism-csharp.min.js'
import 'prismjs/components/prism-css.min.js'
import 'prismjs/components/prism-typescript.min.js'
import 'prismjs/components/prism-yaml.min.js'
import 'prismjs/components/prism-json.min.js'
import 'prismjs/components/prism-swift.min.js'
import 'prismjs/components/prism-jsx.min.js'
import 'prismjs/components/prism-dart.min.js'
import 'prismjs/components/prism-sql.min.js'
import 'prismjs/components/prism-rust.min.js'
import 'prismjs/components/prism-php.min.js'
import 'prismjs/components/prism-perl.min.js'
import 'prismjs/components/prism-go.min.js'
import 'prismjs/components/prism-docker.min.js'
import 'prismjs/components/prism-python.min.js'

// Adapted from
// https://betterstack.dev/blog/code-highlighting-in-react-using-prismjs/

export class SourceCodeDisplay extends Component {
  /**
   *
   * @param code
   * @param plugins
   * @param language
   */
  constructor({ code, plugins, language, theme, style }) {
    if (plugins == null) {
      plugins = ["line-numbers", "show-language"];
    }
    super({ code, plugins, language, theme, style })
  }

  render() {
    // TODO: Support theme!!!
    return <>
      <pre className={ this.props.plugins ? this.props.plugins.join(" ") : "" }
           style={ this.props.style }>
        <code ref={el => {this.el = el;}}
              className={ "language-" + this.props.language }>
          { this.props.code.trim() }
        </code>
      </pre>
    </>;
  }

  componentDidMount() {
    if (this.el) {
      Prism.highlightElement(this.el)
    }
  }

  componentDidUpdate() {
    if (this.el) {
      Prism.highlightElement(this.el)
    }
  }
}

export default SourceCodeDisplay;
