// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhMagnifyingGlassIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhMagnifyingGlassIcon(props: PhMagnifyingGlassIconProps) {
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
          "M21.53 20.47l-4.693-4.694a8.26 8.26 0 10-1.06 1.06l4.692 4.695a.75.75 0 101.062-1.062zM3.75 10.5a6.75 6.75 0 116.75 6.75 6.758 6.758 0 01-6.75-6.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhMagnifyingGlassIcon;
/* prettier-ignore-end */
