import {Box , Text , Button, useToast} from '@chakra-ui/react'
import { executeCode } from '../api';
import { useState } from 'react';

import { VscDebugStart } from "react-icons/vsc";



// eslint-disable-next-line react/prop-types
const Output = ({editorRef , language}) => {
const [output , setOutput] = useState(null);
const toast = useToast()
const [loading , setLoading] = useState(false);
const [isError , setError] = useState(false);
const runCode = async () => {
  // eslint-disable-next-line react/prop-types
  const sourceCode = editorRef.current.getValue()
  if(!sourceCode) return;
  try{
    setLoading(true)
  const {run:result} = await executeCode(language , sourceCode)
  result.stderr ? setError(true) : setError(false)
  setOutput(result.output.split(`\n`))

} catch(error) { 
toast ({
  title:'an error occurred',
  description : error.message,
  status : 'error',
  duration : 6000
}) 

}finally{
  setLoading(false);
}
}

  return (
    <Box w={"48%"} className='outpot-phoneScreen'>
      <Text mb={2} fontSize={"lg"}> Output </Text>
      <Button
      variant={'outline'}
      colorScheme='green'
      mb={2}
      loading = {loading}
      onClick={runCode}
      
      >
      <VscDebugStart />     &nbsp;  Run Code 
      
      </Button>
      <Box
      h={'75vh'}
      overflowY="scroll"
       p={2}
    border={'1px solid '}
    borderRadius={4}
    borderColor={'#333'}
    color={  isError ? 'red': output ? "#fff": ""}
    py={4}
    px={2}
      >
      {
        output ? output.map((line , i) => <Text key={i+1}>{line}</Text>) : 'click "Run code" to see the output here' 
       
      }

      </Box>
      
    </Box>
  )
}

export default Output
