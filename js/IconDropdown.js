function IconDropdown() {
  const dropdownItems = [
    {
      id: crypto.randomUUID(),
      title: "Tüm Siparişlerim",
      icon: "",
    },
    {
      id: crypto.randomUUID(),
      title: "Değerlendirmelerim",
      icon: "",
    },
    {
      id: crypto.randomUUID(),
      title: "Kullanıcı Bilgilerim",
      icon: "",
    },
    {
      id: crypto.randomUUID(),
      title: "Çıkış Yap",
      icon: "",
    },
  ];

  const iconDropdownList = document.querySelector(".icon-dropdown-list");

  dropdownItems.forEach((item) => {
    const template = `<li> ${item.title} </li>`;

    iconDropdownList.innerHTML += template;
  });
}

export default IconDropdown;
