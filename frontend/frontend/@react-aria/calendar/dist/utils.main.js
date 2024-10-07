var $bd6dc95a3c5ee5cd$exports = require("./intlStrings.main.js");
var $idq92$internationalizeddate = require("@internationalized/date");
var $idq92$reactariai18n = require("@react-aria/i18n");
var $idq92$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "hookData", () => $df1d8e967e73ec8e$export$653eddfc964b0f8a);
$parcel$export(module.exports, "getEraFormat", () => $df1d8e967e73ec8e$export$134cbb7fb09a9522);
$parcel$export(module.exports, "useSelectedDateDescription", () => $df1d8e967e73ec8e$export$b6df97c887c38e1a);
$parcel$export(module.exports, "useVisibleRangeDescription", () => $df1d8e967e73ec8e$export$31afe65d91ef6e8);
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



const $df1d8e967e73ec8e$export$653eddfc964b0f8a = new WeakMap();
function $df1d8e967e73ec8e$export$134cbb7fb09a9522(date) {
    return (date === null || date === void 0 ? void 0 : date.calendar.identifier) === 'gregory' && date.era === 'BC' ? 'short' : undefined;
}
function $df1d8e967e73ec8e$export$b6df97c887c38e1a(state) {
    let stringFormatter = (0, $idq92$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($bd6dc95a3c5ee5cd$exports))), '@react-aria/calendar');
    let start, end;
    if ('highlightedRange' in state) ({ start: start, end: end } = state.highlightedRange || {});
    else start = end = state.value;
    let dateFormatter = (0, $idq92$reactariai18n.useDateFormatter)({
        weekday: 'long',
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        era: $df1d8e967e73ec8e$export$134cbb7fb09a9522(start) || $df1d8e967e73ec8e$export$134cbb7fb09a9522(end),
        timeZone: state.timeZone
    });
    let anchorDate = 'anchorDate' in state ? state.anchorDate : null;
    return (0, $idq92$react.useMemo)(()=>{
        // No message if currently selecting a range, or there is nothing highlighted.
        if (!anchorDate && start && end) {
            // Use a single date message if the start and end dates are the same day,
            // otherwise include both dates.
            if ((0, $idq92$internationalizeddate.isSameDay)(start, end)) {
                let date = dateFormatter.format(start.toDate(state.timeZone));
                return stringFormatter.format('selectedDateDescription', {
                    date: date
                });
            } else {
                let dateRange = $df1d8e967e73ec8e$var$formatRange(dateFormatter, stringFormatter, start, end, state.timeZone);
                return stringFormatter.format('selectedRangeDescription', {
                    dateRange: dateRange
                });
            }
        }
        return '';
    }, [
        start,
        end,
        anchorDate,
        state.timeZone,
        stringFormatter,
        dateFormatter
    ]);
}
function $df1d8e967e73ec8e$export$31afe65d91ef6e8(startDate, endDate, timeZone, isAria) {
    let stringFormatter = (0, $idq92$reactariai18n.useLocalizedStringFormatter)((0, ($parcel$interopDefault($bd6dc95a3c5ee5cd$exports))), '@react-aria/calendar');
    let era = $df1d8e967e73ec8e$export$134cbb7fb09a9522(startDate) || $df1d8e967e73ec8e$export$134cbb7fb09a9522(endDate);
    let monthFormatter = (0, $idq92$reactariai18n.useDateFormatter)({
        month: 'long',
        year: 'numeric',
        era: era,
        calendar: startDate.calendar.identifier,
        timeZone: timeZone
    });
    let dateFormatter = (0, $idq92$reactariai18n.useDateFormatter)({
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        era: era,
        calendar: startDate.calendar.identifier,
        timeZone: timeZone
    });
    return (0, $idq92$react.useMemo)(()=>{
        // Special case for month granularity. Format as a single month if only a
        // single month is visible, otherwise format as a range of months.
        if ((0, $idq92$internationalizeddate.isSameDay)(startDate, (0, $idq92$internationalizeddate.startOfMonth)(startDate))) {
            if ((0, $idq92$internationalizeddate.isSameDay)(endDate, (0, $idq92$internationalizeddate.endOfMonth)(startDate))) return monthFormatter.format(startDate.toDate(timeZone));
            else if ((0, $idq92$internationalizeddate.isSameDay)(endDate, (0, $idq92$internationalizeddate.endOfMonth)(endDate))) return isAria ? $df1d8e967e73ec8e$var$formatRange(monthFormatter, stringFormatter, startDate, endDate, timeZone) : monthFormatter.formatRange(startDate.toDate(timeZone), endDate.toDate(timeZone));
        }
        return isAria ? $df1d8e967e73ec8e$var$formatRange(dateFormatter, stringFormatter, startDate, endDate, timeZone) : dateFormatter.formatRange(startDate.toDate(timeZone), endDate.toDate(timeZone));
    }, [
        startDate,
        endDate,
        monthFormatter,
        dateFormatter,
        stringFormatter,
        timeZone,
        isAria
    ]);
}
function $df1d8e967e73ec8e$var$formatRange(dateFormatter, stringFormatter, start, end, timeZone) {
    let parts = dateFormatter.formatRangeToParts(start.toDate(timeZone), end.toDate(timeZone));
    // Find the separator between the start and end date. This is determined
    // by finding the last shared literal before the end range.
    let separatorIndex = -1;
    for(let i = 0; i < parts.length; i++){
        let part = parts[i];
        if (part.source === 'shared' && part.type === 'literal') separatorIndex = i;
        else if (part.source === 'endRange') break;
    }
    // Now we can combine the parts into start and end strings.
    let startValue = '';
    let endValue = '';
    for(let i = 0; i < parts.length; i++){
        if (i < separatorIndex) startValue += parts[i].value;
        else if (i > separatorIndex) endValue += parts[i].value;
    }
    return stringFormatter.format('dateRange', {
        startDate: startValue,
        endDate: endValue
    });
}


//# sourceMappingURL=utils.main.js.map
