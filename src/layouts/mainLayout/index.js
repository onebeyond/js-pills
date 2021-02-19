import React from "react";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const layout = ({ children }) => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
