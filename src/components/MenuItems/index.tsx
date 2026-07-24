const menus = [
  { title: "Masculino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
  { title: "Feminino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
  { title: "Outlet", items: ["Masculino", "Feminino"] },
  { title: "Nossas lojas", items: ["Loja física", "Loja online"] },
  { title: "Sobre", items: ["Quem Somos", "Missão"] },
];

const MenuItems = () => {
  return (
    <div className="flex flex-col gap-8 sm:flex-row">
      {menus.map(({ title, items }) => (
        <nav key={title}>
          <ul>
            <li>
              <p className="font-normal text-surface-alt text-xl">{title}</p>
            </li>
            {items.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-medium text-xl transition-colors hover:text-[#cccccc]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};

export default MenuItems;
