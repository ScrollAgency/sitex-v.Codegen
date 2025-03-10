// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhCalendarCheckFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhCalendarCheckFillIcon(props: PhCalendarCheckFillIconProps) {
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
          "M19.5 3h-2.25v-.75a.75.75 0 10-1.5 0V3h-7.5v-.75a.75.75 0 00-1.5 0V3H4.5A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-3.594 9.53l-4.5 4.5a.747.747 0 01-1.062 0l-2.25-2.25a.75.75 0 111.062-1.06l1.719 1.72 3.97-3.97a.75.75 0 111.06 1.06zM4.5 7.5v-3h2.25v.75a.75.75 0 001.5 0V4.5h7.5v.75a.75.75 0 101.5 0V4.5h2.25v3h-15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhCalendarCheckFillIcon;
/* prettier-ignore-end */
