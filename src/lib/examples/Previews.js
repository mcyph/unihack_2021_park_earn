import MarkdownContent from "../previews/MarkdownContent";
import MediaURLPlayer from "../previews/MediaURLPlayer";
import SourceCodeDisplay from "../previews/SourceCodeDisplay";
import WikiPreview from "../previews/WikiPreview";

function Previews() {
  return <>
    <h2>Markup Rendering</h2>
    <h3>Markdown Content</h3>
    <blockquote>
      <MarkdownContent>
        Hello, `world`!!

        *Markdown content* works **inline**!
      </MarkdownContent>
    </blockquote>
    <hr/>

    <h3>Source Code Display</h3>
    <SourceCodeDisplay
        language="python"
        code={ "#!/usr/bin/python3\n\nprint('Hello World!')" }
    />
  </>;
}

export default Previews;
