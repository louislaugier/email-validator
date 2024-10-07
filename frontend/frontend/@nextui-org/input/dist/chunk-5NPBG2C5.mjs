"use client";
import {
  useInput
} from "./chunk-ZBD2AF2V.mjs";

// src/textarea.tsx
import { dataAttr } from "@nextui-org/shared-utils";
import { forwardRef } from "@nextui-org/system";
import { mergeProps } from "@react-aria/utils";
import { useMemo, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { jsx, jsxs } from "react/jsx-runtime";
var Textarea = forwardRef(
  ({
    style,
    minRows = 3,
    maxRows = 8,
    cacheMeasurements = false,
    disableAutosize = false,
    onHeightChange,
    ...otherProps
  }, ref) => {
    const {
      Component,
      label,
      description,
      startContent,
      endContent,
      hasHelper,
      shouldLabelBeOutside,
      shouldLabelBeInside,
      isInvalid,
      errorMessage,
      getBaseProps,
      getLabelProps,
      getInputProps,
      getInnerWrapperProps,
      getInputWrapperProps,
      getHelperWrapperProps,
      getDescriptionProps,
      getErrorMessageProps
    } = useInput({ ...otherProps, ref, isMultiline: true });
    const [hasMultipleRows, setIsHasMultipleRows] = useState(minRows > 1);
    const [isLimitReached, setIsLimitReached] = useState(false);
    const labelContent = label ? /* @__PURE__ */ jsx("label", { ...getLabelProps(), children: label }) : null;
    const inputProps = getInputProps();
    const handleHeightChange = (height, meta) => {
      if (minRows === 1) {
        setIsHasMultipleRows(height >= meta.rowHeight * 2);
      }
      if (maxRows > minRows) {
        const limitReached = height >= maxRows * meta.rowHeight;
        setIsLimitReached(limitReached);
      }
      onHeightChange == null ? void 0 : onHeightChange(height, meta);
    };
    const content = disableAutosize ? /* @__PURE__ */ jsx("textarea", { ...inputProps, style: mergeProps(inputProps.style, style != null ? style : {}) }) : /* @__PURE__ */ jsx(
      TextareaAutosize,
      {
        ...inputProps,
        cacheMeasurements,
        "data-hide-scroll": dataAttr(!isLimitReached),
        maxRows,
        minRows,
        style: mergeProps(inputProps.style, style != null ? style : {}),
        onHeightChange: handleHeightChange
      }
    );
    const innerWrapper = useMemo(() => {
      if (startContent || endContent) {
        return /* @__PURE__ */ jsxs("div", { ...getInnerWrapperProps(), children: [
          startContent,
          content,
          endContent
        ] });
      }
      return /* @__PURE__ */ jsx("div", { ...getInnerWrapperProps(), children: content });
    }, [startContent, inputProps, endContent, getInnerWrapperProps]);
    return /* @__PURE__ */ jsxs(Component, { ...getBaseProps(), children: [
      shouldLabelBeOutside ? labelContent : null,
      /* @__PURE__ */ jsxs("div", { ...getInputWrapperProps(), "data-has-multiple-rows": dataAttr(hasMultipleRows), children: [
        shouldLabelBeInside ? labelContent : null,
        innerWrapper
      ] }),
      hasHelper ? /* @__PURE__ */ jsx("div", { ...getHelperWrapperProps(), children: isInvalid && errorMessage ? /* @__PURE__ */ jsx("div", { ...getErrorMessageProps(), children: errorMessage }) : description ? /* @__PURE__ */ jsx("div", { ...getDescriptionProps(), children: description }) : null }) : null
    ] });
  }
);
Textarea.displayName = "NextUI.Textarea";
var textarea_default = Textarea;

export {
  textarea_default
};
