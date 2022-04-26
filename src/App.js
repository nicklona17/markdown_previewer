import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { marked } from 'marked';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: `# Header

## Sub Header

[YouTube](https://www.youtube.com)

\`<title>Markdown Previewer</title>\`

    <html>
      <head>
      </head>
    </html>

- This
- is
- a
- List

> I made a markdown previewer.

![freeCodeCamp Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DXmkUBKMV2TSteYbUzExv4IriEc-E1Xq9OaPlXo2oApzFkQJyJx3Q1_tF6tZXVNN9ms&usqp=CAU)

**bold text**
`
    }
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    const editorStyle = {
      width: "400px",
      height: "100vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    }

    const previewStyle = {
      width: "400px",
      height: "100vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    }

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="rounded-pill bg-dark text-align-center">
                Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <div className="col text-center">
                <h4>
                  <Badge className="rounded-pill bg-dark text-align-center">
                    Editor
                  </Badge>
                </h4>
              </div>
              <div className="mark-input" style={editorStyle}>
              <textarea id="editor" className="input" style={editorStyle} value={this.state.markdown} onChange={(e) => {this.updateMarkdown(e.target.value)}}></textarea>
              </div>
            </div>
            
            <div className="col">
              <div className="col text-center">
                <h4>
                  <Badge className="rounded-pill bg-dark text-align-center">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div id="preview" style={previewStyle} dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown)
                }}>
              </div>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}
