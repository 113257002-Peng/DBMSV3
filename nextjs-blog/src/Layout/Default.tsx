import React, { ReactNode } from "react";
import Navbar from "../components/navbar";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div style={styles.layout}>
      <Navbar />
      <main style={styles.main}>{children}</main>
    </div>
  );
};

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin: 0, // Remove extra spacing around the layout
    padding: 0, // Ensure no padding is applied
  },
  main: {
    flex: 1,
    padding: "20px", // Adjust main content spacing
  },
};

export default DefaultLayout;
