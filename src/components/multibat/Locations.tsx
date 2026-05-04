import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, ExternalLink, Clock } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/multibat";

interface Location {
  id: number;
  city: string;
  state: string;
  label?: string;
  address: string;
  hours: string;
  isMain: boolean;
  mapsUrl: string;
  // SVG map coordinates (relative to viewBox)
  x: number;
  y: number;
}

const locations: Location[] = [
  {
    id: 1,
    city: "Vilhena",
    state: "RO",
    address: "Av. Marechal Rondon, 5054 - 5º Bec",
    hours: "24h",
    isMain: true,
    mapsUrl: "https://maps.google.com/?q=Av.+Mal.+Rondon,+5054+-+5+bec+-+Centro,+Vilhena+-+RO,+76988-034",
    x: 232,
    y: 310,
  },
  {
    id: 2,
    city: "Cerejeiras",
    state: "RO",
    address: "Avenida das Nações, 1415 - Eldorado",
    hours: "Consulte",
    isMain: false,
    mapsUrl: "https://maps.google.com/?q=Avenida+das+Nações,+1415+-+Eldorado,+Cerejeiras+-+RO",
    x: 252,
    y: 330,
  },
  {
    id: 3,
    city: "Sapezal",
    state: "MT",
    address: "Av. Dourado, 383 Sw - Cidezal I",
    hours: "Consulte",
    isMain: false,
    mapsUrl: "https://maps.google.com/?q=Av.+Dourado,+383+Sw+-+Cidezal+I,+Sapezal+-+MT",
    x: 330,
    y: 290,
  },
  {
    id: 4,
    city: "Porto Velho",
    state: "RO",
    label: "Loja I",
    address: "Av. Jorge Teixeira, 227 - Roque",
    hours: "Consulte",
    isMain: false,
    mapsUrl: "https://maps.google.com/?q=Av.+Jorge+Teixeira,+227+-+Roque,+Porto+Velho+-+RO",
    x: 175,
    y: 170,
  },
  {
    id: 5,
    city: "Porto Velho",
    state: "RO",
    label: "Loja II",
    address: "Av. Calama, 7262 - Igarapé",
    hours: "Consulte",
    isMain: false,
    mapsUrl: "https://maps.google.com/?q=Av.+Calama,+7262+-+Igarapé,+Porto+Velho+-+RO",
    x: 190,
    y: 185,
  },
  {
    id: 6,
    city: "Ji-Paraná",
    state: "RO",
    label: undefined,
    address: "Rua Martins, Nº 292",
    hours: "Consulte",
    isMain: false,
    mapsUrl: "https://maps.google.com/?q=Rua+Martins,+292,+Ji-Paraná+-+RO",
    x: 210,
    y: 230,
  },
];

const InteractiveMap = ({
  activeId,
  onSelect,
  onHover,
}: {
  activeId: number | null;
  onSelect: (id: number) => void;
  onHover: (id: number | null) => void;
}) => {
  return (
    <svg
      viewBox="80 80 350 330"
      className="w-full h-full"
      role="img"
      aria-label="Mapa de localizações Multibat na região Centro-Oeste"
    >
      {/* Background */}
      <rect x="80" y="80" width="350" height="330" rx="12" fill="#f0f4f0" />

      {/* RO state shape (simplified) */}
      <path
        d="M130 130 L260 120 L280 200 L270 320 L240 350 L160 360 L120 300 L110 200 Z"
        fill="#d4edda"
        stroke="#a3d9a5"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <text x="190" y="260" textAnchor="middle" fontSize="18" fill="#4a6741" fontWeight="600" opacity="0.5">
        RO
      </text>

      {/* MT state shape (simplified) */}
      <path
        d="M260 120 L420 110 L430 350 L270 340 L280 200 Z"
        fill="#d4edda"
        stroke="#a3d9a5"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <text x="350" y="240" textAnchor="middle" fontSize="18" fill="#4a6741" fontWeight="600" opacity="0.4">
        MT
      </text>

      {/* Connection lines between locations */}
      {locations.map((loc) => {
        if (loc.id === 1) return null;
        const main = locations[0];
        return (
          <line
            key={`line-${loc.id}`}
            x1={main.x}
            y1={main.y}
            x2={loc.x}
            y2={loc.y}
            stroke="#a3d9a5"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.5"
          />
        );
      })}

      {/* Location pins */}
      {locations.map((loc, i) => {
        const isActive = activeId === loc.id;
        const pinColor = loc.isMain || isActive ? "#ff6b35" : "#00b84d";
        const pinSize = loc.isMain ? 14 : 11;

        return (
          <g
            key={loc.id}
            onClick={() => onSelect(loc.id)}
            onMouseEnter={() => onHover(loc.id)}
            onMouseLeave={() => onHover(null)}
            className="cursor-pointer"
            role="button"
            aria-label={`${loc.city}${loc.label ? ` ${loc.label}` : ""} - ${loc.state}`}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onSelect(loc.id)}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {/* Pulse ring for active */}
            {isActive && (
              <circle cx={loc.x} cy={loc.y} r={pinSize + 6} fill={pinColor} opacity="0.2">
                <animate attributeName="r" from={String(pinSize + 4)} to={String(pinSize + 14)} dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.3" to="0" dur="1.5s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Pin drop shadow */}
            <circle cx={loc.x} cy={loc.y + 2} r={pinSize - 2} fill="rgba(0,0,0,0.15)" />

            {/* Pin marker (teardrop shape) */}
            <path
              d={`M${loc.x} ${loc.y - pinSize * 1.8} 
                  C${loc.x - pinSize} ${loc.y - pinSize * 1.8} ${loc.x - pinSize} ${loc.y - pinSize * 0.4} ${loc.x} ${loc.y + 2}
                  C${loc.x + pinSize} ${loc.y - pinSize * 0.4} ${loc.x + pinSize} ${loc.y - pinSize * 1.8} ${loc.x} ${loc.y - pinSize * 1.8}Z`}
              fill={pinColor}
              stroke="white"
              strokeWidth="1.5"
              className="transition-all duration-300"
              transform={isActive ? `scale(1.2) translate(${loc.x * -0.2} ${loc.y * -0.2})` : ""}
            />

            {/* Inner circle */}
            <circle
              cx={loc.x}
              cy={loc.y - pinSize * 1}
              r={pinSize * 0.35}
              fill="white"
              className="transition-all duration-300"
            />

            {/* City label */}
            <rect
              x={loc.x - 35}
              y={loc.y + 8}
              width="70"
              height="18"
              rx="4"
              fill={isActive ? pinColor : "white"}
              stroke={pinColor}
              strokeWidth="0.8"
              opacity="0.95"
            />
            <text
              x={loc.x}
              y={loc.y + 20}
              textAnchor="middle"
              fontSize="9"
              fontWeight="600"
              fill={isActive ? "white" : "#1a2a4a"}
            >
              {loc.city}
              {loc.label ? ` ${loc.label}` : ""}
            </text>
          </g>
        );
      })}

      {/* Legend */}
      <g transform="translate(95, 370)">
        <circle cx="0" cy="0" r="5" fill="#ff6b35" />
        <text x="10" y="4" fontSize="9" fill="#666">Matriz</text>
        <circle cx="60" cy="0" r="5" fill="#00b84d" />
        <text x="70" y="4" fontSize="9" fill="#666">Filiais</text>
      </g>
    </svg>
  );
};

