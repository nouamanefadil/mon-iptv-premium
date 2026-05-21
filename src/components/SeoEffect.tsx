import { useEffect } from "react";
import { setSeo } from "../lib/seo";

type SeoEffectProps = Parameters<typeof setSeo>[0];

export function SeoEffect(props: SeoEffectProps) {
  useEffect(() => {
    setSeo(props);
  }, [props.title, props.description, props.path]);

  return null;
}
