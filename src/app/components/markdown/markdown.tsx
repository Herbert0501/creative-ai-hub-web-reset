import { memo } from "react";
import ReactMarkdown, { Options } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function MyMarkdown({ children, className = "", ...props }: Options) {
  return (
    <ReactMarkdown
      components={{
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              style={oneDark}
              language={match?.[1] ?? ""}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
      remarkPlugins={[remarkGfm]}
      className={`markdown prose dark:prose-invert ${className}`}
      {...props}
    >
      {children}
    </ReactMarkdown>
  );
}

export default memo(MyMarkdown);
