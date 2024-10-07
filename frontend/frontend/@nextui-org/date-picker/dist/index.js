"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DatePicker: () => date_picker_default,
  DateRangePicker: () => date_range_picker_default,
  DateRangePickerField: () => date_range_picker_field_default,
  useDatePicker: () => useDatePicker,
  useDateRangePicker: () => useDateRangePicker
});
module.exports = __toCommonJS(src_exports);

// src/date-picker.tsx
var import_react14 = require("react");
var import_react15 = require("react");
var import_system3 = require("@nextui-org/system");
var import_button = require("@nextui-org/button");
var import_date_input = require("@nextui-org/date-input");
var import_popover = require("@nextui-org/popover");
var import_calendar = require("@nextui-org/calendar");

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var import_react = require("react");
var MotionConfigContext = (0, import_react.createContext)({
  transformPagePoint: (p) => p,
  isStatic: false,
  reducedMotion: "never"
});

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var import_react2 = require("react");
var PresenceContext = (0, import_react2.createContext)(null);

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var import_react3 = require("react");

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof document !== "undefined";

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = isBrowser ? import_react3.useLayoutEffect : import_react3.useEffect;

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs
var MotionGlobalConfig = {
  skipAnimations: false,
  useManualTiming: false
};

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/frameloop/render-step.mjs
var Queue = class {
  constructor() {
    this.order = [];
    this.scheduled = /* @__PURE__ */ new Set();
  }
  add(process2) {
    if (!this.scheduled.has(process2)) {
      this.scheduled.add(process2);
      this.order.push(process2);
      return true;
    }
  }
  remove(process2) {
    const index = this.order.indexOf(process2);
    if (index !== -1) {
      this.order.splice(index, 1);
      this.scheduled.delete(process2);
    }
  }
  clear() {
    this.order.length = 0;
    this.scheduled.clear();
  }
};
function createRenderStep(runNextFrame) {
  let thisFrame = new Queue();
  let nextFrame = new Queue();
  let numToRun = 0;
  let isProcessing = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (queue.add(callback) && addToCurrentFrame && isProcessing) {
        numToRun = thisFrame.order.length;
      }
      return callback;
    },
    cancel: (callback) => {
      nextFrame.remove(callback);
      toKeepAlive.delete(callback);
    },
    process: (frameData2) => {
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      [thisFrame, nextFrame] = [nextFrame, thisFrame];
      nextFrame.clear();
      numToRun = thisFrame.order.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = thisFrame.order[i];
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
          }
          callback(frameData2);
        }
      }
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/frameloop/batcher.mjs
var stepsOrder = [
  "read",
  "resolveKeyframes",
  "update",
  "preRender",
  "render",
  "postRender"
];
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
  let runNextFrame = false;
  let useDefaultElapsed = true;
  const state = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  const steps2 = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(() => runNextFrame = true);
    return acc;
  }, {});
  const processStep = (stepId) => {
    steps2[stepId].process(state);
  };
  const processBatch = () => {
    const timestamp = MotionGlobalConfig.useManualTiming ? state.timestamp : performance.now();
    runNextFrame = false;
    state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
    state.timestamp = timestamp;
    state.isProcessing = true;
    stepsOrder.forEach(processStep);
    state.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  const wake = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  const schedule = stepsOrder.reduce((acc, key) => {
    const step = steps2[key];
    acc[key] = (process2, keepAlive = false, immediate = false) => {
      if (!runNextFrame)
        wake();
      return step.schedule(process2, keepAlive, immediate);
    };
    return acc;
  }, {});
  const cancel = (process2) => stepsOrder.forEach((key) => steps2[key].cancel(process2));
  return { schedule, cancel, state, steps: steps2 };
}

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var import_react4 = require("react");
var LayoutGroupContext = (0, import_react4.createContext)({});

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/utils/noop.mjs
var noop = (any) => any;

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/utils/errors.mjs
var warning = noop;
var invariant = noop;
if (process.env.NODE_ENV !== "production") {
  warning = (check, message) => {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = (check, message) => {
    if (!check) {
      throw new Error(message);
    }
  };
}

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/utils/use-constant.mjs
var import_react5 = require("react");
function useConstant(init) {
  const ref = (0, import_react5.useRef)(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/frameloop/frame.mjs
var { schedule: frame, cancel: cancelFrame, state: frameData, steps } = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var import_jsx_runtime3 = require("react/jsx-runtime");
var import_react11 = require("react");

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/utils/use-force-update.mjs
var import_react7 = require("react");

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
var import_react6 = require("react");
function useIsMounted() {
  const isMounted = (0, import_react6.useRef)(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/utils/use-force-update.mjs
function useForceUpdate() {
  const isMounted = useIsMounted();
  const [forcedRenderCount, setForcedRenderCount] = (0, import_react7.useState)(0);
  const forceRender = (0, import_react7.useCallback)(() => {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  const deferredForceRender = (0, import_react7.useCallback)(() => frame.postRender(forceRender), [forceRender]);
  return [deferredForceRender, forcedRenderCount];
}

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var import_jsx_runtime2 = require("react/jsx-runtime");
var React2 = __toESM(require("react"), 1);
var import_react9 = require("react");

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_react8 = require("react");
var PopChildMeasure = class extends React.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
    }
    return null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};
function PopChild({ children, isPresent }) {
  const id = (0, import_react8.useId)();
  const ref = (0, import_react8.useRef)(null);
  const size = (0, import_react8.useRef)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  const { nonce } = (0, import_react8.useContext)(MotionConfigContext);
  (0, import_react8.useInsertionEffect)(() => {
    const { width, height, top, left } = size.current;
    if (isPresent || !ref.current || !width || !height)
      return;
    ref.current.dataset.motionPopId = id;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    document.head.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
    }
    return () => {
      document.head.removeChild(style);
    };
  }, [isPresent]);
  return (0, import_jsx_runtime.jsx)(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, children: React.cloneElement(children, { ref }) });
}

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id = (0, import_react9.useId)();
  const context = (0, import_react9.useMemo)(
    () => ({
      id,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    }),
    presenceAffectsLayout ? [Math.random()] : [isPresent]
  );
  (0, import_react9.useMemo)(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  React2.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  if (mode === "popLayout") {
    children = (0, import_jsx_runtime2.jsx)(PopChild, { isPresent, children });
  }
  return (0, import_jsx_runtime2.jsx)(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
var import_react10 = require("react");
function useUnmountEffect(callback) {
  return (0, import_react10.useEffect)(() => () => callback(), []);
}

// ../../../node_modules/.pnpm/framer-motion@11.2.12_@emotion+is-prop-valid@0.8.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
  children.forEach((child) => {
    const key = getChildKey(child);
    allChildren.set(key, child);
  });
}
function onlyElements(children) {
  const filtered = [];
  import_react11.Children.forEach(children, (child) => {
    if ((0, import_react11.isValidElement)(child))
      filtered.push(child);
  });
  return filtered;
}
var AnimatePresence = ({ children, custom, initial = true, onExitComplete, exitBeforeEnter, presenceAffectsLayout = true, mode = "sync" }) => {
  invariant(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
  const forceRender = (0, import_react11.useContext)(LayoutGroupContext).forceRender || useForceUpdate()[0];
  const isMounted = useIsMounted();
  const filteredChildren = onlyElements(children);
  let childrenToRender = filteredChildren;
  const exitingChildren = (0, import_react11.useRef)(/* @__PURE__ */ new Map()).current;
  const presentChildren = (0, import_react11.useRef)(childrenToRender);
  const allChildren = (0, import_react11.useRef)(/* @__PURE__ */ new Map()).current;
  const isInitialRender = (0, import_react11.useRef)(true);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    updateChildLookup(filteredChildren, allChildren);
    presentChildren.current = childrenToRender;
  });
  useUnmountEffect(() => {
    isInitialRender.current = true;
    allChildren.clear();
    exitingChildren.clear();
  });
  if (isInitialRender.current) {
    return (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: childrenToRender.map((child) => (0, import_jsx_runtime3.jsx)(PresenceChild, { isPresent: true, initial: initial ? void 0 : false, presenceAffectsLayout, mode, children: child }, getChildKey(child))) });
  }
  childrenToRender = [...childrenToRender];
  const presentKeys = presentChildren.current.map(getChildKey);
  const targetKeys = filteredChildren.map(getChildKey);
  const numPresent = presentKeys.length;
  for (let i = 0; i < numPresent; i++) {
    const key = presentKeys[i];
    if (targetKeys.indexOf(key) === -1 && !exitingChildren.has(key)) {
      exitingChildren.set(key, void 0);
    }
  }
  if (mode === "wait" && exitingChildren.size) {
    childrenToRender = [];
  }
  exitingChildren.forEach((component, key) => {
    if (targetKeys.indexOf(key) !== -1)
      return;
    const child = allChildren.get(key);
    if (!child)
      return;
    const insertionIndex = presentKeys.indexOf(key);
    let exitingComponent = component;
    if (!exitingComponent) {
      const onExit = () => {
        exitingChildren.delete(key);
        const leftOverKeys = Array.from(allChildren.keys()).filter((childKey) => !targetKeys.includes(childKey));
        leftOverKeys.forEach((leftOverKey) => allChildren.delete(leftOverKey));
        presentChildren.current = filteredChildren.filter((presentChild) => {
          const presentChildKey = getChildKey(presentChild);
          return presentChildKey === key || leftOverKeys.includes(presentChildKey);
        });
        if (!exitingChildren.size) {
          if (isMounted.current === false)
            return;
          forceRender();
          onExitComplete && onExitComplete();
        }
      };
      exitingComponent = (0, import_jsx_runtime3.jsx)(PresenceChild, { isPresent: false, onExitComplete: onExit, custom, presenceAffectsLayout, mode, children: child }, getChildKey(child));
      exitingChildren.set(key, exitingComponent);
    }
    childrenToRender.splice(insertionIndex, 0, exitingComponent);
  });
  childrenToRender = childrenToRender.map((child) => {
    const key = child.key;
    return exitingChildren.has(key) ? child : (0, import_jsx_runtime3.jsx)(PresenceChild, { isPresent: true, presenceAffectsLayout, mode, children: child }, getChildKey(child));
  });
  if (process.env.NODE_ENV !== "production" && mode === "wait" && childrenToRender.length > 1) {
    console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  }
  return (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: exitingChildren.size ? childrenToRender : childrenToRender.map((child) => (0, import_react11.cloneElement)(child)) });
};

// src/date-picker.tsx
var import_shared_icons = require("@nextui-org/shared-icons");

// src/use-date-picker.ts
var import_system2 = require("@nextui-org/system");
var import_react13 = require("react");
var import_theme2 = require("@nextui-org/theme");
var import_datepicker = require("@react-stately/datepicker");
var import_datepicker2 = require("@react-aria/datepicker");
var import_shared_utils2 = require("@nextui-org/shared-utils");
var import_utils3 = require("@react-aria/utils");
var import_aria_utils = require("@nextui-org/aria-utils");

// src/use-date-picker-base.ts
var import_shared_utils = require("@nextui-org/shared-utils");
var import_theme = require("@nextui-org/theme");
var import_react12 = require("react");
var import_system = require("@nextui-org/system");
var import_utils = require("@react-aria/utils");
var import_react_utils = require("@nextui-org/react-utils");
var import_i18n = require("@react-aria/i18n");
var import_utils2 = require("@react-stately/utils");

// intl/messages.ts
var messages_default = {
  "ar-AE": {
    endTime: "\u0648\u0642\u062A \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621",
    startTime: "\u0648\u0642\u062A \u0627\u0644\u0628\u062F\u0621",
    time: "\u0627\u0644\u0648\u0642\u062A"
  },
  "bg-BG": {
    endTime: "\u041A\u0440\u0430\u0435\u043D \u0447\u0430\u0441",
    startTime: "\u041D\u0430\u0447\u0430\u043B\u0435\u043D \u0447\u0430\u0441",
    time: "\u0412\u0440\u0435\u043C\u0435"
  },
  "cs-CZ": {
    endTime: "Kone\u010Dn\xFD \u010Das",
    startTime: "Po\u010D\xE1te\u010Dn\xED \u010Das",
    time: "\u010Cas"
  },
  "da-DK": {
    endTime: "Sluttidspunkt",
    startTime: "Starttidspunkt",
    time: "Klokkesl\xE6t"
  },
  "de-DE": {
    endTime: "Endzeit",
    startTime: "Startzeit",
    time: "Uhrzeit"
  },
  "el-GR": {
    endTime: "\u03A7\u03C1\u03CC\u03BD\u03BF\u03C2 \u03BB\u03AE\u03BE\u03B7\u03C2",
    startTime: "\u038F\u03C1\u03B1 \u03AD\u03BD\u03B1\u03C1\u03BE\u03B7\u03C2",
    time: "\u03A7\u03C1\u03CC\u03BD\u03BF\u03C2"
  },
  "en-US": {
    time: "Time",
    startTime: "Start time",
    endTime: "End time"
  },
  "es-ES": {
    endTime: "Hora de finalizaci\xF3n",
    startTime: "Hora de inicio",
    time: "Hora"
  },
  "et-EE": {
    endTime: "L\xF5puaeg",
    startTime: "Algusaeg",
    time: "Aeg"
  },
  "fi-FI": {
    endTime: "P\xE4\xE4ttymisaika",
    startTime: "Alkamisaika",
    time: "Aika"
  },
  "fr-FR": {
    endTime: "Heure de fin",
    startTime: "Heure de d\xE9but",
    time: "Heure"
  },
  "he-IL": {
    endTime: "\u05E9\u05E2\u05EA \u05E1\u05D9\u05D5\u05DD",
    startTime: "\u05E9\u05E2\u05EA \u05D4\u05EA\u05D7\u05DC\u05D4",
    time: "\u05D6\u05DE\u05DF"
  },
  "hr-HR": {
    endTime: "Vrijeme zavr\u0161etka",
    startTime: "Vrijeme po\u010Detka",
    time: "Vrijeme"
  },
  "hu-HU": {
    endTime: "Befejez\xE9s ideje",
    startTime: "Kezd\xE9s ideje",
    time: "Id\u0151"
  },
  "it-IT": {
    endTime: "Ora di fine",
    startTime: "Ora di inizio",
    time: "Ora"
  },
  "ja-JP": {
    endTime: "\u7D42\u4E86\u6642\u523B",
    startTime: "\u958B\u59CB\u6642\u523B",
    time: "\u6642\u523B"
  },
  "ko-KR": {
    endTime: "\uC885\uB8CC \uC2DC\uAC04",
    startTime: "\uC2DC\uC791 \uC2DC\uAC04",
    time: "\uC2DC\uAC04"
  },
  "it-LT": {
    endTime: "Pabaigos laikas",
    startTime: "Prad\u017Eios laikas",
    time: "Laikas"
  },
  "lv-LV": {
    endTime: "Beigu laiks",
    startTime: "S\u0101kuma laiks",
    time: "Laiks"
  },
  "nb-NO": {
    endTime: "Sluttid",
    startTime: "Starttid",
    time: "Tid"
  },
  "nl-NL": {
    endTime: "Eindtijd",
    startTime: "Starttijd",
    time: "Tijd"
  },
  "pl-PL": {
    endTime: "Godzina ko\u0144cowa",
    startTime: "Godzina pocz\u0105tkowa",
    time: "Godzina"
  },
  "pt-BR": {
    endTime: "Hora final",
    startTime: "Hora inicial",
    time: "Hora"
  },
  "pt-PT": {
    endTime: "Terminar tempo",
    startTime: "Iniciar tempo",
    time: "Tempo"
  },
  "ro-RO": {
    endTime: "Ora de sf\xE2r\u0219it",
    startTime: "Ora de \xEEnceput",
    time: "Ora"
  },
  "ru-RU": {
    endTime: "\u0412\u0440\u0435\u043C\u044F \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F",
    startTime: "\u0412\u0440\u0435\u043C\u044F \u043D\u0430\u0447\u0430\u043B\u0430",
    time: "\u0412\u0440\u0435\u043C\u044F"
  },
  "sk-SK": {
    endTime: "\u010Cas ukon\u010Denia",
    startTime: "\u010Cas za\u010Diatku",
    time: "\u010Cas"
  },
  "sl-SI": {
    endTime: "Kon\u010Dni \u010Das",
    startTime: "Za\u010Detni \u010Das",
    time: "\u010Cas"
  },
  "sr-SP": {
    endTime: "Zavr\u0161no vreme",
    startTime: "Po\u010Detno vreme",
    time: "Vreme"
  },
  "sv-SE": {
    endTime: "Sluttid",
    startTime: "Starttid",
    time: "Tid"
  },
  "tr-TR": {
    endTime: "Biti\u015F saati",
    startTime: "Ba\u015Flang\u0131\xE7 saati",
    time: "Saat"
  },
  "uk-UA": {
    endTime: "\u0427\u0430\u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F",
    startTime: "\u0427\u0430\u0441 \u043F\u043E\u0447\u0430\u0442\u043A\u0443",
    time: "\u0427\u0430\u0441"
  },
  "zh-CN": {
    endTime: "\u7ED3\u675F\u65F6\u95F4",
    startTime: "\u5F00\u59CB\u65F6\u95F4",
    time: "\u65F6\u95F4"
  },
  "zh-TW": {
    endTime: "\u7D50\u675F\u6642\u9593",
    startTime: "\u958B\u59CB\u6642\u9593",
    time: "\u6642\u9593"
  }
};

// src/use-date-picker-base.ts
function useDatePickerBase(originalProps) {
  var _a, _b, _c, _d;
  const globalContext = (0, import_system.useProviderContext)();
  const [props, variantProps] = (0, import_system.mapPropsVariants)(originalProps, import_theme.dateInput.variantKeys);
  const {
    as,
    ref,
    label,
    endContent,
    selectorIcon,
    inputRef,
    isInvalid,
    errorMessage,
    description,
    startContent,
    validationState,
    validationBehavior,
    visibleMonths = 1,
    pageBehavior = "visible",
    calendarWidth = 256,
    isDateUnavailable,
    shouldForceLeadingZeros,
    showMonthAndYearPickers = false,
    selectorButtonProps: userSelectorButtonProps = {},
    popoverProps: userPopoverProps = {},
    timeInputProps: userTimeInputProps = {},
    calendarProps: userCalendarProps = {},
    CalendarTopContent,
    CalendarBottomContent,
    createCalendar: createCalendar2
  } = props;
  const {
    isHeaderExpanded,
    isHeaderDefaultExpanded,
    onHeaderExpandedChange,
    ...restUserCalendarProps
  } = userCalendarProps;
  const handleHeaderExpandedChange = (0, import_react12.useCallback)(
    (isExpanded) => {
      onHeaderExpandedChange == null ? void 0 : onHeaderExpandedChange(isExpanded || false);
    },
    [onHeaderExpandedChange]
  );
  const [isCalendarHeaderExpanded, setIsCalendarHeaderExpanded] = (0, import_utils2.useControlledState)(isHeaderExpanded, isHeaderDefaultExpanded != null ? isHeaderDefaultExpanded : false, handleHeaderExpandedChange);
  const domRef = (0, import_react_utils.useDOMRef)(ref);
  const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  let stringFormatter = (0, import_i18n.useLocalizedStringFormatter)(messages_default);
  const isDefaultColor = originalProps.color === "default" || !originalProps.color;
  const hasMultipleMonths = visibleMonths > 1;
  const placeholder = originalProps == null ? void 0 : originalProps.placeholderValue;
  const timePlaceholder = placeholder && "hour" in placeholder ? placeholder : null;
  const timeMinValue = originalProps.minValue && "hour" in originalProps.minValue ? originalProps.minValue : null;
  const timeMaxValue = originalProps.maxValue && "hour" in originalProps.maxValue ? originalProps.maxValue : null;
  const slotsProps = {
    popoverProps: (0, import_utils.mergeProps)(
      {
        offset: 13,
        placement: "bottom",
        triggerScaleOnOpen: false,
        disableAnimation
      },
      userPopoverProps
    ),
    selectorButtonProps: (0, import_utils.mergeProps)(
      {
        isIconOnly: true,
        radius: "full",
        size: "sm",
        variant: "light",
        disableAnimation
      },
      userSelectorButtonProps
    ),
    calendarProps: (0, import_utils.mergeProps)(
      {
        showHelper: false,
        visibleMonths,
        pageBehavior,
        isDateUnavailable,
        showMonthAndYearPickers,
        isHeaderExpanded: isCalendarHeaderExpanded,
        onHeaderExpandedChange: setIsCalendarHeaderExpanded,
        color: isDefaultColor ? "primary" : originalProps.color,
        disableAnimation
      },
      restUserCalendarProps
    )
  };
  const dateInputProps = {
    as,
    label,
    ref: domRef,
    inputRef,
    description,
    startContent,
    validationState,
    shouldForceLeadingZeros,
    isInvalid,
    errorMessage,
    validationBehavior,
    "data-invalid": (0, import_shared_utils.dataAttr)(originalProps == null ? void 0 : originalProps.isInvalid)
  };
  const timeInputProps = {
    ...userTimeInputProps,
    size: "sm",
    labelPlacement: "outside-left",
    label: (userTimeInputProps == null ? void 0 : userTimeInputProps.label) || stringFormatter.format("time"),
    placeholderValue: timePlaceholder,
    hourCycle: props.hourCycle,
    hideTimeZone: props.hideTimeZone,
    validationBehavior
  };
  const popoverProps = {
    ...slotsProps.popoverProps,
    children: (_d = (_c = slotsProps.popoverProps) == null ? void 0 : _c.children) != null ? _d : [],
    triggerRef: domRef
  };
  const calendarProps = {
    ...slotsProps.calendarProps,
    calendarWidth,
    "data-slot": "calendar"
  };
  const selectorButtonProps = {
    ...slotsProps.selectorButtonProps,
    "data-slot": "selector-button"
  };
  const selectorIconProps = {
    "data-slot": "selector-icon"
  };
  const onClose = () => {
    if (isHeaderExpanded === void 0) {
      setIsCalendarHeaderExpanded(false);
    }
  };
  return {
    domRef,
    endContent,
    selectorIcon,
    createCalendar: createCalendar2,
    stringFormatter,
    hasMultipleMonths,
    slotsProps,
    timeMinValue,
    timeMaxValue,
    visibleMonths,
    isCalendarHeaderExpanded,
    disableAnimation,
    CalendarTopContent,
    CalendarBottomContent,
    variantProps,
    dateInputProps,
    timeInputProps,
    popoverProps,
    calendarProps,
    userTimeInputProps,
    selectorButtonProps,
    selectorIconProps,
    onClose
  };
}

// src/use-date-picker.ts
function useDatePicker({
  className,
  classNames,
  ...originalProps
}) {
  var _a, _b;
  const globalContext = (0, import_system2.useProviderContext)();
  const validationBehavior = (_b = (_a = originalProps.validationBehavior) != null ? _a : globalContext == null ? void 0 : globalContext.validationBehavior) != null ? _b : "aria";
  const {
    domRef,
    endContent,
    selectorIcon,
    createCalendar: createCalendar2,
    isCalendarHeaderExpanded,
    disableAnimation,
    CalendarTopContent,
    slotsProps,
    timeMinValue,
    timeMaxValue,
    CalendarBottomContent,
    dateInputProps,
    timeInputProps,
    popoverProps,
    calendarProps,
    variantProps,
    userTimeInputProps,
    selectorButtonProps,
    selectorIconProps,
    onClose
  } = useDatePickerBase({ ...originalProps, validationBehavior });
  let state = (0, import_datepicker.useDatePickerState)({
    ...originalProps,
    validationBehavior,
    shouldCloseOnSelect: () => !state.hasTime,
    onOpenChange: (isOpen) => {
      if (!isOpen) {
        onClose();
      }
    }
  });
  const popoverTriggerRef = (0, import_react13.useRef)(null);
  const baseStyles = (0, import_shared_utils2.clsx)(classNames == null ? void 0 : classNames.base, className);
  const slots = (0, import_react13.useMemo)(
    () => (0, import_theme2.datePicker)({
      ...variantProps,
      className
    }),
    [(0, import_shared_utils2.objectToDeps)(variantProps), className]
  );
  let {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps: ariaCalendarProps,
    descriptionProps,
    errorMessageProps
  } = (0, import_datepicker2.useDatePicker)({ ...originalProps, validationBehavior }, state, domRef);
  originalProps.maxValue && "hour" in originalProps.maxValue ? originalProps.maxValue : null;
  const timeGranularity = state.granularity === "hour" || state.granularity === "minute" || state.granularity === "second" ? state.granularity : null;
  const showTimeField = !!timeGranularity;
  const getDateInputProps = () => {
    return {
      ...dateInputProps,
      classNames: { ...originalProps == null ? void 0 : originalProps.dateInputClassNames },
      groupProps,
      labelProps,
      createCalendar: createCalendar2,
      errorMessageProps,
      descriptionProps,
      ...(0, import_utils3.mergeProps)(variantProps, fieldProps, {
        minValue: originalProps.minValue,
        maxValue: originalProps.maxValue,
        fullWidth: true,
        disableAnimation
      }),
      className: slots.base({ class: baseStyles }),
      innerWrapperProps: {
        ref: popoverTriggerRef
      },
      "data-open": (0, import_shared_utils2.dataAttr)(state.isOpen)
    };
  };
  const getTimeInputProps = () => {
    var _a2, _b2;
    if (!showTimeField)
      return {};
    return {
      ...timeInputProps,
      value: state.timeValue,
      onChange: state.setTimeValue,
      granularity: timeGranularity,
      minValue: timeMinValue != null ? timeMinValue : void 0,
      maxValue: timeMaxValue != null ? timeMaxValue : void 0,
      classNames: {
        base: slots.timeInput({
          class: (0, import_shared_utils2.clsx)(classNames == null ? void 0 : classNames.timeInput, (_a2 = userTimeInputProps == null ? void 0 : userTimeInputProps.classNames) == null ? void 0 : _a2.base)
        }),
        label: slots.timeInputLabel({
          class: (0, import_shared_utils2.clsx)(classNames == null ? void 0 : classNames.timeInputLabel, (_b2 = userTimeInputProps == null ? void 0 : userTimeInputProps.classNames) == null ? void 0 : _b2.label)
        })
      }
    };
  };
  const getPopoverProps = (props = {}) => {
    var _a2, _b2;
    return {
      state,
      dialogProps,
      ...popoverProps,
      triggerRef: popoverTriggerRef,
      classNames: {
        content: slots.popoverContent({
          class: (0, import_shared_utils2.clsx)(
            classNames == null ? void 0 : classNames.popoverContent,
            (_b2 = (_a2 = slotsProps.popoverProps) == null ? void 0 : _a2.classNames) == null ? void 0 : _b2["content"],
            props.className
          )
        })
      },
      shouldCloseOnInteractOutside: (popoverProps == null ? void 0 : popoverProps.shouldCloseOnInteractOutside) ? popoverProps.shouldCloseOnInteractOutside : (element) => (0, import_aria_utils.ariaShouldCloseOnInteractOutside)(element, popoverTriggerRef, state)
    };
  };
  const getCalendarProps = () => {
    return {
      ...ariaCalendarProps,
      ...calendarProps,
      classNames: {
        base: slots.calendar({ class: classNames == null ? void 0 : classNames.calendar }),
        content: slots.calendarContent({ class: classNames == null ? void 0 : classNames.calendarContent })
      }
    };
  };
  const getSelectorButtonProps = () => {
    return {
      ...buttonProps,
      ...selectorButtonProps,
      onPress: state.toggle,
      className: slots.selectorButton({ class: classNames == null ? void 0 : classNames.selectorButton })
    };
  };
  const getSelectorIconProps = () => {
    return {
      ...selectorIconProps,
      className: slots.selectorIcon({ class: classNames == null ? void 0 : classNames.selectorIcon })
    };
  };
  return {
    state,
    endContent,
    selectorIcon,
    showTimeField,
    isCalendarHeaderExpanded,
    disableAnimation,
    CalendarTopContent,
    CalendarBottomContent,
    getDateInputProps,
    getPopoverProps,
    getSelectorButtonProps,
    getCalendarProps,
    getTimeInputProps,
    getSelectorIconProps
  };
}

// src/date-picker.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function DatePicker(props, ref) {
  const {
    state,
    endContent,
    selectorIcon,
    showTimeField,
    disableAnimation,
    isCalendarHeaderExpanded,
    getDateInputProps,
    getPopoverProps,
    getTimeInputProps,
    getSelectorButtonProps,
    getSelectorIconProps,
    getCalendarProps,
    CalendarTopContent,
    CalendarBottomContent
  } = useDatePicker({ ...props, ref });
  const selectorContent = (0, import_react15.isValidElement)(selectorIcon) ? (0, import_react15.cloneElement)(selectorIcon, getSelectorIconProps()) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_shared_icons.CalendarBoldIcon, { ...getSelectorIconProps() });
  const calendarBottomContent = (0, import_react14.useMemo)(() => {
    if (isCalendarHeaderExpanded)
      return null;
    return showTimeField ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_date_input.TimeInput, { ...getTimeInputProps() }),
      CalendarBottomContent
    ] }) : CalendarBottomContent;
  }, [state, showTimeField, CalendarBottomContent, isCalendarHeaderExpanded]);
  const calendarTopContent = (0, import_react14.useMemo)(() => {
    if (isCalendarHeaderExpanded)
      return null;
    return CalendarTopContent;
  }, [showTimeField, CalendarTopContent, isCalendarHeaderExpanded]);
  const popoverContent = state.isOpen ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_popover.FreeSoloPopover, { ...getPopoverProps(), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_calendar.Calendar,
    {
      ...getCalendarProps(),
      bottomContent: calendarBottomContent,
      topContent: calendarTopContent
    }
  ) }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_date_input.DateInput,
      {
        ...getDateInputProps(),
        endContent: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_button.Button, { ...getSelectorButtonProps(), children: endContent || selectorContent })
      }
    ),
    disableAnimation ? popoverContent : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AnimatePresence, { children: popoverContent })
  ] });
}
DatePicker.displayName = "NextUI.DatePicker";
var date_picker_default = (0, import_system3.forwardRef)(DatePicker);

