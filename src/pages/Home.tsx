import { useLocation } from "wouter";
import { BookOpen, Clock, Puzzle, Zap, PenTool } from "lucide-react";
import { GameModeCard } from "@/components/GameModeCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
      id: "complete",
      title: "Completar Verbos",
      description:
        "Completa la forma verbal correcta. Practica conjugaciones especificas con informacion del verbo, traduccion, tipo y grupo.",
      icon: PenTool,
      color: "bg-pink-500",
      badges: ["Completar", "Practica"],
      path: "/complete",
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-xl sm:text-2xl text-primary">ConjuGo</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium">
              150 verbos
            </Badge>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <section className="mb-12 mt-6 sm:mt-8">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
            <div className="relative z-10 py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
                Aprende verbos franceses jugando
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-3xl leading-relaxed">
                Domina la conjugacion francesa con juegos interactivos. Practica el{" "}
                <span className="font-semibold">present</span>,{" "}
                <span className="font-semibold">passe compose</span>,{" "}
                <span className="font-semibold">imparfait</span> y{" "}
                <span className="font-semibold">plus-que-parfait</span> con +150 verbos esenciales.
              </p>
            </div>
          </div>
        </section>


        {/* Game Modes Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8 text-center">
            Elige tu modo de juego
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
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

        {/* Tenses Section */}
        <section className="mb-16 text-center">
          <h3 className="text-lg font-semibold text-muted-foreground mb-6">
            Tiempos verbales disponibles
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <TenseBadge name="Present d'indicatif" color="bg-blue-500" />
            <TenseBadge name="Passe compose" color="bg-green-500" />
            <TenseBadge name="Imparfait" color="bg-purple-500" />
            <TenseBadge name="Plus-que-parfait" color="bg-orange-500" />
          </div>
        </section>
      </main>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>ConjuGo - Aprende francais de forma divertida</p>
        </div>
      </footer>
    </div>
  );
}

function TenseBadge({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-2 bg-card border rounded-full px-4 py-2 shadow-sm">
      <div className={`w-2 h-2 rounded-full ${color}`} />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
