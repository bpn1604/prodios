import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup'; 
import './prism.css';
import './editor.css';

function CodeEditor() {
  const [code, setCode] = useState("<h1>welcome</h1>");

  return (
    <div className="App">
      

      <div className='window'>
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
              fontFamily: 'sans-sarif',
              fontSize: 18
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
