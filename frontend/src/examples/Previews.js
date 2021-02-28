import MarkdownContent from "../previews/MarkdownContent";
import MediaURLPlayer from "../previews/MediaURLPlayer";
import SourceCodeDisplay from "../previews/SourceCodeDisplay";
import WikiPreview from "../previews/WikiPreview";

function previews() {
  return <>
    <h2>Markup Rendering</h2>
    <h3>Markdown Content</h3>
    <MarkdownContent>
      *Markdown content* works **inline**!
    </MarkdownContent>
    <hr/>

    <h3>Source Code Display</h3>
    <SourceCodeDisplay
        language="python"
        code="print('Hello World!')"
    />
  </>;
}

export default previews;
