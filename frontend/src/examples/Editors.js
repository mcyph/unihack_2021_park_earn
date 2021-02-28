//import CommentEditor from "../editors/CommentEditor";
import MarkdownEditor from "../editors/MarkdownEditor";
import SourceCodeEditor from "../editors/SourceCodeEditor";

function Editors() {
  return <>
    <h2>Editors</h2>
    <h3>Markdown Editor</h3>
    <p>
      <MarkdownEditor></MarkdownEditor>
    </p>
    <hr/>

    <h3>Source Code Editor</h3>
    <p>
      <SourceCodeEditor></SourceCodeEditor>
    </p>
  </>;
}

export default Editors;
