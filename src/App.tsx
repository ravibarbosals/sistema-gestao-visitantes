import { useEffect } from "react";
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
import ProtectedRoute from "@/components/ProtectedRoute";
import api from "./services/api";

const queryClient = new QueryClient();

const App = () => {
  // ✅ useEffect agora está dentro do componente
  useEffect(() => {
    api
      .get("/usuarios") // endpoint de teste
      .then((response) => {
        console.log("✅ Conexão com o back funcionando!");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("❌ Erro ao conectar com o back:", error);
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* 🔓 Rota pública (login/cadastro) */}
            <Route path="/auth" element={<Auth />} />

            {/* 🔒 Rotas protegidas */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/visite"
              element={
                <ProtectedRoute>
                  <Visite />
                </ProtectedRoute>
              }
            />
            <Route
              path="/exposicoes"
              element={
                <ProtectedRoute>
                  <Exposicoes />
                </ProtectedRoute>
              }
            />
            <Route
              path="/rotas"
              element={
                <ProtectedRoute>
                  <Rotas />
                </ProtectedRoute>
              }
            />
            <Route
              path="/avisos"
              element={
                <ProtectedRoute>
                  <Avisos />
                </ProtectedRoute>
              }
            />
            <Route
              path="/autor"
              element={
                <ProtectedRoute>
                  <Autor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/historia"
              element={
                <ProtectedRoute>
                  <Historia />
                </ProtectedRoute>
              }
            />
            <Route
              path="/eventos"
              element={
                <ProtectedRoute>
                  <Eventos />
                </ProtectedRoute>
              }
            />

            {/* 🚨 Página não encontrada */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
