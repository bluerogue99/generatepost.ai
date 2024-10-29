function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(null); // Track active item

  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key} onClick={() => setActiveItem(title)}>
      <MenuItem className={activeItem === title ? "bg-blue-100" : ""}>
        {title}
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      {/* ... Existing code ... */}
      <MenuList className="hidden rounded-xl lg:block">
        {/* Nested Menu */}
        <Menu
          placement="right-start"
          allowHover
          offset={15}
          open={openNestedMenu}
          handler={setopenNestedMenu}
        >
          <MenuHandler className="flex items-center justify-between">
            <MenuItem>
              Figma
              <ChevronUpIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${isMenuOpen ? "rotate-90" : ""}`}
              />
            </MenuItem>
          </MenuHandler>  
          <MenuList className="rounded-xl">{renderItems}</MenuList>
        </Menu>
        {/* Other Menu Items */}
        <MenuItem>React</MenuItem>
        <MenuItem>TailwindCSS</MenuItem>
      </MenuList>
      {/* Mobile View */}
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          {/* ... Existing mobile code ... */}
        </Collapse>
      </div>
    </React.Fragment>
  );
}
