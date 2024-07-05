import React, { ReactNode, PropsWithChildren } from 'react';
import { paramCase } from 'param-case';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function CardSection({
  id,
  title,
  children,
  description,
  className,
  hasSubSections = false,
  HeadingTag = 'h3',
}: {
  id?: string;
  title: string;
  children: ReactNode;
  description?: ReactNode;
  hasSubSections?: boolean;
  HeadingTag?: keyof JSX.IntrinsicElements;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'homepage-section',
        hasSubSections && 'has-sub-sections',
        className
      )}
    >
      {title && <HeadingTag id={id ?? paramCase(title)}>{title}</HeadingTag>}
      {description && <p className="section-description">{description}</p>}
      <div className="section-content">{children}</div>
    </div>
  );
}