// src/date-range-picker.tsx
var import_react18 = require("react");
var import_react19 = require("react");
var import_system5 = require("@nextui-org/system");
var import_button2 = require("@nextui-org/button");
var import_date_input3 = require("@nextui-org/date-input");
var import_popover2 = require("@nextui-org/popover");
var import_calendar2 = require("@nextui-org/calendar");
var import_shared_icons2 = require("@nextui-org/shared-icons");

// src/date-range-picker-field.tsx
var import_date = require("@internationalized/date");
var import_react16 = require("react");
var import_datepicker3 = require("@react-aria/datepicker");
var import_datepicker4 = require("@react-stately/datepicker");
var import_date_input2 = require("@nextui-org/date-input");
var import_react_utils2 = require("@nextui-org/react-utils");
var import_i18n2 = require("@react-aria/i18n");
var import_utils4 = require("@react-aria/utils");
var import_jsx_runtime5 = require("react/jsx-runtime");
function DateRangePickerField(props, ref) {
  const { as, slots, createCalendar: createCalendarProp, classNames, ...otherProps } = props;
  const Component2 = as || "div";
  const domRef = (0, import_react_utils2.useDOMRef)(ref);
  const { locale } = (0, import_i18n2.useLocale)();
  let state = (0, import_datepicker4.useDateFieldState)({
    ...otherProps,
    locale,
    createCalendar: !createCalendarProp || typeof createCalendarProp !== "function" ? import_date.createCalendar : createCalendarProp
  });
  const inputRef = (0, import_react16.useRef)(null);
  const {
    fieldProps,
    inputProps,
    isInvalid: ariaIsInvalid
  } = (0, import_datepicker3.useDateField)({ ...otherProps, inputRef }, state, domRef);
  const isInvalid = props.isInvalid || ariaIsInvalid;
  state.isInvalid = isInvalid;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Component2, { ...(0, import_utils4.mergeProps)(fieldProps, (0, import_react_utils2.filterDOMProps)(otherProps)), ref: domRef, children: [
    state.segments.map((segment, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_date_input2.DateInputSegment,
      {
        classNames,
        segment,
        slots,
        state
      },
      i
    )),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { ...inputProps, ref: inputRef })
  ] });
}
DateRangePickerField.displayName = "NextUI.DateRangePickerField";
var date_range_picker_field_default = (0, import_react16.forwardRef)(DateRangePickerField);

