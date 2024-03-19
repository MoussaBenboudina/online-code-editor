import {Box ,} from '@chakra-ui/react'
import Editor from '@monaco-editor/react';
import { useRef, useState } from 'react';
import LanguageSelector from './LanguageSelector'
import { CODE_SNIPPETS } from '../constans';
import Output from './Output';
import '../app.css'
// const CopyTextButton = ({ text }) => {

  const CodeEditor = () => {

  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    };
  const onSelect = (language) =>{
        setLanguage(language)
        setValue(CODE_SNIPPETS[language])
     }


  return (
    <Box className='phone-screen' display={'flex'} w={'100vw'} gap={6}    >  
            <Box w={"70%"} className='editor-phoneScreen'>
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
                height="75vh"
                theme='vs-dark'
                language={language}
                defaultValue={CODE_SNIPPETS[language]}
                onMount={onMount}
                value={value}
                onChange={(v) => {setValue(v)}}
                  />
             </Box>
    <Output  editorRef={editorRef} language={language}/>
    </Box>
  )
}

export default CodeEditor
