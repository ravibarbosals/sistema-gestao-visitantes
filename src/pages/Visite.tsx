import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import boatsImage from "@/assets/boats.jpg";
import ceramicImage from "@/assets/ceramic-sculptures.jpg";
import patternBlue from "@/assets/pattern-blue.jpg";

const Visite = () => {
  return (
    <div className="min-h-screen p-4 max-w-md mx-auto bg-ocean">
      <Header variant="ocean" />
      
      <div className="space-y-6 pb-8">
        <Card className="bg-cream p-6 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Acesso</h2>
          <p className="text-muted-foreground">
            Para chegar até o parque, os visitantes devem entrar numa embarcação que sai do Marco Zero, o cruzeiro do Estuário do Recife. Navegar no Recife indo até à entrada do parque ou ir de carro pela Avenida Brasília Formosa.
          </p>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <img src={boatsImage} alt="Embarcações" className="rounded-2xl w-full h-32 object-cover" />
          <img src={ceramicImage} alt="Esculturas" className="rounded-2xl w-full h-32 object-cover" />
        </div>

        <Card className="bg-ocean text-white p-6 rounded-3xl">
          <h3 className="text-xl font-bold mb-2">Horários</h3>
          <div className="space-y-2">
            <div className="bg-ocean-dark p-4 rounded-xl">
              <p className="font-semibold">Terça a sexta:</p>
              <p>10h às 17h</p>
            </div>
            <div className="bg-ocean-dark p-4 rounded-xl">
              <p className="font-semibold">Sábado, domingo e feriados:</p>
              <p>9h às 16h</p>
            </div>
          </div>
        </Card>

        <div 
          className="h-48 rounded-3xl relative overflow-hidden"
          style={{
            backgroundImage: `url(${patternBlue})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Card className="bg-ocean text-white p-6 m-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Atenção</h3>
              <p>A última travessia acontece até</p>
              <p className="text-3xl font-bold">30 MIN</p>
              <p className="text-sm">antes do horário de fechamento do Parque.</p>
            </Card>
          </div>
        </div>

        <div 
          className="h-64 rounded-3xl"
          style={{
            backgroundImage: `url(${patternBlue})`,
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

export default Visite;
