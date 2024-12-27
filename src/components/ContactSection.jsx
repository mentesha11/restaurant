import {CONTACT} from "../constants"
const ContactSection = () => {
  return (
    <section className="container mx-auto py-16" id="contact">
    <div className="text-neutral-400">
        {CONTACT.map((detail) => (
            <p key={detail.kay} className="my-20 border-b-2 border-dotted border-neutral-700
            pb-12 text-center text-2xl tracking-tighter lg:text-3xl text-white">
                {detail.value}
            </p>
        ))}
    </div>
    </section>
  )
}

export default ContactSection