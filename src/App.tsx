import { Switch, Route } from "wouter";
// ❌ NO uses useHashLocation en Vercel
// ✅ Usa routing normal

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import SoloMode from "@/pages/SoloMode";
import MemoryMode from "@/pages/MemoryMode";
import KahootSolo from "@/pages/KahootSolo";
import CompleteMode from "@/pages/CompleteMode";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    // ✅ Routing normal (sin useHashLocation)
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/solo">
        <SoloMode timed={false} />
      </Route>
      <Route path="/solo-timed">
        <SoloMode timed={true} />
      </Route>
      <Route path="/memory" component={MemoryMode} />
      <Route path="/kahoot-solo" component={KahootSolo} />
      <Route path="/complete" component={CompleteMode} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;