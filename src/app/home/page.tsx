"use client";

import { Card } from "@/components/Card";
import { CountUp } from "@/components/CountUp";
import Link from "next/link";

export default function Inicio() {
  const items = [
    { name: "Cuentas" },
    { name: "Compras" },
    { name: "Transferencias" },
    { name: "Pagos" },
    { name: "Inversiones" },
    { name: "Prestamos" },
    { name: "Beneficios" },
  ];

  const CARD_DATA = [
    {
      title: "Saldo en pesos",
      total: 323618,
      icon: "/dollar.svg",
      isMoney: true,
    },
    {
      title: "Saldo en dolares",
      total: 5000,
      icon: "/dollar.svg",
      isMoney: true,
    },
  ];

  return (
    <main>
      <nav className="bg-gray-800 text-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-8">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/BancoBradburyLogoWhite.svg"
              className="h-8"
              alt="Banco Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Banco Bradbury
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto"
              id="navbar-user"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    Ayuda
                  </a>
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-600"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="/user.svg"
                alt="Foto de usuario"
              />
            </button>
          </div>
        </div>
      </nav>
      <div className="mt-8">
        <div className="grid grid-cols-12 gap-4 p-4 max-w-screen-xl mx-auto">
          <div className="col-span-2">
            <ul className="w-full flex flex-col">
              {items.map((item) => (
                <li
                  key={item.name}
                  className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-white border border-gray-300 hover:text-indigo-600 transition-all duration-300 text-gray-900 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-10">
            <h2 className="text-2xl">
              Hola, <span className="font-bold">Andrés</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-500 mt-12">
              Estado de tu cuenta
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-3 gap-x-8 mt-4">
              {CARD_DATA.map(
                (card, index) =>
                  card && (
                    <Card key={index}>
                      <div>
                        <div className="absolute -mt-10 -ml-2 h-16 w-16 rounded-xl bg-gradient-to-tr from-secondary-600 to-secondary-300 text-center text-white shadow-lg">
                          <img
                            src={card.icon}
                            alt="icon"
                            className="mt-4 h-7 w-16"
                          />
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-strongLetter">
                            {card.title}
                          </p>
                          <div className="flex items-end justify-end mt-4">
                            <h4 className="text-5xl font-bold text-primary-500">
                              <CountUp
                                initial={0}
                                final={card.total}
                                duration={1500}
                                isMoney={card.isMoney}
                              />
                            </h4>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
              )}
            </div>
            <h3 className="text-2xl font-semibold text-gray-500 mt-12">
              Acceso rápido
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
              {[
                { title: "Transferencias", icon: "/transfer.svg" },
                { title: "Pagos", icon: "/payment.svg" },
                { title: "Prestamos", icon: "/loan.svg" },
                { title: "Beneficios", icon: "/benefits.svg" },
                { title: "Ayuda", icon: "/help.svg" },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <img src={item.icon} alt="icon" className="h-8 w-auto" />
                    <p className="text-md font-semibold text-gray-900">
                      {item.title}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            <h3 className="text-2xl font-semibold text-gray-500 mt-12">
              Ofertas y Promociones
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {[
                {
                  title: "Tarjeta de Crédito Platinum",
                  offer: "0% de interés por 6 meses",
                },
                { title: "Préstamo Personal", offer: "Tasa especial 12%" },
                {
                  title: "Inversiones",
                  offer: "10% de descuento en comisión",
                },
              ].map((promo, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition duration-200"
                >
                  <div className="p-4">
                    <p className="text-lg font-bold">{promo.title}</p>
                    <p className="text-gray-500">{promo.offer}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
