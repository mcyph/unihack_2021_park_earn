import CommentEditor from "../editors/CommentEditor";
import MarkdownEditor from "../editors/MarkdownEditor";
import SourceCodeEditor from "../editors/SourceCodeEditor";

function editors() {
  return <>
    <CommentEditor></CommentEditor>
    <MarkdownEditor></MarkdownEditor>
    <SourceCodeEditor></SourceCodeEditor>
  </>;
}

export default editors;
