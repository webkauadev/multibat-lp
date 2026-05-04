import { Phone, MapPin, Instagram, Facebook, MessageCircle, Clock } from "lucide-react";
import logo from "@/assets/multibat-logo.jpeg";
import { WHATSAPP_URL } from "@/lib/multibat";

const businessHours = [
  { day: "Segunda-feira", hours: "07:00–18:00" },
  { day: "Terça-feira", hours: "07:00–18:00" },
  { day: "Quarta-feira", hours: "07:00–18:00" },
  { day: "Quinta-feira", hours: "07:00–18:00" },
  { day: "Sexta-feira", hours: "07:00–18:00" },
  { day: "Sábado", hours: "07:00–11:30" },
  { day: "Domingo", hours: "Fechado" },
];

export const Footer = () => (
  <footer className="bg-primary-dark text-white">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <img src={logo} alt="Multibat Baterias" className="h-16 rounded-md bg-white p-2" />
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            <strong className="text-white">Multibat Baterias</strong> — Energia de Verdade. Venda e instalação de baterias automotivas em Vilhena/RO com entrega rápida e atendimento 24h.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-smooth hover:bg-secondary">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-smooth hover:bg-secondary">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-display text-lg font-bold uppercase text-secondary-glow">Contato</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/85">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-smooth hover:text-secondary-glow">
                <MessageCircle className="h-4 w-4" /> WhatsApp 24h
              </a>
            </li>
            <li>
              <a href="tel:+5569999568540" className="inline-flex items-center gap-2 transition-smooth hover:text-secondary-glow">
                <Phone className="h-4 w-4" /> (69) 99956-8540
              </a>
            </li>
          </ul>
        </div>

        {/* Endereço */}
        <div>
          <h3 className="font-display text-lg font-bold uppercase text-secondary-glow">Endereço</h3>
          <p className="mt-5 inline-flex items-start gap-2 text-sm text-white/85">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <span>Av. Mal. Rondon, 5054 - 5 BEC<br />Centro, Vilhena - RO<br />76988-034</span>
          </p>
          <p className="mt-4 text-sm text-white/70">
            <strong className="text-white">Atendimento móvel:</strong> além da loja física, vamos até você em qualquer ponto da cidade.
          </p>
        </div>

        {/* Horário */}
        <div>
          <h3 className="font-display text-lg font-bold uppercase text-secondary-glow">Horário de Funcionamento</h3>
          <ul className="mt-5 space-y-1.5 text-sm text-white/85">
            {businessHours.map((item) => (
              <li key={item.day} className="flex items-center justify-between gap-2">
                <span className="text-white/70">{item.day}</span>
                <span className={item.hours === "Fechado" ? "font-semibold text-secondary" : ""}>
                  {item.hours}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary-glow">
            <Clock className="h-3.5 w-3.5" /> Emergências: Atendimento 24h
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row">
        <p>© 2026 Multibat Baterias. Todos os direitos reservados.</p>
        <div className="flex gap-5">
          <a href="#" className="transition-smooth hover:text-white">Política de Privacidade</a>
          <a href="#" className="transition-smooth hover:text-white">Termos de Serviço</a>
        </div>
      </div>
    </div>
  </footer>
);
