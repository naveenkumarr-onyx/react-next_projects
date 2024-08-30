import React, { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css"; // Import the Quill editor styles
import Quill from "quill";

const QuillEditor = ({}) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const Font: any = Quill.import("formats/font");
      Font.whitelist = ["roboto"]; // Add 'roboto' to the font whitelist
      Quill.register(Font, true);

      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ font: Font.whitelist }],
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
          ],
        },
      });

      // Set the initial content

      quill.on("text-change", () => {
        // Get the content as HTML
        const htmlContent = quill.root.innerHTML;
        console.log("HTML Content:", htmlContent);

        // Get the content as Delta
        const deltaContent = quill.getContents();
        console.log("Delta Content:", deltaContent);
      });
    }
  }, []);
  return (
    <div
      ref={editorRef}
      style={{
        minWidth: "1000px",
        marginLeft: "20px",
      }}
    />
  );
};

export default QuillEditor;
