import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import boatsImage from "@/assets/boats.jpg";
import patternTerracotta from "@/assets/pattern-terracotta.jpg";

const Rotas = () => {
  return (
    <div className="min-h-screen p-4 max-w-md mx-auto bg-terracotta">
      <Header variant="terracotta" />
      
      <div className="space-y-6 pb-8">
        <img 
          src={boatsImage} 
          alt="Embarcações" 
          className="w-full h-48 object-cover rounded-3xl"
        />

        <Card className="bg-terracotta-light p-6 rounded-3xl text-white">
          <h2 className="text-2xl font-bold mb-4">Rotas</h2>
          <p className="mb-4">
            Existem 11 embarcações obedecem a uma padronização simples, com caiações em poliéster e cobertura e fardamento para os barqueiros (catamarãs).
          </p>
          <p>
            As embarcações são simples de madeira, mas todos os 11 barcos foram vistoriados e aprovados pela Marinha e estão regulamentados para a travessia marítima.
          </p>
        </Card>

        <div 
          className="rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${patternTerracotta})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Card className="bg-terracotta-light/95 backdrop-blur p-6 m-6 text-white">
            <h3 className="text-xl font-bold mb-4">Capacidade</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold">10</div>
                <div className="text-sm">
                  <p className="font-semibold">pessoas</p>
                  <p>De 1 passageiro a 1 barqueiro</p>
                  <p className="text-xs opacity-80">Muitos dos barcos aprovados</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold">3</div>
                <div className="text-sm">
                  <p className="font-semibold">Em média</p>
                  <p className="text-3xl">min</p>
                  <p className="text-xs opacity-80">Todos pedem coletes</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold">10</div>
                <div className="text-sm">
                  <p className="font-semibold">coletes</p>
                  <p className="text-xs opacity-80">em cada barco</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div 
          className="h-64 rounded-3xl"
          style={{
            backgroundImage: `url(${patternTerracotta})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <footer className="text-center text-sm text-white py-4">
          © Direitos reservados 2025
        </footer>
      </div>
    </div>
  );
};

export default Rotas;
