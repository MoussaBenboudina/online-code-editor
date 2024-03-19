import {Box} from "@chakra-ui/react"
import CodeEditor from "./componets/CodeEditor"

function App() {
  return (
<Box minH="100vh" background="#0f0a19" color="gray.500" px={6} py={8} display={'flex'} justifyContent={'center'} > 
    <CodeEditor />
</Box>
  )
}

export default App
