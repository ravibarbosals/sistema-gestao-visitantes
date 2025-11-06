import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Visite from "./pages/Visite";
import Exposicoes from "./pages/Exposicoes";
import Rotas from "./pages/Rotas";
import Avisos from "./pages/Avisos";
import Autor from "./pages/Autor";
import Historia from "./pages/Historia";
import Eventos from "./pages/Eventos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/visite" element={<Visite />} />
          <Route path="/exposicoes" element={<Exposicoes />} />
          <Route path="/rotas" element={<Rotas />} />
          <Route path="/avisos" element={<Avisos />} />
          <Route path="/autor" element={<Autor />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/eventos" element={<Eventos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
