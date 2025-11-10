import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex min-h-screen">
      {/* 🔹 Sidebar fixa à esquerda */}
      <aside className="w-64 bg-sage text-white p-4 flex flex-col fixed h-full">
        <Header variant="sage" />
      </aside>

      {/* 🔹 Conteúdo principal */}
      <main className="flex-1 ml-64 p-8 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};
