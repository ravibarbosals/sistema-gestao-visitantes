import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import sculptureDramatic from "@/assets/sculpture-dramatic.jpg";
import patternSage from "@/assets/pattern-sage.jpg";
import api from "@/services/api";
import { useEffect, useState } from "react";

interface Aviso {
  id: string;
  titulo: string;
  descricao: string;
}

const Avisos = () => {
  const [avisos, setAvisos] = useState<Aviso[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAvisos = async () => {
      try {
        const response = await api.get("/avisos");
        setAvisos(response.data);
      } catch (error) {
        console.error("Erro ao buscar avisos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAvisos();
  }, []);

  return (
    <div className="min-h-screen p-4 max-w-md mx-auto bg-cream">
      <Header variant="cream" />
      <div className="space-y-6 pb-8">
        <div
          className="h-48 rounded-3xl relative overflow-hidden"
          style={{
            backgroundImage: `url(${sculptureDramatic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Avisos</h1>
          </div>
        </div>

        {/* Estado de carregamento */}
        {loading && (
          <p className="text-center text-gray-500">Carregando avisos...</p>
        )}

        {/* Avisos dinâmicos vindos do back */}
        {!loading && avisos.length > 0 ? (
          avisos.map((aviso) => (
            <Card key={aviso.id} className="bg-sage-dark text-white p-6 rounded-3xl">
              <h2 className="text-xl font-bold mb-2">{aviso.titulo}</h2>
              <p className="text-sm opacity-90">{aviso.descricao}</p>
            </Card>
          ))
        ) : (
          !loading && (
            <p className="text-center text-gray-500">
              Nenhum aviso encontrado.
            </p>
          )
        )}

        {/* Mantém o conteúdo fixo original abaixo */}
        <div
          className="h-48 rounded-3xl"
          style={{
            backgroundImage: `url(${patternSage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <footer className="text-center text-sm text-muted-foreground py-4">
          © Direitos reservados 2025
        </footer>
      </div>
    </div>
  );
};

export default Avisos;
