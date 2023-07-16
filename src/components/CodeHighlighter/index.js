import SyntaxHighlighter from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactDOMServer from 'react-dom/server';

const CodeBlock = ({ children }) => {
  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {children}
    </SyntaxHighlighter>
  );
};

module.exports = CodeBlock;
