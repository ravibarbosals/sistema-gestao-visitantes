import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { PatternCard } from "@/components/PatternCard";
import heroImage from "@/assets/hero-park.jpg";
import patternSage from "@/assets/pattern-sage.jpg";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("brennand_auth");
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen p-4 max-w-md mx-auto">
      <Header variant="sage" />
      
      <div 
        className="h-64 rounded-3xl mb-6 relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <PatternCard pattern="sage" className="mb-6">
        <div 
          className="h-48 relative"
          style={{
            backgroundImage: `url(${patternSage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="p-6 bg-card">
          <h2 className="text-xl font-bold mb-4 text-foreground">Brennand Digital</h2>
          <p className="text-muted-foreground mb-4">
            Brennand Digital nasce com o propósito de democratizar a experiência de visitação ao legado de Francisco Brennand, conectando o público à arte, à cultura e à informação, de forma inteligente e integrada.
          </p>
          <p className="text-muted-foreground">
            Com uma abordagem centrada no visitante, promovemos um acesso mais organizado, uma comunicação eficiente e uma imersão cultural completa, fortalecendo o Parque como um destino inovador, acolhedor e inesquecível.
          </p>
        </div>
      </PatternCard>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <PatternCard pattern="sage" className="aspect-square">
          <div 
            className="h-full"
            style={{
              backgroundImage: `url(${patternSage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </PatternCard>
        <PatternCard pattern="sage" className="aspect-square">
          <div 
            className="h-full"
            style={{
              backgroundImage: `url(${patternSage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </PatternCard>
      </div>

      <footer className="text-center text-sm text-muted-foreground py-4">
        © Direitos reservados 2025
      </footer>
    </div>
  );
};

export default Home;
