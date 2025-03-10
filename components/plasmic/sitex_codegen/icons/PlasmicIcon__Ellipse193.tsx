// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse193IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse193Icon(props: Ellipse193IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 59 59"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#jAjaTn6xyuAja)"}>
        <circle
          cx={"29.719"}
          cy={"29.719"}
          r={"21.355"}
          stroke={"currentColor"}
          strokeWidth={".73"}
        ></circle>
      </g>

      <defs>
        <filter
          id={"jAjaTn6xyuAja"}
          x={".705"}
          y={".705"}
          width={"58.029"}
          height={"58.029"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"3.648"}
            result={"effect1_foregroundBlur_833_4800"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse193Icon;
/* prettier-ignore-end */