export const Locations = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hoverId, setHoverId] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const effectiveActive = hoverId ?? activeId;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSelect = (id: number) => {
    setActiveId(id);
    const idx = locations.findIndex((l) => l.id === id);
    if (idx >= 0 && cardRefs.current[idx]) {
      cardRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="localizacoes"
      className="py-16 sm:py-20 lg:py-24 bg-muted/50"
      aria-label="Localizações Multibat"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <div
          className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            Estamos Perto de Você
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Multibat com cobertura em 6 cidades do Centro-Oeste
          </p>
        </div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map */}
          <div
            className={`bg-white rounded-2xl shadow-card p-4 sm:p-6 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <InteractiveMap
              activeId={effectiveActive}
              onSelect={handleSelect}
              onHover={setHoverId}
            />
          </div>

          {/* Cards */}
          <div className="space-y-4 max-h-[500px] lg:max-h-[540px] overflow-y-auto pr-1 scroll-smooth">
            {locations.map((loc, i) => {
              const isActive = effectiveActive === loc.id;
              const cityName = `${loc.city}${loc.label ? ` (${loc.label})` : ""} - ${loc.state}`;

              return (
                <div
                  key={loc.id}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  onClick={() => handleSelect(loc.id)}
                  onMouseEnter={() => setHoverId(loc.id)}
                  onMouseLeave={() => setHoverId(null)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleSelect(loc.id)}
                  aria-label={`Localização ${cityName}`}
                  className={`
                    bg-white rounded-lg p-5 cursor-pointer transition-all duration-300
                    border-2
                    ${loc.isMain && !isActive ? "border-secondary/60 shadow-md" : ""}
                    ${isActive ? "border-secondary shadow-card-hover scale-[1.01]" : ""}
                    ${!isActive && !loc.isMain ? "border-border hover:border-secondary/40 shadow-card" : ""}
                    ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
                  `}
                  style={{
                    transitionDelay: visible ? `${300 + i * 100}ms` : "0ms",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <MapPin
                      className={`mt-0.5 shrink-0 ${
                        loc.isMain || isActive ? "text-secondary" : "text-accent"
                      }`}
                      size={22}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-bold text-primary text-lg leading-tight">
                          {cityName}
                        </h3>
                        {loc.isMain && (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                            Matriz
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{loc.address}</p>

                      <div className="flex items-center gap-1 mt-1.5 text-xs text-muted-foreground">
                        <Clock size={13} />
                        <span>{loc.hours === "24h" ? "Atendimento 24h" : loc.hours}</span>
                      </div>

                      <div className="flex items-center gap-3 mt-3 flex-wrap">
                        <a
                          href={loc.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-secondary-glow transition-colors"
                          aria-label={`Como chegar em ${loc.city}`}
                        >
                          <ExternalLink size={14} />
                          Como Chegar
                        </a>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-glow transition-colors"
                          aria-label={`WhatsApp ${loc.city}`}
                        >
                          <Phone size={14} />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
