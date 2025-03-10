// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MiCircleErrorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MiCircleErrorIcon(props: MiCircleErrorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm5.793-4.207a1 1 0 011.414 0L12 10.586l2.793-2.793a1 1 0 111.414 1.414L13.414 12l2.793 2.793a1 1 0 01-1.414 1.414L12 13.414l-2.793 2.793a1 1 0 01-1.414-1.414L10.586 12 7.793 9.207a1 1 0 010-1.414z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MiCircleErrorIcon;
/* prettier-ignore-end */