// src/use-date-range-picker.ts
var import_system4 = require("@nextui-org/system");
var import_react17 = require("react");
var import_datepicker5 = require("@react-stately/datepicker");
var import_datepicker6 = require("@react-aria/datepicker");
var import_shared_utils3 = require("@nextui-org/shared-utils");
var import_utils5 = require("@react-aria/utils");
var import_theme3 = require("@nextui-org/theme");
var import_aria_utils2 = require("@nextui-org/aria-utils");
function useDateRangePicker({
  as,
  isInvalid: isInvalidProp,
  description,
  startContent,
  endContent,
  selectorIcon,
  errorMessage,
  className,
  classNames,
  ...originalProps
}) {
  var _a, _b;
  const globalContext = (0, import_system4.useProviderContext)();
  const validationBehavior = (_b = (_a = originalProps.validationBehavior) != null ? _a : globalContext == null ? void 0 : globalContext.validationBehavior) != null ? _b : "aria";
  const {
    domRef,
    slotsProps,
    createCalendar: createCalendar2,
    stringFormatter,
    timeMinValue,
    timeMaxValue,
    isCalendarHeaderExpanded,
    disableAnimation,
    CalendarTopContent,
    CalendarBottomContent,
    timeInputProps,
    popoverProps,
    calendarProps,
    variantProps,
    userTimeInputProps,
    hasMultipleMonths,
    selectorButtonProps,
    selectorIconProps
  } = useDatePickerBase({ ...originalProps, validationBehavior });
  let state = (0, import_datepicker5.useDateRangePickerState)({
    ...originalProps,
    validationBehavior,
    shouldCloseOnSelect: () => !state.hasTime
  });
  const popoverTriggerRef = (0, import_react17.useRef)(null);
  let {
    groupProps,
    labelProps,
    startFieldProps,
    endFieldProps,
    buttonProps,
    dialogProps,
    calendarProps: ariaCalendarProps,
    validationDetails,
    validationErrors,
    descriptionProps,
    errorMessageProps,
    isInvalid: isAriaInvalid
  } = (0, import_datepicker6.useDateRangePicker)({ ...originalProps, validationBehavior }, state, domRef);
  const isInvalid = isInvalidProp || isAriaInvalid;
  const slots = (0, import_react17.useMemo)(
    () => (0, import_theme3.dateRangePicker)({
      ...variantProps,
      className
    }),
    [(0, import_shared_utils3.objectToDeps)(variantProps), className]
  );
  const timeGranularity = state.granularity === "hour" || state.granularity === "minute" || state.granularity === "second" ? state.granularity : null;
  const showTimeField = !!timeGranularity;
  const labelPlacement = (0, import_react17.useMemo)(() => {
    var _a2;
    if ((!originalProps.labelPlacement || originalProps.labelPlacement === "inside") && !originalProps.label) {
      return "outside";
    }
    return (_a2 = originalProps.labelPlacement) != null ? _a2 : "inside";
  }, [originalProps.labelPlacement, originalProps.label]);
  const shouldLabelBeOutside = labelPlacement === "outside" || labelPlacement === "outside-left";
  const getStartTimeInputProps = () => {
    var _a2, _b2, _c;
    if (!showTimeField)
      return {};
    return {
      ...timeInputProps,
      label: stringFormatter.format("startTime"),
      value: ((_a2 = state.timeRange) == null ? void 0 : _a2.start) || null,
      onChange: (v) => state.setTime("start", v),
      granularity: timeGranularity,
      minValue: timeMinValue,
      maxValue: timeMaxValue,
      classNames: {
        base: slots.timeInput({
          class: (0, import_shared_utils3.clsx)(classNames == null ? void 0 : classNames.timeInput, (_b2 = userTimeInputProps == null ? void 0 : userTimeInputProps.classNames) == null ? void 0 : _b2.base)
        }),
        label: slots.timeInputLabel({
          class: (0, import_shared_utils3.clsx)(classNames == null ? void 0 : classNames.timeInputLabel, (_c = userTimeInputProps == null ? void 0 : userTimeInputProps.classNames) == null ? void 0 : _c.label)
        })
      }
    };
  };
  const getEndTimeInputProps = () => {
    var _a2, _b2, _c;
    if (!showTimeField)
      return {};
    return {
      ...timeInputProps,
      label: stringFormatter.format("endTime"),
      value: ((_a2 = state.timeRange) == null ? void 0 : _a2.end) || null,
      onChange: (v) => state.setTime("end", v),
      granularity: timeGranularity,
      minValue: timeMinValue,
      maxValue: timeMaxValue,
      classNames: {
        base: slots.timeInput({
          class: (0, import_shared_utils3.clsx)(classNames == null ? void 0 : classNames.timeInput, (_b2 = userTimeInputProps == null ? void 0 : userTimeInputProps.classNames) == null ? void 0 : _b2.base)
        }),
        label: slots.timeInputLabel({
          class: (0, import_shared_utils3.clsx)(classNames == null ? void 0 : classNames.timeInputLabel, (_c = userTimeInputProps == null ? void 0 : userTimeInputProps.classNames) == null ? void 0 : _c.label)
        })
      }
    };
  };
  const getPopoverProps = (props = {}) => {
    var _a2, _b2;
    return {
      state,
      dialogProps,
      ...props,
      ...popoverProps,
      triggerRef: popoverTriggerRef,
      classNames: {
        content: slots.popoverContent({
          class: (0, import_shared_utils3.clsx)(
            classNames == null ? void 0 : classNames.popoverContent,
            (_b2 = (_a2 = slotsProps.popoverProps) == null ? void 0 : _a2.classNames) == null ? void 0 : _b2["content"],
            props.className
          )
        }),
        shouldCloseOnInteractOutside: (popoverProps == null ? void 0 : popoverProps.shouldCloseOnInteractOutside) ? popoverProps.shouldCloseOnInteractOutside : (element) => (0, import_aria_utils2.ariaShouldCloseOnInteractOutside)(element, popoverTriggerRef, state)
      }
    };
  };
  const getCalendarProps = () => {
    var _a2, _b2;
    return {
      ...ariaCalendarProps,
      ...calendarProps,
      classNames: {
        ...calendarProps.classNames,
        base: slots.calendar({ class: (0, import_theme3.cn)((_a2 = calendarProps == null ? void 0 : calendarProps.classNames) == null ? void 0 : _a2.base, classNames == null ? void 0 : classNames.calendar) }),
        content: slots.calendarContent({
          class: (0, import_theme3.cn)((_b2 = calendarProps == null ? void 0 : calendarProps.classNames) == null ? void 0 : _b2.content, classNames == null ? void 0 : classNames.calendarContent)
        })
      }
    };
  };
  const getSelectorButtonProps = () => {
    return {
      ...buttonProps,
      ...selectorButtonProps,
      onPress: state.toggle,
      className: slots.selectorButton({ class: classNames == null ? void 0 : classNames.selectorButton })
    };
  };
  const getSeparatorProps = () => {
    return {
      "data-slot": "separator",
      className: slots.separator({ class: classNames == null ? void 0 : classNames.separator })
    };
  };
  const getSelectorIconProps = () => {
    return {
      ...selectorIconProps,
      className: slots.selectorIcon({ class: classNames == null ? void 0 : classNames.selectorIcon })
    };
  };
  const baseStyles = (0, import_shared_utils3.clsx)(classNames == null ? void 0 : classNames.base, className);
  const dateInputSlots = (0, import_react17.useMemo)(
    () => (0, import_theme3.dateInput)({
      ...variantProps,
      labelPlacement,
      className
    }),
    [(0, import_shared_utils3.objectToDeps)(variantProps), className]
  );
  const getStartDateInputProps = (props = {}) => {
    return {
      ...startFieldProps,
      isInvalid,
      "data-slot": "start-input",
      slots: dateInputSlots,
      createCalendar: createCalendar2,
      ...(0, import_utils5.mergeProps)(variantProps, startFieldProps, {
        fullWidth: true,
        disableAnimation
      }),
      "data-open": (0, import_shared_utils3.dataAttr)(state.isOpen),
      classNames,
      style: {
        ...props.style,
        maxWidth: "fit-content"
      },
      className: dateInputSlots.input({
        class: (0, import_shared_utils3.clsx)(classNames == null ? void 0 : classNames.input, props == null ? void 0 : props.className)
      })
    };
  };
  const getEndDateInputProps = (props = {}) => {
    return {
      ...endFieldProps,
      isInvalid,
      "data-slot": "end-input",
      slots: dateInputSlots,
      createCalendar: createCalendar2,
      ...(0, import_utils5.mergeProps)(variantProps, endFieldProps, {
        fullWidth: true,
        disableAnimation
      }),
      "data-open": (0, import_shared_utils3.dataAttr)(state.isOpen),
      classNames,
      className: dateInputSlots.input({
        class: (0, import_shared_utils3.clsx)(classNames == null ? void 0 : classNames.input, props == null ? void 0 : props.className)
      })
    };
  };
  const getLabelProps = (props) => {
    return {
      ...props,
      ...labelProps,
      "data-slot": "label",
      className: dateInputSlots.label({
        class: (0, import_shared_utils3.clsx)(classNames == null ? void 0 : classNames.label, props == null ? void 0 : props.className)
      })
    };
  };
  const getInputWrapperProps = (props = {}) => {
    return {
      ref: domRef,
      ...props,
      ...groupProps,
      "data-slot": "input-wrapper",
      className: dateInputSlots.inputWrapper({
        class: classNames == null ? void 0 : classNames.inputWrapper
      }),
      onClick: labelProps.onClick
    };
  };
  const getInnerWrapperProps = (props) => {
    return {
      ...props,
      ref: popoverTriggerRef,
      "data-slot": "inner-wrapper",
      className: dateInputSlots.innerWrapper({
        class: classNames == null ? void 0 : classNames.innerWrapper
      })
    };
  };
  const getHelperWrapperProps = (props) => {
    return {
      ...props,
      "data-slot": "helper-wrapper",
      className: dateInputSlots.helperWrapper({
        class: (0, import_shared_utils3.clsx)(classNames == null ? void 0 : classNames.helperWrapper, props == null ? void 0 : props.className)
      })
    };
  };
  const getErrorMessageProps = (props = {}) => {
    return {
      ...props,
      ...errorMessageProps,
      "data-slot": "error-message",
      className: dateInputSlots.errorMessage({
        class: (0, import_shared_utils3.clsx)(classNames == null ? void 0 : classNames.errorMessage, props == null ? void 0 : props.className)
      })
    };
  };
  const getDescriptionProps = (props = {}) => {
    return {
      ...props,
      ...descriptionProps,
      "data-slot": "description",
      className: dateInputSlots.description({
        class: (0, import_shared_utils3.clsx)(classNames == null ? void 0 : classNames.description, props == null ? void 0 : props.className)
      })
    };
  };
  const getDateInputGroupProps = () => {
    return {
      as,
      label: originalProps.label,
      description,
      endContent,
      errorMessage,
      isInvalid,
      startContent,
      validationDetails,
      validationErrors,
      shouldLabelBeOutside,
      "data-slot": "base",
      "data-required": (0, import_shared_utils3.dataAttr)(originalProps.isRequired),
      "data-disabled": (0, import_shared_utils3.dataAttr)(originalProps.isDisabled),
      "data-readonly": (0, import_shared_utils3.dataAttr)(originalProps.isReadOnly),
      "data-invalid": (0, import_shared_utils3.dataAttr)(isInvalid),
      "data-has-start-content": (0, import_shared_utils3.dataAttr)(!!startContent),
      "data-has-multiple-months": (0, import_shared_utils3.dataAttr)(hasMultipleMonths),
      "data-has-end-content": (0, import_shared_utils3.dataAttr)(!!endContent),
      descriptionProps: getDescriptionProps(),
      errorMessageProps: getErrorMessageProps(),
      groupProps: getInputWrapperProps(),
      helperWrapperProps: getHelperWrapperProps(),
      labelProps: getLabelProps(),
      wrapperProps: getInnerWrapperProps(),
      className: dateInputSlots.base({ class: baseStyles })
    };
  };
  return {
    state,
    label: originalProps.label,
    slots,
    classNames,
    endContent,
    selectorIcon,
    showTimeField,
    isCalendarHeaderExpanded,
    disableAnimation,
    CalendarTopContent,
    CalendarBottomContent,
    getStartDateInputProps,
    getEndDateInputProps,
    getStartTimeInputProps,
    getEndTimeInputProps,
    getPopoverProps,
    getSelectorButtonProps,
    getCalendarProps,
    getSeparatorProps,
    getSelectorIconProps,
    getDateInputGroupProps
  };
}

