"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomError = require("@swagger-api/apidom-error");
var _apidomNsJsonSchemaDraft = require("@swagger-api/apidom-ns-json-schema-draft-6");
/* eslint-disable class-methods-use-this */

/**
 * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-01#section-6
 */

class LinkDescription extends _apidomNsJsonSchemaDraft.LinkDescriptionElement {
  /**
   * Link context.
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-hyperschema-01#section-6.1
   */

  get anchor() {
    return this.get('anchor');
  }
  set anchor(anchor) {
    this.set('anchor', anchor);
  }
  get anchorPointer() {
    return this.get('anchorPointer');
  }
  set anchorPointer(anchorPointer) {
    this.set('anchorPointer', anchorPointer);
  }

  /**
   * Adjusting URI Template Resolution.
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-hyperschema-01#section-6.4
   */

  get templatePointers() {
    return this.get('templatePointers');
  }
  set templatePointers(templatePointers) {
    this.set('templatePointers', templatePointers);
  }
  get templateRequired() {
    return this.get('templateRequired');
  }
  set templateRequired(templateRequired) {
    this.set('templateRequired', templateRequired);
  }

  /**
   * Link Target Attributes.
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-hyperschema-01#section-6.5
   */

  get mediaType() {
    throw new _apidomError.UnsupportedOperationError('mediaType keyword from Hyper-Schema vocabulary has been renamed to targetMediaType.');
  }
  set mediaType(mediaType) {
    throw new _apidomError.UnsupportedOperationError('mediaType keyword from Hyper-Schema vocabulary has been renamed to targetMediaType.');
  }
  get targetMediaType() {
    return this.get('targetMediaType');
  }
  set targetMediaType(targetMediaType) {
    this.set('targetMediaType', targetMediaType);
  }
  get targetHints() {
    return this.get('targetHints');
  }
  set targetHints(targetHints) {
    this.set('targetHints', targetHints);
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get $comment() {
    return this.get('$comment');
  }
  set $comment($comment) {
    this.set('$comment', $comment);
  }

  /**
   *  Submitting Data for Processing.
   *
   *  URI: https://datatracker.ietf.org/doc/html/draft-handrews-json-schema-hyperschema-01#section-6.6.4
   */
  get submissionEncType() {
    throw new _apidomError.UnsupportedOperationError('submissionEncType keyword from Hyper-Schema vocabulary has been renamed to submissionMediaType.');
  }
  set submissionEncType(submissionEncType) {
    throw new _apidomError.UnsupportedOperationError('submissionEncType keyword from Hyper-Schema vocabulary has been renamed to submissionMediaType.');
  }
  get submissionMediaType() {
    return this.get('submissionMediaType');
  }
  set submissionMediaType(submissionMediaType) {
    this.set('submissionMediaType', submissionMediaType);
  }
}
var _default = exports.default = LinkDescription;