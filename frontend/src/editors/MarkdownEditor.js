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

import React, { Component } from "react";
import SimpleMDEReact from "react-simplemde-editor";

class MarkdownEditor extends Component {
  constructor({ toolbar, autoSave, spellCheck, language, readOnly, onChange }) {
    super({ toolbar, autoSave, spellCheck, language, readOnly, onChange });
    this.state = {
      value: localStorage.getItem(`smde_${this.props.id}`) || this.props.value
    };
    // TODO: What does this do???
    this.defaultProps = {
      delay: 1000,
      value: ""
    };
  }

  render() {
    const { options, delay, id, ...rest } = this.props;
    return (
      <SimpleMDEReact
        {...rest}
        id={id}
        value={this.state.value}
        options={{
          autosave: {
            enabled: true,
            uniqueId: id,
            delay
          },
          ...options
        }}
      />
    );
  }
}

export default MarkdownEditor;
