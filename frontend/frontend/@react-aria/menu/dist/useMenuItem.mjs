import {menuData as $d5336fe17ce95402$export$6f49b4016bfc8d56} from "./useMenu.mjs";
import {useRouter as $7Kjv5$useRouter, useSlotId as $7Kjv5$useSlotId, filterDOMProps as $7Kjv5$filterDOMProps, useLinkProps as $7Kjv5$useLinkProps, mergeProps as $7Kjv5$mergeProps} from "@react-aria/utils";
import {getItemCount as $7Kjv5$getItemCount} from "@react-stately/collections";
import {usePress as $7Kjv5$usePress, useHover as $7Kjv5$useHover, isFocusVisible as $7Kjv5$isFocusVisible, useKeyboard as $7Kjv5$useKeyboard, useFocus as $7Kjv5$useFocus} from "@react-aria/interactions";
import {useSelectableItem as $7Kjv5$useSelectableItem} from "@react-aria/selection";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $a2e5df62f93c7633$export$9d32628fc2aea7da(props, state, ref) {
    let { key: key, closeOnSelect: closeOnSelect, isVirtualized: isVirtualized, 'aria-haspopup': hasPopup, onPressStart: pressStartProp, onPressUp: pressUpProp, onPress: onPress, onPressChange: onPressChange, onPressEnd: onPressEnd, onHoverStart: hoverStartProp, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus, onFocusChange: onFocusChange, onBlur: onBlur } = props;
    let isTrigger = !!hasPopup;
    var _props_isDisabled;
    let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : state.selectionManager.isDisabled(key);
    var _props_isSelected;
    let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : state.selectionManager.isSelected(key);
    let data = (0, $d5336fe17ce95402$export$6f49b4016bfc8d56).get(state);
    let item = state.collection.getItem(key);
    let onClose = props.onClose || data.onClose;
    let router = (0, $7Kjv5$useRouter)();
    let performAction = (e)=>{
        var _item_props;
        if (isTrigger) return;
        if (item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.onAction) item.props.onAction();
        if (props.onAction) props.onAction(key);
        else if (data.onAction) data.onAction(key);
        if (e.target instanceof HTMLAnchorElement) router.open(e.target, e, item.props.href, item.props.routerOptions);
    };
    let role = 'menuitem';
    if (!isTrigger) {
        if (state.selectionManager.selectionMode === 'single') role = 'menuitemradio';
        else if (state.selectionManager.selectionMode === 'multiple') role = 'menuitemcheckbox';
    }
    let labelId = (0, $7Kjv5$useSlotId)();
    let descriptionId = (0, $7Kjv5$useSlotId)();
    let keyboardId = (0, $7Kjv5$useSlotId)();
    let ariaProps = {
        'aria-disabled': isDisabled || undefined,
        role: role,
        'aria-label': props['aria-label'],
        'aria-labelledby': labelId,
        'aria-describedby': [
            descriptionId,
            keyboardId
        ].filter(Boolean).join(' ') || undefined,
        'aria-controls': props['aria-controls'],
        'aria-haspopup': hasPopup,
        'aria-expanded': props['aria-expanded']
    };
    if (state.selectionManager.selectionMode !== 'none' && !isTrigger) ariaProps['aria-checked'] = isSelected;
    if (isVirtualized) {
        ariaProps['aria-posinset'] = item === null || item === void 0 ? void 0 : item.index;
        ariaProps['aria-setsize'] = (0, $7Kjv5$getItemCount)(state.collection);
    }
    let onPressStart = (e)=>{
        if (e.pointerType === 'keyboard') performAction(e);
        pressStartProp === null || pressStartProp === void 0 ? void 0 : pressStartProp(e);
    };
    let onPressUp = (e)=>{
        if (e.pointerType !== 'keyboard') {
            performAction(e);
            // Pressing a menu item should close by default in single selection mode but not multiple
            // selection mode, except if overridden by the closeOnSelect prop.
            if (!isTrigger && onClose && (closeOnSelect !== null && closeOnSelect !== void 0 ? closeOnSelect : state.selectionManager.selectionMode !== 'multiple' || state.selectionManager.isLink(key))) onClose();
        }
        pressUpProp === null || pressUpProp === void 0 ? void 0 : pressUpProp(e);
    };
    let { itemProps: itemProps, isFocused: isFocused } = (0, $7Kjv5$useSelectableItem)({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: true,
        allowsDifferentPressOrigin: true,
        // Disable all handling of links in useSelectable item
        // because we handle it ourselves. The behavior of menus
        // is slightly different from other collections because
        // actions are performed on key down rather than key up.
        linkBehavior: 'none'
    });
    let { pressProps: pressProps, isPressed: isPressed } = (0, $7Kjv5$usePress)({
        onPressStart: onPressStart,
        onPress: onPress,
        onPressUp: onPressUp,
        onPressChange: onPressChange,
        onPressEnd: onPressEnd,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps } = (0, $7Kjv5$useHover)({
        isDisabled: isDisabled,
        onHoverStart (e) {
            if (!(0, $7Kjv5$isFocusVisible)()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
            hoverStartProp === null || hoverStartProp === void 0 ? void 0 : hoverStartProp(e);
        },
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd
    });
    let { keyboardProps: keyboardProps } = (0, $7Kjv5$useKeyboard)({
        onKeyDown: (e)=>{
            // Ignore repeating events, which may have started on the menu trigger before moving
            // focus to the menu item. We want to wait for a second complete key press sequence.
            if (e.repeat) {
                e.continuePropagation();
                return;
            }
            switch(e.key){
                case ' ':
                    if (!isDisabled && state.selectionManager.selectionMode === 'none' && !isTrigger && closeOnSelect !== false && onClose) onClose();
                    break;
                case 'Enter':
                    // The Enter key should always close on select, except if overridden.
                    if (!isDisabled && closeOnSelect !== false && !isTrigger && onClose) onClose();
                    break;
                default:
                    if (!isTrigger) e.continuePropagation();
                    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
                    break;
            }
        },
        onKeyUp: onKeyUp
    });
    let { focusProps: focusProps } = (0, $7Kjv5$useFocus)({
        onBlur: onBlur,
        onFocus: onFocus,
        onFocusChange: onFocusChange
    });
    let domProps = (0, $7Kjv5$filterDOMProps)(item.props);
    delete domProps.id;
    let linkProps = (0, $7Kjv5$useLinkProps)(item.props);
    return {
        menuItemProps: {
            ...ariaProps,
            ...(0, $7Kjv5$mergeProps)(domProps, linkProps, isTrigger ? {
                onFocus: itemProps.onFocus,
                'data-key': itemProps['data-key']
            } : itemProps, pressProps, hoverProps, keyboardProps, focusProps),
            tabIndex: itemProps.tabIndex != null ? -1 : undefined
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        keyboardShortcutProps: {
            id: keyboardId
        },
        isFocused: isFocused,
        isSelected: isSelected,
        isPressed: isPressed,
        isDisabled: isDisabled
    };
}


export {$a2e5df62f93c7633$export$9d32628fc2aea7da as useMenuItem};
//# sourceMappingURL=useMenuItem.module.js.map
