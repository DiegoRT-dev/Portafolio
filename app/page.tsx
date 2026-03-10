import Navbar from "@/components/Navbar";
import ProyectCard from "@/components/ProyectCard";

export default function Home() {
  return (
    <main className="bg-accent">
      <Navbar />

      <div
        id="inicio"
        className="bg-primary min-h-screen flex flex-col justify-center items-center text-center px-6 gap-6"
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          Diego R.T.
        </h1>
        <p className="text-xl text-white/70">Desarrollador Web</p>
        <p className="text-white/60 max-w-xl">
          Desarrollo aplicaciones web modernas utilizando Next.js, React,
          Typescript y Tailwind.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="#proyectos"
            className="bg-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Contacto
          </a>
        </div>
      </div>

      <div id="proyectos" className="bg-accent py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Proyectos</h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-10"></div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ProyectCard
              image="/peliculas-tmdb.png"
              title="Peliculas TMDB"
              text="Buscador de películas usando la API de TMDB con interfaz moderna."
              tech={["Next.js", "TypeScript", "Tailwind", "React", "TMDB Api"]}
              btn1Link="https://github.com/DiegoRT-dev/Peliculas-tmdb"
              btn2Link="https://peliculas-tmdb-chi.vercel.app/"
            />
            <ProyectCard
              image="/foodbuilder.png"
              title="FoodBuilder"
              text="Aplicación interactiva para construir pedidos de comida."
              tech={["Next.js", "TypeScript", "Tailwind", "React", "Zustand"]}
              btn1Link="https://github.com/DiegoRT-dev/Foodbuilder"
              btn2Link="https://foodbuilder.vercel.app/"
            />
            <ProyectCard
              image="/zustore.png"
              title="Zustore"
              text="Tienda online con carrito persistente, estado global y base de datos."
              tech={[
                "Next.js",
                "TypeScript",
                "Tailwind",
                "React",
                "Zustand",
                "Prisma",
                "MySQL",
              ]}
              btn1Link="https://github.com/DiegoRT-dev/zustore"
              btn2Link="https://zustore-y1tz.vercel.app/"
            />
          </div>
        </div>
      </div>

      <div id="tecnologias" className="bg-primary py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Tecnologias</h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-10"></div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind",
              "Prisma",
              "MySQL",
              "Git",
              "Vercel",
            ].map((tech) => (
              <li
                key={tech}
                className="bg-accent border border-white/10 rounded-lg py-3 text-center"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id="sobre" className="bg-accent py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Sobre mi</h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-10"></div>
          <p className="text-white/70 leading-relaxed">
            Soy ingeniero en computacion con interes en el desarrollo web. Me
            gusta construir aplicaciones modernas usando Next.js, React y
            Typescript, integrando base de datos con Prisma. Disfurto aprender
            nuevas tecnologias y crear interfaces limpias y funcionales.
          </p>
        </div>
      </div>

      <div id="contacto" className="bg-primary py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contacto</h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-10"></div>
          <div className="flex flex-col gap-3 text-white/80">
            <a
              href="https://www.linkedin.com/in/diego-rodriguez-trejo-4510573a2/"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/DiegoRT-dev"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              GitHub
            </a>
            <p>Email: diegordriguez02@gmail.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}
