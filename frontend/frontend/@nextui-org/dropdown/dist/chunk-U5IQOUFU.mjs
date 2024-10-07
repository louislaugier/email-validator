"use client";

// src/use-dropdown.ts
import { useProviderContext } from "@nextui-org/system";
import { useMenuTriggerState } from "@react-stately/menu";
import { useMenuTrigger } from "@react-aria/menu";
import { dropdown } from "@nextui-org/theme";
import { clsx } from "@nextui-org/shared-utils";
import { mergeRefs } from "@nextui-org/react-utils";
import { ariaShouldCloseOnInteractOutside } from "@nextui-org/aria-utils";
import { useMemo, useRef } from "react";
import { mergeProps } from "@react-aria/utils";
var getMenuItem = (props, key) => {
  if (props) {
    const mergedChildren = Array.isArray(props.children) ? props.children : [...(props == null ? void 0 : props.items) || []];
    if (mergedChildren && mergedChildren.length) {
      const item = mergedChildren.find((item2) => {
        if (item2.key === key) {
          return item2;
        }
      }) || {};
      return item;
    }
  }
  return null;
};
var getCloseOnSelect = (props, key, item) => {
  const mergedItem = item || getMenuItem(props, key);
  if (mergedItem && mergedItem.props && "closeOnSelect" in mergedItem.props) {
    return mergedItem.props.closeOnSelect;
  }
  return props == null ? void 0 : props.closeOnSelect;
};
function useDropdown(props) {
  var _a;
  const globalContext = useProviderContext();
  const {
    as,
    triggerRef: triggerRefProp,
    isOpen,
    defaultOpen,
    onOpenChange,
    isDisabled,
    type = "menu",
    trigger = "press",
    placement = "bottom",
    closeOnSelect = true,
    shouldBlockScroll = true,
    classNames: classNamesProp,
    disableAnimation = (_a = globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _a : false,
    onClose,
    className,
    ...otherProps
  } = props;
  const Component = as || "div";
  const triggerRef = useRef(null);
  const menuTriggerRef = triggerRefProp || triggerRef;
  const menuRef = useRef(null);
  const popoverRef = useRef(null);
  const state = useMenuTriggerState({
    trigger,
    isOpen,
    defaultOpen,
    onOpenChange: (isOpen2) => {
      onOpenChange == null ? void 0 : onOpenChange(isOpen2);
      if (!isOpen2) {
        onClose == null ? void 0 : onClose();
      }
    }
  });
  const { menuTriggerProps, menuProps } = useMenuTrigger(
    { type, trigger, isDisabled },
    state,
    menuTriggerRef
  );
  const classNames = useMemo(
    () => dropdown({
      className
    }),
    [className]
  );
  const onMenuAction = (menuCloseOnSelect) => {
    if (menuCloseOnSelect !== void 0 && !menuCloseOnSelect) {
      return;
    }
    if (closeOnSelect) {
      state.close();
    }
  };
  const getPopoverProps = (props2 = {}) => {
    const popoverProps = mergeProps(otherProps, props2);
    return {
      state,
      placement,
      ref: popoverRef,
      disableAnimation,
      shouldBlockScroll,
      scrollRef: menuRef,
      triggerRef: menuTriggerRef,
      ...popoverProps,
      classNames: {
        ...classNamesProp,
        ...props2.classNames,
        content: clsx(classNames, classNamesProp == null ? void 0 : classNamesProp.content, props2.className)
      },
      shouldCloseOnInteractOutside: (popoverProps == null ? void 0 : popoverProps.shouldCloseOnInteractOutside) ? popoverProps.shouldCloseOnInteractOutside : (element) => ariaShouldCloseOnInteractOutside(element, triggerRef, state)
    };
  };
  const getMenuTriggerProps = (originalProps = {}, _ref = null) => {
    const { onPress, onPressStart, ...otherMenuTriggerProps } = menuTriggerProps;
    return {
      ...mergeProps(otherMenuTriggerProps, { isDisabled }, originalProps),
      ref: mergeRefs(_ref, triggerRef)
    };
  };
  const getMenuProps = (props2, _ref = null) => {
    return {
      ref: mergeRefs(_ref, menuRef),
      menuProps,
      closeOnSelect,
      ...mergeProps(props2, {
        onAction: (key, item) => {
          const closeOnSelect2 = getCloseOnSelect(props2, key, item);
          onMenuAction(closeOnSelect2);
        },
        onClose: state.close
      })
    };
  };
  return {
    Component,
    menuRef,
    menuProps,
    classNames,
    closeOnSelect,
    onClose: state.close,
    autoFocus: state.focusStrategy || true,
    disableAnimation,
    getPopoverProps,
    getMenuProps,
    getMenuTriggerProps
  };
}

export {
  useDropdown
};
