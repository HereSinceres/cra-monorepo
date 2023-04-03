import React, { PropsWithChildren } from 'react';

import c from './index.module.scss';

type Props = {
  text: string
};

export const Button = (props: PropsWithChildren<Props>) => {
    return <button className={c.blue}>{props.text}</button>;
};
