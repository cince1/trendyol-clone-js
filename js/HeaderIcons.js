function HeaderIcons() {
  const iconsContainer = document.querySelector(".icons");

  const headerIcons = [
    {
      id: crypto.randomUUID(),
      icon: "<i class='fa-regular fa-user actual-icon'></i>",
      title: "Hesabım",
      type: "Dropdown",
      subItem: true,
    },
    {
      id: crypto.randomUUID(),
      icon: "<i class='fa-regular fa-heart actual-icon'></i>",
      title: "Favorilerim",
      type: "Modal",
      subItem: false,
    },
    {
      id: crypto.randomUUID(),
      icon: "<i class='fa-solid fa-basket-shopping actual-icon'></i>",
      title: "Sepetim",
      type: "Modal",
      subItem: false,
    },
  ];

  function iconFactory(icon) {
    const template = `<div key="${
      icon.id
    }" class="icon-wrapper icon-${icon.type.toLowerCase()}">
                            <div class="icon-container">${icon.icon}</div>
                            <p class="mb-0">${icon.title}</p>
                            ${
                              icon.subItem
                                ? "<div class='icon-inner-dropdown'><ul class='icon-dropdown-list mb-0 list-unstyled'></ul></div>"
                                : ""
                            }
                        </div>`;

    return template;
  }

  headerIcons.forEach((icon) => {
    iconsContainer.innerHTML += iconFactory(icon);
  });
}

export default HeaderIcons;
