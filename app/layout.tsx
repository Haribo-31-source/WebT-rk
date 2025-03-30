"use client";

import "./globals.css"
import { useState , useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  
  useEffect(() => {
    // Menü açıldığında CSS tekrar uygulanıyor
    const header = document.getElementById("nav");
    if (header) {
      header.classList.toggle("open", menuOpen);
    }
  }, [menuOpen]);
  return (
    <html lang="en">
      <body>
      <header id="he1">
        <nav id="nav" className={menuOpen ? "open" : "close"}><ul>
        <p onClick={() => setMenuOpen(!menuOpen)}>Menu</p>
        <h1>WebTürk</h1>
        <li>Hakkımızda</li>
        <li>Satış</li>
        <li>İletişime Geç</li>
        <li>Ürünler</li>
        <li>Sponsorluk</li>
        </ul></nav>
      </header>
      {children}
      <footer>
      <p>© 2025 WebTürk</p>
      <p>Tüm hakları saklıdır.</p>
    </footer>
</body>
    </html>
  );
}