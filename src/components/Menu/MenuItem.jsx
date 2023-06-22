import IconArrowRight from "../../icons/ArrowRight";

function MenuItem(props) {
  const { id, name, link, target, subItems, showIcon = false } = props;
  const className =
    "menu-item" + (window.location.pathname === link ? " current" : "");

  return (
    <li class={className} data-identifier={subItems && id}>
      <Show when={link}>
        <a
          href={link}
          target={target}
          rel={target === "_blank" && "noopener noreferrer"}
          class="c-link"
        >
          {name}

          <Show when={showIcon}>
            <IconArrowRight />
          </Show>
        </a>
      </Show>

      <Show when={!link}>
        <button>{name}</button>
      </Show>
    </li>
  );
}

export default MenuItem;
