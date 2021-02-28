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
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';

class SourceCodeDisplay extends Component {
  constructor({ width, height, language, code }) {
    super({ width, height, language, code });
  }

  render() {
    return (
      <MonacoEditor
        width={ this.props.width || 800 }
        height={ this.props.height || 600 }
        language={ this.props.language || "javascript" }
        theme={ true ? "vs-dark" : "vs-light" }
        value={ this.props.code }
        options={{
          selectOnLineNumbers: true
        }}
        onChange={ this.onChange.bind(this) }
        editorDidMount={ this.editorDidMount.bind(this) }
      />
    );
  }

  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
}

export default SourceCodeDisplay;
