import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import sculptureDramatic from "@/assets/sculpture-dramatic.jpg";
import patternSage from "@/assets/pattern-sage.jpg";

const Avisos = () => {
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

        <Card className="bg-sage-dark text-white p-6 rounded-3xl">
          <h2 className="text-xl font-bold mb-4">O Brennand Digital:</h2>
          <h3 className="font-semibold mb-2">espaço virtual do Palácio das Esculturas</h3>
          <p className="text-sm opacity-90">
            Lorem ipsum is simply dummy text of the printing. And typesetting industry. Lorem ipsum has been the industry's standard dummy text ever.
          </p>
        </Card>

        <div 
          className="h-48 rounded-3xl"
          style={{
            backgroundImage: `url(${patternSage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Card className="bg-sage-dark text-white p-6 rounded-3xl">
          <h2 className="text-xl font-bold mb-4">Utilize fones de ouvido para uma melhor</h2>
          <h3 className="text-2xl font-bold mb-2">experiência</h3>
          <p className="text-sm opacity-90">
            Lorem ipsum is simply dummy text of the printing. And typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </Card>

        <div 
          className="h-64 rounded-3xl relative overflow-hidden"
          style={{
            backgroundImage: `url(${sculptureDramatic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h2 className="text-3xl font-bold text-white">Regras</h2>
          </div>
        </div>

        <Card className="bg-sage-dark text-white p-6 rounded-3xl space-y-4">
          <div>
            <h3 className="text-lg font-bold mb-2">Preservação das Obras</h3>
            <ul className="text-sm space-y-1 opacity-90 list-disc list-inside">
              <li>Não toque, suba ou encoste nas esculturas.</li>
              <li>Fotografias são permitidas apenas em áreas sinalizadas.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Comportamento no Espaço</h3>
            <ul className="text-sm space-y-1 opacity-90 list-disc list-inside">
              <li>Mantenha silêncio e respeito ao ambiente artístico.</li>
              <li>Não é permitido correr, gritar ou usar flash.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Acesso Digital</h3>
            <ul className="text-sm space-y-1 opacity-90 list-disc list-inside">
              <li>Não copie ou distribua materiais digitais sem autorização.</li>
              <li>Utilize os recursos interativos apenas para fins educativos e culturais.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Segurança</h3>
            <ul className="text-sm space-y-1 opacity-90 list-disc list-inside">
              <li>Crianças devem estar acompanhadas de um responsável.</li>
              <li>Bolsas grandes e mochilas devem ser deixadas no guarda-volumes.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Sustentabilidade</h3>
            <ul className="text-sm space-y-1 opacity-90 list-disc list-inside">
              <li>Evite o uso de garrafas plásticas descartáveis dentro do Palácio.</li>
              <li>Respeita os jardins e áreas externas.</li>
            </ul>
          </div>
        </Card>

        <footer className="text-center text-sm text-muted-foreground py-4">
          © Direitos reservados 2025
        </footer>
      </div>
    </div>
  );
};

export default Avisos;
