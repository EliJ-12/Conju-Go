import { useLocation } from "wouter";
import { BookOpen, Clock, Puzzle, Zap, Users, Gamepad2 } from "lucide-react";
import { GameModeCard } from "@/components/GameModeCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [, setLocation] = useLocation();

  const gameModes = [
    {
      id: "solo",
      title: "Modo Solitario",
      description:
        "Practica conjugaciones a tu ritmo. Escribe las formas verbales correctas y recibe retroalimentacion inmediata.",
      icon: BookOpen,
      color: "bg-blue-500",
      badges: ["Sin tiempo", "Practica libre"],
      path: "/solo",
    },
    {
      id: "solo-timed",
      title: "Contrarreloj",
      description:
        "Pon a prueba tu velocidad! Conjuga verbos contra el reloj y acumula puntos por respuestas rapidas.",
      icon: Clock,
      color: "bg-orange-500",
      badges: ["Cronometrado", "Puntuacion"],
      path: "/solo-timed",
    },
    {
      id: "memory",
      title: "Memory",
      description:
        "Empareja verbos franceses con su traduccion al espanol. Entrena tu memoria mientras aprendes vocabulario.",
      icon: Puzzle,
      color: "bg-purple-500",
      badges: ["Traduccion", "Parejas"],
      path: "/memory",
    },
    {
      id: "kahoot-solo",
      title: "Kahoot Solo",
      description:
        "Cuestionario de opcion multiple con tiempo limitado. Elige la conjugacion correcta entre 4 opciones.",
      icon: Zap,
      color: "bg-green-500",
      badges: ["Quiz", "4 opciones"],
      path: "/kahoot-solo",
    },
    {
      id: "kahoot-multi",
      title: "Kahoot Multijugador",
      description:
        "Compite con amigos en tiempo real! Crea una sala o unete con un codigo para ver quien conjuga mejor.",
      icon: Users,
      color: "bg-pink-500",
      badges: ["En linea", "Competitivo"],
      path: "/kahoot-multi",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-primary" />
            <span className="font-display font-bold text-xl">Conjugo</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="hidden sm:flex">
              150 verbos
            </Badge>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
            <div className="relative z-10 py-12 px-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                Aprende verbos franceses jugando
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Domina la conjugacion francesa con juegos interactivos. Practica el
                <span className="font-semibold"> present</span>,
                <span className="font-semibold"> passe compose</span> e
                <span className="font-semibold"> imparfait</span> con 150 verbos esenciales.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <StatBadge label="Verbos" value="150" />
            <StatBadge label="Tiempos" value="3" />
            <StatBadge label="Modos" value="5" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Elige tu modo de juego</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gameModes.map((mode) => (
              <GameModeCard
                key={mode.id}
                title={mode.title}
                description={mode.description}
                icon={mode.icon}
                color={mode.color}
                badges={mode.badges}
                onClick={() => setLocation(mode.path)}
                testId={`card-mode-${mode.id}`}
              />
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-muted-foreground mb-4">
            Tiempos verbales disponibles
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <TenseBadge name="Present d'indicatif" color="bg-blue-500" />
            <TenseBadge name="Passe compose" color="bg-green-500" />
            <TenseBadge name="Imparfait" color="bg-purple-500" />
          </div>
        </section>
      </main>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Conjugo - Aprende francais de forma divertida</p>
        </div>
      </footer>
    </div>
  );
}

function StatBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 bg-card border rounded-full px-4 py-2">
      <span className="font-display font-bold text-primary text-lg">{value}</span>
      <span className="text-muted-foreground text-sm">{label}</span>
    </div>
  );
}

function TenseBadge({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-2 bg-card border rounded-full px-4 py-2">
      <div className={`w-2 h-2 rounded-full ${color}`} />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
