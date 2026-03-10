import Image from "next/image";
import Link from "next/link";

type CardProps = {
  image: string;
  title: string;
  text: string;
  tech: string[];
  btn1Link: string;
  btn2Link: string;
};

export default function ProyectCard({
  image,
  title,
  text,
  tech,
  btn1Link,
  btn2Link,
}: CardProps) {
  return (
    <div className="bg-accent rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-[1.02] transition">
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-xl font-semibold">{title}</h2>

        <p className="text-sm text-white/70">{text}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((t) => (
            <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Link
            href={btn1Link}
            target="_blank"
            className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition"
          >
            GitHub
          </Link>
          <Link
            href={btn2Link}
            target="_blank"
            className="bg-blue-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition"
          >
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
