import {Box ,Text, Menu , MenuButton ,Button, MenuList ,MenuItem} from "@chakra-ui/react"
import { LANGUAGE_VERSIONS } from "../constans"
import { VscChevronDown } from "react-icons/vsc";


const languages  = Object.entries(LANGUAGE_VERSIONS)
const ACTIVE_COLOR = "blue.400"

// eslint-disable-next-line react/prop-types
const LanguageSelector = ({language  , onSelect }) => {
  return (
<Box display={'flex'} my={2} >
    <Box ml={2} mb={2}>
        <Text  fontSize='lg' mb={2} mx={5}>Language:</Text>
        <Menu isLazy>
        <MenuButton mx={5} as={Button} w={"fit-content"} p={0} >
        <Box as={Button} 
          display={'flex'}
          gap={6} w={'100%'}
          m={0} 
        >
        {language} 
        <VscChevronDown />
        </Box>
         </MenuButton> 

      <MenuList  bg="#110c1b">
          {languages.map(([lang, version]) => (
            <MenuItem key={lang} 
            w={'100%'}
            color={lang === language ? ACTIVE_COLOR : ""}
            bg={lang === language ? "gray.900" : ""}
            _hover={{
                color :ACTIVE_COLOR,
                bg : "gray.900"
            }}
            onClick={() => onSelect(lang)}
     
            >
                {lang} 
                &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
                ({version})
              </Text>
        </MenuItem> 
          ))}
        </MenuList>
</Menu>
    </Box>


    </Box>
  )
}

export default LanguageSelector