// src/date-range-picker.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function DateRangePicker(props, ref) {
  const {
    state,
    slots,
    endContent,
    selectorIcon,
    showTimeField,
    classNames,
    disableAnimation,
    isCalendarHeaderExpanded,
    getDateInputGroupProps,
    getStartDateInputProps,
    getEndDateInputProps,
    getPopoverProps,
    getSeparatorProps,
    getStartTimeInputProps,
    getEndTimeInputProps,
    getSelectorButtonProps,
    getSelectorIconProps,
    getCalendarProps,
    CalendarTopContent,
    CalendarBottomContent
  } = useDateRangePicker({ ...props, ref });
  const selectorContent = (0, import_react19.isValidElement)(selectorIcon) ? (0, import_react19.cloneElement)(selectorIcon, getSelectorIconProps()) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_shared_icons2.CalendarBoldIcon, { ...getSelectorIconProps() });
  const calendarBottomContent = (0, import_react18.useMemo)(() => {
    if (isCalendarHeaderExpanded)
      return null;
    return showTimeField ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: slots == null ? void 0 : slots.bottomContent({ class: classNames == null ? void 0 : classNames.bottomContent }), children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: slots == null ? void 0 : slots.timeInputWrapper({ class: classNames == null ? void 0 : classNames.timeInputWrapper }), children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_date_input3.TimeInput, { ...getStartTimeInputProps() }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_date_input3.TimeInput, { ...getEndTimeInputProps() })
      ] }),
      CalendarBottomContent
    ] }) : CalendarBottomContent;
  }, [state, showTimeField, CalendarBottomContent, isCalendarHeaderExpanded]);
  const calendarTopContent = (0, import_react18.useMemo)(() => {
    if (isCalendarHeaderExpanded)
      return null;
    return CalendarTopContent;
  }, [showTimeField, CalendarTopContent, isCalendarHeaderExpanded]);
  const popoverContent = state.isOpen ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_popover2.FreeSoloPopover, { ...getPopoverProps(), offset: 20, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_calendar2.RangeCalendar,
    {
      ...getCalendarProps(),
      bottomContent: calendarBottomContent,
      topContent: calendarTopContent
    }
  ) }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      import_date_input3.DateInputGroup,
      {
        ...getDateInputGroupProps(),
        endContent: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_button2.Button, { ...getSelectorButtonProps(), children: endContent || selectorContent }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(date_range_picker_field_default, { ...getStartDateInputProps() }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { ...getSeparatorProps(), "aria-hidden": "true", role: "separator", children: "-" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(date_range_picker_field_default, { ...getEndDateInputProps() })
        ]
      }
    ),
    disableAnimation ? popoverContent : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AnimatePresence, { children: popoverContent })
  ] });
}
DateRangePicker.displayName = "NextUI.DateRangePicker";
var date_range_picker_default = (0, import_system5.forwardRef)(DateRangePicker);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DatePicker,
  DateRangePicker,
  DateRangePickerField,
  useDatePicker,
  useDateRangePicker
});
