import {hookData as $a074e1e2d0f0a665$export$653eddfc964b0f8a, useVisibleRangeDescription as $a074e1e2d0f0a665$export$31afe65d91ef6e8} from "./utils.module.js";
import {startOfWeek as $NQfxu$startOfWeek, today as $NQfxu$today} from "@internationalized/date";
import {useMemo as $NQfxu$useMemo} from "react";
import {useLabels as $NQfxu$useLabels, mergeProps as $NQfxu$mergeProps} from "@react-aria/utils";
import {useLocale as $NQfxu$useLocale, useDateFormatter as $NQfxu$useDateFormatter} from "@react-aria/i18n";

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




function $e3031d1f8c9d64eb$export$cb95147730a423f5(props, state) {
    let { startDate: startDate = state.visibleRange.start, endDate: endDate = state.visibleRange.end } = props;
    let { direction: direction } = (0, $NQfxu$useLocale)();
    let onKeyDown = (e)=>{
        switch(e.key){
            case 'Enter':
            case ' ':
                e.preventDefault();
                state.selectFocusedDate();
                break;
            case 'PageUp':
                e.preventDefault();
                e.stopPropagation();
                state.focusPreviousSection(e.shiftKey);
                break;
            case 'PageDown':
                e.preventDefault();
                e.stopPropagation();
                state.focusNextSection(e.shiftKey);
                break;
            case 'End':
                e.preventDefault();
                e.stopPropagation();
                state.focusSectionEnd();
                break;
            case 'Home':
                e.preventDefault();
                e.stopPropagation();
                state.focusSectionStart();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                e.stopPropagation();
                if (direction === 'rtl') state.focusNextDay();
                else state.focusPreviousDay();
                break;
            case 'ArrowUp':
                e.preventDefault();
                e.stopPropagation();
                state.focusPreviousRow();
                break;
            case 'ArrowRight':
                e.preventDefault();
                e.stopPropagation();
                if (direction === 'rtl') state.focusPreviousDay();
                else state.focusNextDay();
                break;
            case 'ArrowDown':
                e.preventDefault();
                e.stopPropagation();
                state.focusNextRow();
                break;
            case 'Escape':
                // Cancel the selection.
                if ('setAnchorDate' in state) {
                    e.preventDefault();
                    state.setAnchorDate(null);
                }
                break;
        }
    };
    let visibleRangeDescription = (0, $a074e1e2d0f0a665$export$31afe65d91ef6e8)(startDate, endDate, state.timeZone, true);
    let { ariaLabel: ariaLabel, ariaLabelledBy: ariaLabelledBy } = (0, $a074e1e2d0f0a665$export$653eddfc964b0f8a).get(state);
    let labelProps = (0, $NQfxu$useLabels)({
        'aria-label': [
            ariaLabel,
            visibleRangeDescription
        ].filter(Boolean).join(', '),
        'aria-labelledby': ariaLabelledBy
    });
    let dayFormatter = (0, $NQfxu$useDateFormatter)({
        weekday: props.weekdayStyle || 'narrow',
        timeZone: state.timeZone
    });
    let { locale: locale } = (0, $NQfxu$useLocale)();
    let weekDays = (0, $NQfxu$useMemo)(()=>{
        let weekStart = (0, $NQfxu$startOfWeek)((0, $NQfxu$today)(state.timeZone), locale);
        return [
            ...new Array(7).keys()
        ].map((index)=>{
            let date = weekStart.add({
                days: index
            });
            let dateDay = date.toDate(state.timeZone);
            return dayFormatter.format(dateDay);
        });
    }, [
        locale,
        state.timeZone,
        dayFormatter
    ]);
    return {
        gridProps: (0, $NQfxu$mergeProps)(labelProps, {
            role: 'grid',
            'aria-readonly': state.isReadOnly || null,
            'aria-disabled': state.isDisabled || null,
            'aria-multiselectable': 'highlightedRange' in state || undefined,
            onKeyDown: onKeyDown,
            onFocus: ()=>state.setFocused(true),
            onBlur: ()=>state.setFocused(false)
        }),
        headerProps: {
            // Column headers are hidden to screen readers to make navigating with a touch screen reader easier.
            // The day names are already included in the label of each cell, so there's no need to announce them twice.
            'aria-hidden': true
        },
        weekDays: weekDays
    };
}


export {$e3031d1f8c9d64eb$export$cb95147730a423f5 as useCalendarGrid};
//# sourceMappingURL=useCalendarGrid.module.js.map
