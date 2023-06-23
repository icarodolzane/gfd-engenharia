import ContactCard from "../components/ContactCard";
import MobileHeader from "../components/MobileHeader";
// import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <MobileHeader />
      {/* <Header /> */}
      <div className="flex flex-col justify-center items-center gap-10 mt-32">
        <h1 className="text-center font-sans text-5xl font-bold">Contato</h1>
        <ContactCard/>
      </div>


    </>
  )
}
