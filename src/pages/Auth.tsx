import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import heroImage from "@/assets/hero-park.jpg";
import api from "@/services/api";
import axios, { AxiosError } from "axios";

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
        // 🔐 LOGIN
        const response = await api.post("/auth/login", {
          email,
          password,
        });

        toast.success(
          typeof response.data === "string"
            ? response.data
            : "Login realizado com sucesso!"
        );

        // Salva token e autenticação
        localStorage.setItem("brennand_auth", "true");

        if (
          response.data &&
          typeof response.data === "object" &&
          "token" in response.data
        ) {
          localStorage.setItem(
            "brennand_token",
            (response.data as { token: string }).token
          );
        }

        navigate("/");
      } else {
        // 🧾 CADASTRO — backend espera "userName", não "name"
        const response = await api.post("/users", {
          userName: name,
          email,
          password,
        });

        if (response.status === 201 || response.status === 200) {
          toast.success("Cadastro realizado com sucesso!");
          setIsLogin(true);
        } else {
          toast.error("Erro ao cadastrar. Tente novamente.");
        }
      }
    } catch (err) {
      console.error("❌ Erro ao conectar com o backend:", err);

      // ✅ Tratamento de erro tipado Axios
      if (axios.isAxiosError(err)) {
        const data = err.response?.data;
        let msgBackend: string;

        if (typeof data === "string") {
          msgBackend = data;
        } else if (
          typeof data === "object" &&
          data !== null &&
          "message" in data &&
          typeof (data as { message: unknown }).message === "string"
        ) {
          msgBackend = (data as { message: string }).message;
        } else {
          msgBackend =
            err.message ||
            err.response?.statusText ||
            "Erro desconhecido ao se conectar com o servidor";
        }

        toast.error(msgBackend);
      } else {
        toast.error("Erro inesperado ao realizar a operação.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Fundo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />

      {/* Card */}
      <Card className="w-full max-w-md z-10 bg-card/95 backdrop-blur">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center">
            Brennand Digital
          </CardTitle>
          <CardDescription className="text-center">
            {isLogin
              ? "Entre com sua conta"
              : "Crie sua conta para continuar"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome apenas no cadastro */}
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Senha */}
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Botão */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              {isLogin ? "Entrar" : "Cadastrar"}
            </Button>

            {/* Alternar login/cadastro */}
            <div className="text-center text-sm">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline"
              >
                {isLogin
                  ? "Não tem conta? Cadastre-se"
                  : "Já tem conta? Faça login"}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
