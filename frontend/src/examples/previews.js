import MarkdownContent from "../previews/MarkdownContent";
import MediaURLPlayer from "../previews/MediaURLPlayer";
import SourceCodeDisplay from "../previews/SourceCodeDisplay";
import WikiPreview from "../previews/WikiPreview";

function previews() {
  return <>
    <MarkdownContent>
      *Markdown content* works **inline**!
    </MarkdownContent>
    <SourceCodeDisplay language="python"
                       code="print('Hello World!')"/>
  </>;
}

export default previews;
