import { useState } from "react";
import Fade from "react-reveal/Fade";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "success" | "error";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return;
    setStatus("sending");
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        { publicKey: PUBLIC_KEY }
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <Fade delay={200}>
      <div className="bg-main text-white min-h-screen w-full">
        <div className="flex flex-col">
          <h2 className="text-[40px] mt-[25vh] ml-[23vw] leading-[1.4] max-md:ml-[10vw] max-md:text-[1.5em]">
            Bonjour, je m'appelle
            <br />
            Frédéric Vannier.
            <br />
            Développeur web et graphiste,
            <br />
            actuellement à la recherche de
            <br />
            <span className="font-[800]">nouvelles opportunités.</span>
          </h2>

          <div className="ml-[23vw] max-md:ml-[10vw]">
            <section className="mt-8 text-[20px]">
              <p className="leading-[1.8]">Vous souhaitez collaborer avec moi ?</p>
            </section>
            <section className="text-[20px]">
              <p className="leading-[1.8]">Écrivez-moi directement via le formulaire ci-dessous :</p>
            </section>

            <form className="mt-10 flex flex-col gap-[1.4em] max-w-[540px] max-md:max-w-[80vw]" onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                aria-hidden="true"
                className="hidden"
              />

              <div className="flex flex-col gap-[0.4em]">
                <Label htmlFor="contact-name" className="text-[0.85rem] font-semibold tracking-[0.05em] uppercase text-white/70">
                  Nom
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  disabled={status === "sending"}
                />
              </div>

              <div className="flex flex-col gap-[0.4em]">
                <Label htmlFor="contact-email" className="text-[0.85rem] font-semibold tracking-[0.05em] uppercase text-white/70">
                  Email
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  disabled={status === "sending"}
                />
              </div>

              <div className="flex flex-col gap-[0.4em]">
                <Label htmlFor="contact-message" className="text-[0.85rem] font-semibold tracking-[0.05em] uppercase text-white/70">
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Votre message..."
                  disabled={status === "sending"}
                />
              </div>

              <Button
                type="submit"
                disabled={status === "sending"}
                className="self-start"
              >
                {status === "sending" ? "Envoi en cours..." : "Envoyer"}
              </Button>

              <div aria-live="polite" className="text-[0.9rem] min-h-[1.4em]">
                {status === "success" && (
                  <span className="text-green-500">Merci, votre message a bien été envoyé.</span>
                )}
                {status === "error" && (
                  <span className="text-accent-red">Une erreur est survenue. Veuillez réessayer.</span>
                )}
              </div>
            </form>

            <p className="mt-8 mb-16 text-[0.95rem] text-white/60">
              Ou directement par e-mail :{" "}
              <a href="mailto:frederic.vannier01@gmail.com?subject=Je viens de voir votre portfolio!">
                <span className="text-accent-red font-semibold text-[1.2rem]">frederic.vannier01@gmail.com</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Contact;
