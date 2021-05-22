import 'styled-components'

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'styled-components' {
    export interface DpMainTextType {
        color: string;
    }
}