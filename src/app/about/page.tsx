import Header from "@/components/layouts/header"
import Main from "@/components/layouts/main"
import Footer from "@/components/layouts/footer"

export default function Page() {
  return (<>
    <Header uri="about" />
    <Main uri="about" />
    <Footer />
  </>
  );
}