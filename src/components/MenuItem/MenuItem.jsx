import { useI18n } from "@amoutonbrady/solid-i18n";
import { useBasePath } from "../../hooks/useTranslation";
import { classnames } from "../../helper/classnames";
import { Link } from "@solidjs/router";
import IconArrowRight from "../../icons/ArrowRight";

function MenuItem(props) {
  const { id, name, link, target, subItems, showIcon = false } = props;
  const [t] = useI18n();
  const basePath = useBasePath();
  const href = (link && target !== "_blank" ? basePath + link : "").replace("//", "/");
  const hrefs = [href, href.slice(0, -1)];
  const className = classnames([
    "menu-item",
    hrefs.includes(window.location.pathname) ? "current" : false,
  ]);
  const label = t(`menuItems.${name}`);

  return (
    <li class={className} data-identifier={subItems && id}>
      <Show when={link}>
        <Link
          href={target === "_blank" ? link : href}
          target={target || "_self"}
          rel={target === "_blank" && "noopener noreferrer"}
          class="c-link"
        >
          {label}

          <Show when={showIcon}>
            <IconArrowRight />
          </Show>
        </Link>
      </Show>

      <Show when={!link}>
        <button aria-label={label}>{label}</button>
      </Show>
    </li>
  );
}

export default MenuItem;
