import Header from "./assets/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
}
