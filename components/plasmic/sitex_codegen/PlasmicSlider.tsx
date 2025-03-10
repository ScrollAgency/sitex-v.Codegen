// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: orPHpegkXfnsyZCa6kLatK
// Component: g7XFb5mQsHMw

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { BaseSlider } from "@plasmicpkgs/react-aria/skinny/registerSlider";
import Label from "../../Label"; // plasmic-import: BmfV22U3_9Tc/component
import { BaseSliderOutput } from "@plasmicpkgs/react-aria/skinny/registerSliderOutput";
import { BaseSliderTrack } from "@plasmicpkgs/react-aria/skinny/registerSliderTrack";
import SliderThumb from "../../SliderThumb"; // plasmic-import: ZECcAyPJf4bg/component
import Description from "../../Description"; // plasmic-import: 3EP-E6EZOL-j/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: orPHpegkXfnsyZCa6kLatK/projectcss
import sty from "./PlasmicSlider.module.css"; // plasmic-import: g7XFb5mQsHMw/css

createPlasmicElementProxy;

export type PlasmicSlider__VariantMembers = {};
export type PlasmicSlider__VariantsArgs = {};
type VariantPropType = keyof PlasmicSlider__VariantsArgs;
export const PlasmicSlider__VariantProps = new Array<VariantPropType>();

export type PlasmicSlider__ArgsType = {
  showLabel?: boolean;
  showOutputText?: boolean;
  showDescription?: boolean;
  step?: number;
  minValue?: number;
  maxValue?: number;
  outputText?: string;
  filled?: boolean;
  initialValue?: number;
  disabled?: boolean;
  onChange?: (val: number) => void;
  ariaLabel?: string;
  label?: React.ReactNode;
  thumbs?: React.ReactNode;
};
type ArgPropType = keyof PlasmicSlider__ArgsType;
export const PlasmicSlider__ArgProps = new Array<ArgPropType>(
  "showLabel",
  "showOutputText",
  "showDescription",
  "step",
  "minValue",
  "maxValue",
  "outputText",
  "filled",
  "initialValue",
  "disabled",
  "onChange",
  "ariaLabel",
  "label",
  "thumbs"
);

export type PlasmicSlider__OverridesType = {
  ariaSlider?: Flex__<typeof BaseSlider>;
  label?: Flex__<typeof Label>;
  ariaSliderOutput?: Flex__<typeof BaseSliderOutput>;
  background?: Flex__<"div">;
  ariaSliderTrack?: Flex__<typeof BaseSliderTrack>;
  foreground?: Flex__<"div">;
  description?: Flex__<typeof Description>;
};

