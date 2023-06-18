function MenuItem(props) {
  const { id, name, link, target, subItems } = props;
  const className = "menu-item" + (window.location.pathname === link ? " current" : '');

  return (
    <li class={className} data-identifier={subItems && id}>
      <Show when={link}>
        <a
          href={link}
          target={target}
          rel={target === "_blank" && "noopener noreferrer"}
        >
          {name}
        </a>
      </Show>

      <Show when={!link}>
        <button>{name}</button>
      </Show>
    </li>
  );
}

export default MenuItem;
