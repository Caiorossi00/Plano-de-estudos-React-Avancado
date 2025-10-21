import React from "react";
import ReactMarkdown from "react-markdown";

function MarkdownRenderer({ markdown }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px 0",
      }}
    >
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;
