import { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FaHome, FaRegChartBar, FaUserPlus, FaChevronRight } from "react-icons/fa";

export default function Menu() {
  const [menuFechado, setMenuFechado] = useState(true);

  const menuItens = [
    { id: 1, url: "/", icon: FaHome, text: "Home" },
    { id: 2, url: "/grafico", icon: FaRegChartBar, text: "Dashboard" },
    { id: 3, url: "/usuarios/cadastrar", icon: FaUserPlus, text: "Cadastrar Usuários" },
  ];

  return (
    <div className={`${styles.menu} ${menuFechado ? styles.menuFechado : ""}`}>
      <div className={styles.close_container}>
        <div
          onClick={() => {
            setMenuFechado(!menuFechado);
          }}
          className={styles.close_item}
        >
          <FaChevronRight
            style={{
              transform: menuFechado ? "none" : "rotate(180deg)",
              transition: "0.5s",
            }}
            className={`${styles.image} ${!menuFechado ? styles.rotated : ""}`}
            size={24}
            alt={menuFechado ? "Abrir Menu" : "Fechar Menu"}
            title={menuFechado ? "Abrir Menu" : "Fechar Menu"}
          />
        </div>
      </div>
      <div className={styles.menu_itens}>
        {menuItens.map((item) => (
          <Link className={styles.menu_item} href={item.url} key={item.id}>
            <div>
              <item.icon
                className={styles.image}
                size={22}
                alt={item.text}
                title={item.text}
              />
            </div>
            <div className={styles.menu_text}>
              <p className={!menuFechado ? styles.text : ""}>
                {!menuFechado ? item.text : ""}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
