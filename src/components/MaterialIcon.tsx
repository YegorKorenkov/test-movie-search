import React, { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';
import { TypeMaterialIconName } from 'src/shared/types';

const MaterialIcon: FC<{ name: TypeMaterialIconName } & { onClick?: () => void }> = ({
  name,
  onClick,
}) => {
  const IconComponent = MaterialIcons[name];
  return <IconComponent onClick={onClick && onClick} /> || <MaterialIcons.MdDragIndicator />;
};

export default MaterialIcon;
