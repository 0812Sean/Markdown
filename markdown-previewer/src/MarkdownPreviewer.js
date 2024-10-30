import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState('');

    const defaultMarkdown = `
# Heading 1
## Heading 2
[Link](https://www.freecodecamp.org)
Inline \`code\`
\`\`\`
function helloWorld() {
    console.log("Hello, World!");
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold Text**
    `;

    // Configure marked to interpret newlines as <br> elements
    marked.setOptions({
        breaks: true,  // Enable the line break feature
    });

    useEffect(() => {
        setMarkdown(defaultMarkdown);
    }, [defaultMarkdown]);    

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div className="container">
            <h1>Markdown Previewer</h1>
            <div className="row">
                <div className="col-md-6">
                    <h2>Editor</h2>
                    <textarea
                        id="editor"
                        value={markdown}
                        onChange={handleChange}
                        rows="20"
                        className="form-control"
                    />
                </div>
                <div className="col-md-6">
                    <h2>Preview</h2>
                    <div
                        id="preview"
                        className="border p-3"
                        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MarkdownPreviewer;
