import React from 'react';
import { Grid, GridRow, GridColumn, Button, Image } from 'unchained_ui/client/components';

const Registry = (comp, children, data) => {
  switch (comp) {
    case 'grid': return <Grid {...data} >{children}</Grid>;
    case 'row': return <GridRow {...data} >{children}</GridRow>;
    case 'column': return <GridColumn {...data} >{children}</GridColumn>;
    case 'button': return <Button {...data} >{children}</Button>;
    case 'image': return <Image {...data} >{children}</Image>;
    default: return <div>{`We are yet to build '${comp}' component!`}</div>;
  }
};

export default Registry;
