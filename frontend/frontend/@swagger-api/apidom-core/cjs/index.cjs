"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.visit = exports.traverse = exports.transclude = exports.toYAML = exports.toValue = exports.toString = exports.toJSON = exports.some = exports.sexprs = exports.reject = exports.refractorPluginSemanticElementIdentity = exports.refractorPluginElementIdentity = exports.refract = exports.parents = exports.namespace = exports.mergeRight = exports.mergeLeft = exports.mergeAllVisitors = exports.keyMap = exports.isStringElement = exports.isSourceMapElement = exports.isRefElement = exports.isPrimitiveElement = exports.isParseResultElement = exports.isObjectElement = exports.isNumberElement = exports.isNullElement = exports.isMemberElement = exports.isLinkElement = exports.isElement = exports.isBooleanElement = exports.isArrayElement = exports.isAnnotationElement = exports.includesSymbols = exports.includesClasses = exports.hasElementSourceMap = exports.getNodeType = exports.from = exports.findAtOffset = exports.find = exports.filter = exports.dispatchRefractorPlugins = exports.dereference = exports.dehydrate = exports.defaultIdentityManager = exports.deepmerge = exports.createPredicate = exports.createNamespace = exports.cloneShallow = exports.cloneNode = exports.cloneDeep = exports.Transcluder = exports.StringElement = exports.SourceMapElement = exports.ShallowCloneError = exports.RefElement = exports.ParseResultElement = exports.ObjectSlice = exports.ObjectElement = exports.NumberElement = exports.NullElement = exports.Namespace = exports.MemberElement = exports.MediaTypes = exports.LinkElement = exports.KeyValuePair = exports.IdentityManager = exports.ElementIdentityError = exports.Element = exports.DeepCloneError = exports.CommentElement = exports.CloneError = exports.BooleanElement = exports.BREAK = exports.ArraySlice = exports.ArrayElement = exports.AnnotationElement = void 0;
var _index = require("./refractor/plugins/dispatcher/index.cjs");
exports.dispatchRefractorPlugins = _index.dispatchPluginsSync;
var _elementIdentity = _interopRequireDefault(require("./refractor/plugins/element-identity.cjs"));
exports.refractorPluginElementIdentity = _elementIdentity.default;
var _semanticElementIdentity = _interopRequireDefault(require("./refractor/plugins/semantic-element-identity.cjs"));
exports.refractorPluginSemanticElementIdentity = _semanticElementIdentity.default;
var _mediaTypes = _interopRequireDefault(require("./media-types.cjs"));
exports.MediaTypes = _mediaTypes.default;
var _minim = require("minim");
exports.Element = _minim.Element;
exports.MemberElement = _minim.MemberElement;
exports.KeyValuePair = _minim.KeyValuePair;
exports.ObjectSlice = _minim.ObjectSlice;
exports.ArraySlice = _minim.ArraySlice;
exports.refract = _minim.refract;
var _namespace = _interopRequireWildcard(require("./namespace.cjs"));
exports.namespace = _namespace.default;
exports.Namespace = _namespace.Namespace;
exports.createNamespace = _namespace.createNamespace;
var _registration = require("./refractor/registration.cjs");
exports.ObjectElement = _registration.ObjectElement;
exports.ArrayElement = _registration.ArrayElement;
exports.BooleanElement = _registration.BooleanElement;
exports.NullElement = _registration.NullElement;
exports.NumberElement = _registration.NumberElement;
exports.StringElement = _registration.StringElement;
exports.LinkElement = _registration.LinkElement;
exports.RefElement = _registration.RefElement;
exports.AnnotationElement = _registration.AnnotationElement;
exports.CommentElement = _registration.CommentElement;
exports.ParseResultElement = _registration.ParseResultElement;
exports.SourceMapElement = _registration.SourceMapElement;
var _index2 = require("./predicates/index.cjs");
exports.isElement = _index2.isElement;
exports.isStringElement = _index2.isStringElement;
exports.isNumberElement = _index2.isNumberElement;
exports.isNullElement = _index2.isNullElement;
exports.isBooleanElement = _index2.isBooleanElement;
exports.isArrayElement = _index2.isArrayElement;
exports.isObjectElement = _index2.isObjectElement;
exports.isMemberElement = _index2.isMemberElement;
exports.isLinkElement = _index2.isLinkElement;
exports.isRefElement = _index2.isRefElement;
exports.isAnnotationElement = _index2.isAnnotationElement;
exports.isParseResultElement = _index2.isParseResultElement;
exports.isSourceMapElement = _index2.isSourceMapElement;
exports.isPrimitiveElement = _index2.isPrimitiveElement;
exports.hasElementSourceMap = _index2.hasElementSourceMap;
exports.includesSymbols = _index2.includesSymbols;
exports.includesClasses = _index2.includesClasses;
var _helpers = _interopRequireDefault(require("./predicates/helpers.cjs"));
exports.createPredicate = _helpers.default;
var _index3 = require("./traversal/index.cjs");
exports.filter = _index3.filter;
exports.reject = _index3.reject;
exports.find = _index3.find;
exports.findAtOffset = _index3.findAtOffset;
exports.some = _index3.some;
exports.traverse = _index3.traverse;
exports.parents = _index3.parents;
var _visitor = require("./traversal/visitor.cjs");
exports.visit = _visitor.visit;
exports.BREAK = _visitor.BREAK;
exports.mergeAllVisitors = _visitor.mergeAllVisitors;
exports.getNodeType = _visitor.getNodeType;
exports.cloneNode = _visitor.cloneNode;
exports.keyMap = _visitor.keyMapDefault;
var _index4 = _interopRequireWildcard(require("./transcluder/index.cjs"));
exports.transclude = _index4.transclude;
exports.Transcluder = _index4.default;
var _util = require("./util.cjs");
exports.dereference = _util.dereference;
var _index5 = require("./clone/index.cjs");
exports.cloneShallow = _index5.cloneShallow;
exports.cloneDeep = _index5.cloneDeep;
var _CloneError = _interopRequireDefault(require("./clone/errors/CloneError.cjs"));
exports.CloneError = _CloneError.default;
var _DeepCloneError = _interopRequireDefault(require("./clone/errors/DeepCloneError.cjs"));
exports.DeepCloneError = _DeepCloneError.default;
var _ShallowCloneError = _interopRequireDefault(require("./clone/errors/ShallowCloneError.cjs"));
exports.ShallowCloneError = _ShallowCloneError.default;
var _index6 = require("./identity/index.cjs");
exports.defaultIdentityManager = _index6.defaultIdentityManager;
exports.IdentityManager = _index6.IdentityManager;
var _ElementIdentityError = _interopRequireDefault(require("./identity/errors/ElementIdentityError.cjs"));
exports.ElementIdentityError = _ElementIdentityError.default;
var _from = _interopRequireDefault(require("./transformers/from.cjs"));
exports.from = _from.default;
var _index7 = _interopRequireDefault(require("./transformers/serializers/value/index.cjs"));
exports.toValue = _index7.default;
var _json = _interopRequireDefault(require("./transformers/serializers/json.cjs"));
exports.toJSON = _json.default;
var _yaml = _interopRequireDefault(require("./transformers/serializers/yaml-1-2.cjs"));
exports.toYAML = _yaml.default;
var _dehydrate = _interopRequireDefault(require("./transformers/dehydrate.cjs"));
exports.dehydrate = _dehydrate.default;
var _toString = _interopRequireDefault(require("./transformers/to-string.cjs"));
exports.toString = _toString.default;
var _sexprs = _interopRequireDefault(require("./transformers/sexprs.cjs"));
exports.sexprs = _sexprs.default;
var _deepmerge = _interopRequireDefault(require("./merge/deepmerge.cjs"));
exports.deepmerge = _deepmerge.default;
var _mergeRight = _interopRequireDefault(require("./merge/merge-right.cjs"));
exports.mergeRight = _mergeRight.default;
var _mergeLeft = _interopRequireDefault(require("./merge/merge-left.cjs"));
exports.mergeLeft = _mergeLeft.default;