export interface DefaultSliderProps {
  showLabel?: boolean;
  showOutputText?: boolean;
  showDescription?: boolean;
  step?: number;
  minValue?: number;
  maxValue?: number;
  outputText?: string;
  filled?: boolean;
  initialValue?: number;
  disabled?: boolean;
  onChange?: (val: number) => void;
  ariaLabel?: string;
  label?: React.ReactNode;
  thumbs?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSlider__RenderFunc(props: {
  variants: PlasmicSlider__VariantsArgs;
  args: PlasmicSlider__ArgsType;
  overrides: PlasmicSlider__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          showLabel: true,
          showOutputText: true,
          showDescription: false,
          filled: true,
          initialValue: 50
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "ariaSlider.value",
        type: "readonly",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["initialValue"],

        onChangeProp: "onChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const [$ccVariants, setDollarCcVariants] = React.useState<
    Record<string, boolean>
  >({
    disabled: false
  });
  const updateVariant = React.useCallback(
    (changes: Record<string, boolean>) => {
      setDollarCcVariants(prev => {
        if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
          return prev;
        }
        return { ...prev, ...changes };
      });
    },
    []
  );

  return (
    <BaseSlider
      data-plasmic-name={"ariaSlider"}
      data-plasmic-override={overrides.ariaSlider}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.ariaSlider
      )}
      defaultValue={args.initialValue}
      isDisabled={args.disabled}
      maxValue={args.maxValue}
      minValue={args.minValue}
      onChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, ["ariaSlider", "value"]).apply(
          null,
          eventArgs
        );
      }}
      orientation={"horizontal"}
      plasmicUpdateVariant={updateVariant}
      step={args.step}
      value={generateStateValueProp($state, ["ariaSlider", "value"])}
    >
      {$props.showLabel || $props.showOutputText ? (
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__lqf13)}
        >
          {$props.showLabel ? (
            <Label
              data-plasmic-name={"label"}
              data-plasmic-override={overrides.label}
              className={classNames("__wab_instance", sty.label)}
            >
              {renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ttc8
                    )}
                  >
                    {"Label"}
                  </div>
                ),
                value: args.label
              })}
            </Label>
          ) : null}
          {(() => {
            try {
              return $props.showOutputText;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <BaseSliderOutput
              data-plasmic-name={"ariaSliderOutput"}
              data-plasmic-override={overrides.ariaSliderOutput}
              className={classNames("__wab_instance", sty.ariaSliderOutput)}
            >
              <React.Fragment>
                {$props.outputText ?? $state.ariaSlider.value}
              </React.Fragment>
            </BaseSliderOutput>
          ) : null}
        </Stack__>
      ) : null}
      <div className={classNames(projectcss.all, sty.freeBox__ttWz3)}>
        <div
          data-plasmic-name={"background"}
          data-plasmic-override={overrides.background}
          className={classNames(projectcss.all, sty.background)}
        >
          <BaseSliderTrack
            data-plasmic-name={"ariaSliderTrack"}
            data-plasmic-override={overrides.ariaSliderTrack}
            className={classNames("__wab_instance", sty.ariaSliderTrack)}
            progressBar={
              $props.filled ? (
                <div
                  data-plasmic-name={"foreground"}
                  data-plasmic-override={overrides.foreground}
                  className={classNames(projectcss.all, sty.foreground)}
                />
              ) : null
            }
          >
            {renderPlasmicSlot({
              defaultContents: (
                <SliderThumb
                  className={classNames(
                    "__wab_instance",
                    sty.sliderThumb__uT2Zp
                  )}
                />
              ),

              value: args.thumbs
            })}
          </BaseSliderTrack>
        </div>
      </div>
      {$props.showDescription ? (
        <Description
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames("__wab_instance", sty.description)}
        />
      ) : null}
    </BaseSlider>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaSlider: [
    "ariaSlider",
    "label",
    "ariaSliderOutput",
    "background",
    "ariaSliderTrack",
    "foreground",
    "description"
  ],
  label: ["label"],
  ariaSliderOutput: ["ariaSliderOutput"],
  background: ["background", "ariaSliderTrack", "foreground"],
  ariaSliderTrack: ["ariaSliderTrack", "foreground"],
  foreground: ["foreground"],
  description: ["description"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaSlider: typeof BaseSlider;
  label: typeof Label;
  ariaSliderOutput: typeof BaseSliderOutput;
  background: "div";
  ariaSliderTrack: typeof BaseSliderTrack;
  foreground: "div";
  description: typeof Description;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSlider__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSlider__VariantsArgs;
    args?: PlasmicSlider__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSlider__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSlider__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSlider__ArgProps,
          internalVariantPropNames: PlasmicSlider__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSlider__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaSlider") {
    func.displayName = "PlasmicSlider";
  } else {
    func.displayName = `PlasmicSlider.${nodeName}`;
  }
  return func;
}

export const PlasmicSlider = Object.assign(
  // Top-level PlasmicSlider renders the root element
  makeNodeComponent("ariaSlider"),
  {
    // Helper components rendering sub-elements
    label: makeNodeComponent("label"),
    ariaSliderOutput: makeNodeComponent("ariaSliderOutput"),
    background: makeNodeComponent("background"),
    ariaSliderTrack: makeNodeComponent("ariaSliderTrack"),
    foreground: makeNodeComponent("foreground"),
    description: makeNodeComponent("description"),

    // Metadata about props expected for PlasmicSlider
    internalVariantProps: PlasmicSlider__VariantProps,
    internalArgProps: PlasmicSlider__ArgProps
  }
);

export default PlasmicSlider;
/* prettier-ignore-end */
