//import CommentEditor from "../editors/CommentEditor";
import MarkdownEditor from "../editors/MarkdownEditor";
import SourceCodeEditor from "../editors/SourceCodeEditor";

let Editors=()=>{
  return <>
    <h2>Editors</h2>
    <h3>Markdown Editor</h3>
    <p>
      <MarkdownEditor></MarkdownEditor>
    </p>
    <hr/>

    <h3>Source Code Editor</h3>
    <p>
      <SourceCodeEditor language="python"
                        value="import this" />
    </p>
  </>;
}

export default Editors;
