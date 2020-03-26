import React from "react";
import Link from "./Link";

const Footer = () => {
  return (
    <div>
      <Link filter={"SHOW_ALL"} text={"All"} state={0}/>
      <Link filter={"SHOW_ACTIVE"} text={"Active"} state={1}/>
      <Link filter={"SHOW_COMPLETE"} text={"Complete"} state={2}/>
    </div>
  );
};

export default Footer;
