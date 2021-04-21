import { FC } from "react";
import SVG from 'react-inlinesvg';

import './Icon.scss';

interface IconProps {
  name: string;
  className?: string;
  title?: string;
  onClick?: (event: any) => void;
};

const Icon: FC<IconProps> = ({ name, title, onClick, className = '' }: IconProps) => (
  <SVG 
    onClick={onClick}
    cacheRequests={true}
    className={`svg-icon ${className}`.trim()}
    src={`/svg/${name}.svg`}
    uniqueHash="nkGedVx5"
    title={title}
    uniquifyIDs={true}
  />
);

export default Icon;
