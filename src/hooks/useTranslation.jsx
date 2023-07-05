import { useParams } from "@solidjs/router";
import { getLanguage } from "../helper/translations";

export function useTranslation(locale) {
  const params = useParams();
  locale(getLanguage(params.language));
}
