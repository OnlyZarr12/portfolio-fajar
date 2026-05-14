import profile from "./assets/profile.jpg";

function App() {

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white min-h-screen overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex justify-between items-center">

          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Fajar Ramadhan
          </h1>

          <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
            <li
              onClick={() => scrollToSection("home")}
              className="hover:text-cyan-400 cursor-pointer transition"
            >
              Home
            </li>

            <li
              onClick={() => scrollToSection("about")}
              className="hover:text-cyan-400 cursor-pointer transition"
            >
              About
            </li>

            <li
              onClick={() => scrollToSection("projects")}
              className="hover:text-cyan-400 cursor-pointer transition"
            >
              Projects
            </li>

            <li
              onClick={() => scrollToSection("contact")}
              className="hover:text-cyan-400 cursor-pointer transition"
            >
              Contact
            </li>
          </ul>

        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-20 md:pb-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center"
      >

        {/* Left */}
        <div className="text-center md:text-left">

          <p className="text-cyan-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Fajar{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Ramadhan
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Informatics Engineering Student
          </h2>

          <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-10">
            Mahasiswa S1 Teknik Informatika semester 7 yang memiliki
            ketertarikan di bidang System Analyst dan UI/UX Design.
            Terbiasa melakukan analisis kebutuhan sistem, membuat
            diagram UML, serta merancang alur dan tampilan aplikasi
            yang mudah dipahami pengguna.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-7 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="border border-cyan-400 px-7 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              Contact Me
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-30 rounded-full"></div>

            <img
              src={profile}
              alt="profile"
              className="relative w-[260px] md:w-[350px] h-[340px] md:h-[450px] object-cover rounded-[35px] border-4 border-slate-800 shadow-2xl hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-24"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-14">
          About Me
        </h2>

        <div className="bg-slate-900/60 border border-slate-800 p-6 md:p-10 rounded-3xl backdrop-blur-md">

          <p className="text-gray-300 leading-relaxed text-base md:text-lg text-center md:text-left">
            Mahasiswa S1 Teknik Informatika semester 7 yang memiliki
            ketertarikan di bidang System Analyst dan UI/UX Design.
            Terbiasa melakukan analisis kebutuhan sistem, membuat
            diagram UML, serta merancang alur dan tampilan aplikasi
            yang mudah dipahami pengguna. Memiliki kemampuan komunikasi
            yang baik dalam memahami kebutuhan client dan menerjemahkannya
            menjadi rancangan sistem yang terstruktur.
          </p>

        </div>

      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 md:mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-7">

          {[
            "Requirement Analysis",
            "UML Diagram",
            "UI/UX Design",
            "Wireframing & Prototype",
            "Figma",
            "Draw.io / StarUML",
            "Problem Solving",
            "Team Collaboration",
            "Communication Skill",
            "Database Dasar (MySQL)",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center hover:border-cyan-400 hover:-translate-y-3 transition duration-300 shadow-xl"
            >
              <h3 className="text-lg md:text-xl font-semibold text-cyan-400">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 md:mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {[
            "WEB Penjualan menggunakan HTML, CSS, JS",
            "POS menggunakan PHP Laravel",
            "UI/UX Profil Perusahaan menggunakan Figma",
            "Sensor Palang Parkir Otomatis menggunakan IOT",
            "Pom Bensin Mini menggunakan IOT",
            "Sistem Reservasi Online Billiard menggunakan UML",
            "Peminjaman Fasilitas Kampus menggunakan UML",
            "Aplikasi Keamanan Wanita menggunakan Flutter dan Firebase",
            "WEB menggunakan Java Spring Boot",
          ].map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/70 border border-slate-800 p-6 md:p-8 rounded-3xl hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-xl"
            >

              <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4 md:mb-5">
                Project {index + 1}
              </h3>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {project}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-24"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 md:mb-16">
          Contact
        </h2>

        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 md:p-12 text-center shadow-xl">

          <p className="text-base md:text-xl text-gray-300 mb-5 break-all">
            📧 ramadhanfajar194@gmail.com
          </p>

          <p className="text-base md:text-xl text-gray-300 mb-5">
            📱 +6281320111588
          </p>

          <p className="text-base md:text-xl text-gray-300">
            📍 GG. Parasdi Dalam VII
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 md:py-10 text-center text-gray-500 text-sm md:text-base">
        © 2026 Fajar Ramadhan — Portfolio Website
      </footer>

    </div>
  );
}

export default App;