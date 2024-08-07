import React from "react";

const HtmlStringComponent = ({ htmlString }: any) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export default HtmlStringComponent;
