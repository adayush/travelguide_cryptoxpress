import Header from "./header"
import Footer from "./footer"
import Brand from "./brand"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Brand />
      <Footer />
    </>
  )
}