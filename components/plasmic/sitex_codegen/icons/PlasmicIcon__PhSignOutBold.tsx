// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhSignOutBoldIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhSignOutBoldIcon(props: PhSignOutBoldIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.656 18.563a1.031 1.031 0 01-1.031 1.03h-5.5a1.031 1.031 0 01-1.031-1.03V3.438a1.031 1.031 0 011.031-1.032h5.5a1.031 1.031 0 010 2.063H5.156V17.53h4.469a1.031 1.031 0 011.031 1.032zm9.324-8.293l-3.438-3.437a1.033 1.033 0 10-1.46 1.46l1.676 1.676H9.625a1.031 1.031 0 100 2.062h7.133l-1.678 1.677a1.033 1.033 0 001.461 1.46l3.438-3.437a1.03 1.03 0 000-1.46z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhSignOutBoldIcon;
/* prettier-ignore-end */
