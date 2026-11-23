import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center pb-8">
      <NewsletterForm />
      <Image
        src="/images/powered-by-fora-beige.png"
        alt="powered by fora"
        width={140}
        height={56}
        className="mt-10 h-auto w-[120px] opacity-80"
      />
    </footer>
  );
}
