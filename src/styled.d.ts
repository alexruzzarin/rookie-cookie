import 'styled-components';
import { RebootTheme } from 'styled-reboot';

declare module 'styled-components' {
  export interface DefaultTheme extends RebootTheme {
    headerBg: string;
    shadowColor: string;
    buttonBorderColor: string;
  }
}
