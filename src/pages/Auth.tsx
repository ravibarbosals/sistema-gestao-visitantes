import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import heroImage from "@/assets/hero-park.jpg";
import api from "@/services/api";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && !name)) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    try {
      if (isLogin) {
  const response = await api.post("/users", {
    userName: email, // ✅ backend espera "userName"
    password: password,
  });

  toast.success(
    typeof response.data === "string"
      ? response.data
      : "Login realizado com sucesso!"
  );

  localStorage.setItem("brennand_auth", "true");

  if (response.data && response.data.token) {
    localStorage.setItem("brennand_token", response.data.token);
  }

  navigate("/");
      } else {
        // CADASTRO -> /users
        const response = await api.post("/users", {
          userName: email, // ajuste caso backend use "email"
          password: password,
          name: name,
        });

        toast.success("Cadastro realizado com sucesso!");
        setIsLogin(true);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      // axios error structure
      const msg =
        err?.response?.data ||
        err?.response?.statusText ||
        err?.message ||
        "Erro de conexão com o servidor";
      toast.error(typeof msg === "string" ? msg : "Erro no login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />

      <Card className="w-full max-w-md z-10 bg-card/95 backdrop-blur">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center">Brennand Digital</CardTitle>
          <CardDescription className="text-center">
            {isLogin ? "Entre com sua conta" : "Crie sua conta para continuar"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" type="text" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              {isLogin ? "Entrar" : "Cadastrar"}
            </Button>

            <div className="text-center text-sm">
              <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-primary hover:underline">
                {isLogin ? "Não tem conta? Cadastre-se" : "Já tem conta? Faça login"}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
