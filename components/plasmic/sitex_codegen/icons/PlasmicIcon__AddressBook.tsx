// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AddressBookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AddressBookIcon(props: AddressBookIconProps) {
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
          "M15 10.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm6-6.75v16.5a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5V18H3a.75.75 0 110-1.5h1.5v-3.75H3a.75.75 0 110-1.5h1.5V7.5H3A.75.75 0 013 6h1.5V3.75A1.5 1.5 0 016 2.25h13.5a1.5 1.5 0 011.5 1.5zM17.85 15.3a6.363 6.363 0 00-2.569-2.033 3.75 3.75 0 10-5.057 0A6.362 6.362 0 007.65 15.3a.75.75 0 001.2.9 4.874 4.874 0 017.8 0 .75.75 0 001.2-.9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AddressBookIcon;
/* prettier-ignore-end */
