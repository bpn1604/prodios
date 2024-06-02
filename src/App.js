import React, { useState } from 'react';

import CodeEditor from './components/CodeEditor';

function App() {
  const [code, setCode] = useState("");

  return (
    <div className="App">
      <h3>React code editor and syntax highlighter using PrismJS</h3>

      {/* <div className='window'>
        <div className="title-bar">
          <div className="title-buttons">
            <div className="title-button"></div>
            <div className="title-button"></div>
            <div className="title-button"></div>
          </div>
        </div>
        <div className='editor_wrap'>
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.html, 'html')}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 18
            }}
          />
        </div>
      </div> */}
      <CodeEditor />
    </div>
  );
}

export default App;
