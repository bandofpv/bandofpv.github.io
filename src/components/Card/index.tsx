import React, { ReactNode, PropsWithChildren } from 'react';
import { paramCase } from 'param-case';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function Card({
  id,
  icon,
  title,
  description,
  to,
  tag,
  className,
}: PropsWithChildren<{
  id?: string;
  icon?: JSX.Element;
  title: string;
  description?: string;
  to: string;
  tag?: {
    label: string;
    color: string;
    description: string;
  };
  className?: string;
}>) {
  return (
    <Link to={to} className={clsx("homepage-card",className)}>
      {icon && <div className="icon">{icon}</div>}
      <div className="card-content">
        <div className="title" id={id && paramCase(title)}>
          {title}
        </div>
        {description && <div className="description">{description}</div>}
      </div>
    </Link>
  );
}
