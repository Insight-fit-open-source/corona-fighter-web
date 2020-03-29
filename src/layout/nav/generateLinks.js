import React from 'react';
import Link from 'next/link';

export default (links, current) =>
  Object.keys(links).map(key => (
    <Link href={links[key].link} as={links[key].as} key={key}>
      <a className={current === links[key].as ? 'active' : ''}>{key}</a>
    </Link>
  ));
