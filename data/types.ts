import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Category = {
    title: string;
    href: string;
    description: string;
    colorClass: string;
    color: string;
    icon?: IconProp | undefined;
};