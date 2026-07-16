import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center py-8">
      <Image
        src="/images/powered-by-fora-beige.png"
        alt="powered by fora"
        width={140}
        height={56}
        className="h-auto w-[120px] opacity-80"
      />
    </footer>
  );
}
