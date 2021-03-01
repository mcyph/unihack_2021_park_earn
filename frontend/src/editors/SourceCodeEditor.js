/**
This file is licensed under the MIT license

Copyright (c) 2021 David Morrissey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

// OPEN ISSUE: Replace this with codemirror,
// so as to use same dependency as markdown editor??

import { Component } from "react";
import { UnControlled as CodeMirror } from 'react-codemirror2'

require("codemirror/mode/xml/xml");
require("codemirror/mode/css/css");
require("codemirror/mode/dart/dart");
require("codemirror/mode/go/go");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/python/python");
require("codemirror/mode/jinja2/jinja2");
require("codemirror/mode/markdown/markdown");
require("codemirror/mode/php/php");
require("codemirror/mode/perl/perl");
require("codemirror/mode/sql/sql");
require("codemirror/mode/ruby/ruby");
require("codemirror/mode/jsx/jsx");
require("codemirror/mode/dockerfile/dockerfile");
require("codemirror/mode/shell/shell");

class SourceCodeEditor extends Component {
  /**
   *
   * @param language
   * @param value
   * @param onChange
   */

  constructor({ language, value, onChange }) {
    super({ language, value, onChange });
  }

  render() {
    return <>
      <CodeMirror
        value={ this.props.value }
        options={{
          mode: this.props.language,
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {
          if (this.props.onChange) {
            this.props.onChange(value, data, editor);
          }
        }}
      />
    </>;
  }
}

export default SourceCodeEditor;
