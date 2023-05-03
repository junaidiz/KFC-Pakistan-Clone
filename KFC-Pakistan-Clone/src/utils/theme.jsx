import { extendTheme } from '@chakra-ui/react'
import { cardTheme } from '../components/top-selling/card-theme'

const customTheme = extendTheme({
  components: {
    Card: cardTheme,
  },
})

export default customTheme;