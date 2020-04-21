import { createGlobalStyle, ThemeProvider } from "styled-components";
// Глобальные стили, которые теперь поддерживают обновления и темы
const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow:  hidden;      
    }

    .App {
        height: 100vh;
    }
      
    .row {
        height: 95%;
        width: 100%;
        margin-right: 0;
        margin-left: 0;
    }
      
    .col{
        padding-right: 0;
        padding-left: 0;
    }

    #graph {
        height: 100%;
      }
`;
export default GlobalStyle;
