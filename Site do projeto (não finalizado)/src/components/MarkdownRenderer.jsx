import React from "react";
import ReactMarkdown from "react-markdown";

function MarkdownRenderer({ markdown }) {
  if (!markdown) return null;

  return (
    <div className="markdown-body">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;
