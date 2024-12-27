import photo from "../assets/Herobackg.jpg"
import logo from "../assets/logo.png"
const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 w-full overflow-hiden">
            <img src={photo} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b fron-transparent
        from-70% to-black"></div>
        <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
            <img src={logo} alt="restaurant" className="w-full p-4" />
            <p className="p-4 text-lg tracking-tighter text-white"></p>
        </div>
    </section>
  )
}

export default HeroSection;