var $a3815f0132802737$exports = require("./useMenu.main.js");
var $byVdR$reactariautils = require("@react-aria/utils");
var $byVdR$reactstatelycollections = require("@react-stately/collections");
var $byVdR$reactariainteractions = require("@react-aria/interactions");
var $byVdR$reactariaselection = require("@react-aria/selection");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useMenuItem", () => $38191ed02615ec07$export$9d32628fc2aea7da);
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




function $38191ed02615ec07$export$9d32628fc2aea7da(props, state, ref) {
    let { key: key, closeOnSelect: closeOnSelect, isVirtualized: isVirtualized, 'aria-haspopup': hasPopup, onPressStart: pressStartProp, onPressUp: pressUpProp, onPress: onPress, onPressChange: onPressChange, onPressEnd: onPressEnd, onHoverStart: hoverStartProp, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus, onFocusChange: onFocusChange, onBlur: onBlur } = props;
    let isTrigger = !!hasPopup;
    var _props_isDisabled;
    let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : state.selectionManager.isDisabled(key);
    var _props_isSelected;
    let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : state.selectionManager.isSelected(key);
    let data = (0, $a3815f0132802737$exports.menuData).get(state);
    let item = state.collection.getItem(key);
    let onClose = props.onClose || data.onClose;
    let router = (0, $byVdR$reactariautils.useRouter)();
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
    let labelId = (0, $byVdR$reactariautils.useSlotId)();
    let descriptionId = (0, $byVdR$reactariautils.useSlotId)();
    let keyboardId = (0, $byVdR$reactariautils.useSlotId)();
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
        ariaProps['aria-setsize'] = (0, $byVdR$reactstatelycollections.getItemCount)(state.collection);
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
    let { itemProps: itemProps, isFocused: isFocused } = (0, $byVdR$reactariaselection.useSelectableItem)({
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
    let { pressProps: pressProps, isPressed: isPressed } = (0, $byVdR$reactariainteractions.usePress)({
        onPressStart: onPressStart,
        onPress: onPress,
        onPressUp: onPressUp,
        onPressChange: onPressChange,
        onPressEnd: onPressEnd,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps } = (0, $byVdR$reactariainteractions.useHover)({
        isDisabled: isDisabled,
        onHoverStart (e) {
            if (!(0, $byVdR$reactariainteractions.isFocusVisible)()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
            hoverStartProp === null || hoverStartProp === void 0 ? void 0 : hoverStartProp(e);
        },
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd
    });
    let { keyboardProps: keyboardProps } = (0, $byVdR$reactariainteractions.useKeyboard)({
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
    let { focusProps: focusProps } = (0, $byVdR$reactariainteractions.useFocus)({
        onBlur: onBlur,
        onFocus: onFocus,
        onFocusChange: onFocusChange
    });
    let domProps = (0, $byVdR$reactariautils.filterDOMProps)(item.props);
    delete domProps.id;
    let linkProps = (0, $byVdR$reactariautils.useLinkProps)(item.props);
    return {
        menuItemProps: {
            ...ariaProps,
            ...(0, $byVdR$reactariautils.mergeProps)(domProps, linkProps, isTrigger ? {
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


//# sourceMappingURL=useMenuItem.main.js.map
