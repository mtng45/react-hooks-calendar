import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'

const rebootCss = reboot()

const GlobalStyles = createGlobalStyle`
  ${rebootCss}
`

export default GlobalStyles
