import Navbar from "./Navbar";

export default ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
