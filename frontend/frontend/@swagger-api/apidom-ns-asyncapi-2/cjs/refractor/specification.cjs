"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _apidomNsJsonSchemaDraft = require("@swagger-api/apidom-ns-json-schema-draft-7");
var _FallbackVisitor = _interopRequireDefault(require("./visitors/FallbackVisitor.cjs"));
var _SpecificationExtensionVisitor = _interopRequireDefault(require("./visitors/SpecificationExtensionVisitor.cjs"));
var _index = _interopRequireDefault(require("./visitors/async-api-2/index.cjs"));
var _AsyncApiVersionVisitor = _interopRequireDefault(require("./visitors/async-api-2/AsyncApiVersionVisitor.cjs"));
var _IdentifierVisitor = _interopRequireDefault(require("./visitors/async-api-2/IdentifierVisitor.cjs"));
var _index2 = _interopRequireDefault(require("./visitors/async-api-2/info/index.cjs"));
var _VersionVisitor = _interopRequireDefault(require("./visitors/async-api-2/info/VersionVisitor.cjs"));
var _index3 = _interopRequireDefault(require("./visitors/async-api-2/contact/index.cjs"));
var _index4 = _interopRequireDefault(require("./visitors/async-api-2/correlation-id/index.cjs"));
var _DefaultContentTypeVisitor = _interopRequireDefault(require("./visitors/async-api-2/DefaultContentTypeVisitor.cjs"));
var _index5 = _interopRequireDefault(require("./visitors/async-api-2/license/index.cjs"));
var _index6 = _interopRequireDefault(require("./visitors/async-api-2/oauth-flows/index.cjs"));
var _index7 = _interopRequireDefault(require("./visitors/async-api-2/oauth-flow/index.cjs"));
var _ScopesVisitor = _interopRequireDefault(require("./visitors/async-api-2/oauth-flow/ScopesVisitor.cjs"));
var _index8 = _interopRequireDefault(require("./visitors/async-api-2/servers/index.cjs"));
var _index9 = _interopRequireDefault(require("./visitors/async-api-2/server/index.cjs"));
var _UrlVisitor = _interopRequireDefault(require("./visitors/async-api-2/server/UrlVisitor.cjs"));
var _BindingsVisitor = _interopRequireDefault(require("./visitors/async-api-2/server/BindingsVisitor.cjs"));
var _VariablesVisitor = _interopRequireDefault(require("./visitors/async-api-2/server/VariablesVisitor.cjs"));
var _SecurityVisitor = _interopRequireDefault(require("./visitors/async-api-2/server/SecurityVisitor.cjs"));
var _index10 = _interopRequireDefault(require("./visitors/async-api-2/server-variable/index.cjs"));
var _index11 = _interopRequireDefault(require("./visitors/async-api-2/server-bindings/index.cjs"));
var _index12 = _interopRequireDefault(require("./visitors/async-api-2/security-scheme/index.cjs"));
var _index13 = _interopRequireDefault(require("./visitors/async-api-2/security-requirement/index.cjs"));
var _index14 = _interopRequireDefault(require("./visitors/async-api-2/reference/index.cjs"));
var _$RefVisitor = _interopRequireDefault(require("./visitors/async-api-2/reference/$RefVisitor.cjs"));
var _index15 = _interopRequireDefault(require("./visitors/async-api-2/schema/index.cjs"));
var _SchemaOrReferenceVisitor = _interopRequireDefault(require("./visitors/async-api-2/schema/SchemaOrReferenceVisitor.cjs"));
var _AllOfVisitor = _interopRequireDefault(require("./visitors/async-api-2/schema/AllOfVisitor.cjs"));
var _AnyOfVisitor = _interopRequireDefault(require("./visitors/async-api-2/schema/AnyOfVisitor.cjs"));
var _OneOfVisitor = _interopRequireDefault(require("./visitors/async-api-2/schema/OneOfVisitor.cjs"));
var _DefinitionsVisitor = _interopRequireDefault(require("./visitors/async-api-2/schema/DefinitionsVisitor.cjs"));
var _DependenciesVisitor = _interopRequireDefault(require("./visitors/async-api-2/schema/DependenciesVisitor.cjs"));
var _ItemsVisitor = _interopRequireDefault(require("./visitors/async-api-2/schema/ItemsVisitor.cjs"));
var _PatternPropertiesVisitor = _interopRequireDefault(require("./visitors/async-api-2/schema/PatternPropertiesVisitor.cjs"));
var _PropertiesVisitor = _interopRequireDefault(require("./visitors/async-api-2/schema/PropertiesVisitor.cjs"));
var _inheritedFixedFields = _interopRequireDefault(require("./visitors/async-api-2/schema/inherited-fixed-fields.cjs"));
var _index16 = _interopRequireDefault(require("./visitors/async-api-2/parameters/index.cjs"));
var _index17 = _interopRequireDefault(require("./visitors/async-api-2/parameter/index.cjs"));
var _SchemaVisitor = _interopRequireDefault(require("./visitors/async-api-2/parameter/SchemaVisitor.cjs"));
var _index18 = _interopRequireDefault(require("./visitors/async-api-2/external-documentation/index.cjs"));
var _index19 = _interopRequireDefault(require("./visitors/async-api-2/components/index.cjs"));
var _SchemasVisitor = _interopRequireDefault(require("./visitors/async-api-2/components/SchemasVisitor.cjs"));
var _ServersVisitor = _interopRequireDefault(require("./visitors/async-api-2/components/ServersVisitor.cjs"));
var _ServerVariablesVisitor = _interopRequireDefault(require("./visitors/async-api-2/components/ServerVariablesVisitor.cjs"));
var _ChannelsVisitor = _interopRequireDefault(require("./visitors/async-api-2/components/ChannelsVisitor.cjs"));
var _MessagesVisitor = _interopRequireDefault(require("./visitors/async-api-2/components/MessagesVisitor.cjs"));
var _SecuritySchemesVisitor = _interopRequireDefault(require("./visitors/async-api-2/components/SecuritySchemesVisitor.cjs"));
var _ParametersVisitor = _interopRequireDefault(require("./visitors/async-api-2/components/ParametersVisitor.cjs"));
var _CorrelationIdsVisitor = _interopRequireDefault(require("./visitors/async-api-2/components/CorrelationIdsVisitor.cjs"));
var _OperationTraitsVisitor = _interopRequireDefault(require("./visitors/async-api-2/components/OperationTraitsVisitor.cjs"));
var _MessageTraitsVisitor = _interopRequireDefault(require("./visitors/async-api-2/components/MessageTraitsVisitor.cjs"));
var _ServerBindingsVisitor = _interopRequireDefault(require("./visitors/async-api-2/components/ServerBindingsVisitor.cjs"));
var _ChannelBindingsVisitor = _interopRequireDefault(require("./visitors/async-api-2/components/ChannelBindingsVisitor.cjs"));
var _OperationBindingsVisitor = _interopRequireDefault(require("./visitors/async-api-2/components/OperationBindingsVisitor.cjs"));
var _MessageBindingsVisitor = _interopRequireDefault(require("./visitors/async-api-2/components/MessageBindingsVisitor.cjs"));
var _index20 = _interopRequireDefault(require("./visitors/async-api-2/operation/index.cjs"));
var _SecurityVisitor2 = _interopRequireDefault(require("./visitors/async-api-2/operation/SecurityVisitor.cjs"));
var _BindingsVisitor2 = _interopRequireDefault(require("./visitors/async-api-2/operation/BindingsVisitor.cjs"));
var _TraitsVisitor = _interopRequireDefault(require("./visitors/async-api-2/operation/TraitsVisitor.cjs"));
var _MessageVisitor = _interopRequireDefault(require("./visitors/async-api-2/operation/MessageVisitor.cjs"));
var _index21 = _interopRequireDefault(require("./visitors/async-api-2/tags/index.cjs"));
var _index22 = _interopRequireDefault(require("./visitors/async-api-2/tag/index.cjs"));
var _index23 = _interopRequireDefault(require("./visitors/async-api-2/channels/index.cjs"));
var _index24 = _interopRequireDefault(require("./visitors/async-api-2/channel-bindings/index.cjs"));
var _index25 = _interopRequireDefault(require("./visitors/async-api-2/channel-item/index.cjs"));
var _$RefVisitor2 = _interopRequireDefault(require("./visitors/async-api-2/channel-item/$RefVisitor.cjs"));
var _ServersVisitor2 = _interopRequireDefault(require("./visitors/async-api-2/channel-item/ServersVisitor.cjs"));
var _BindingsVisitor3 = _interopRequireDefault(require("./visitors/async-api-2/channel-item/BindingsVisitor.cjs"));
var _index26 = _interopRequireDefault(require("./visitors/async-api-2/message-bindings/index.cjs"));
var _index27 = _interopRequireDefault(require("./visitors/async-api-2/message-example/index.cjs"));
var _index28 = _interopRequireDefault(require("./visitors/async-api-2/message-trait/index.cjs"));
var _HeadersVisitor = _interopRequireDefault(require("./visitors/async-api-2/message-trait/HeadersVisitor.cjs"));
var _CorrelationIdVisitor = _interopRequireDefault(require("./visitors/async-api-2/message-trait/CorrelationIdVisitor.cjs"));
var _BindingsVisitor4 = _interopRequireDefault(require("./visitors/async-api-2/message-trait/BindingsVisitor.cjs"));
var _ExamplesVisitor = _interopRequireDefault(require("./visitors/async-api-2/message-trait/ExamplesVisitor.cjs"));
var _index29 = _interopRequireDefault(require("./visitors/async-api-2/message/index.cjs"));
var _HeadersVisitor2 = _interopRequireDefault(require("./visitors/async-api-2/message/HeadersVisitor.cjs"));
var _CorrelationIdVisitor2 = _interopRequireDefault(require("./visitors/async-api-2/message/CorrelationIdVisitor.cjs"));
var _BindingsVisitor5 = _interopRequireDefault(require("./visitors/async-api-2/message/BindingsVisitor.cjs"));
var _ExamplesVisitor2 = _interopRequireDefault(require("./visitors/async-api-2/message/ExamplesVisitor.cjs"));
var _TraitsVisitor2 = _interopRequireDefault(require("./visitors/async-api-2/message/TraitsVisitor.cjs"));
var _index30 = _interopRequireDefault(require("./visitors/async-api-2/operation-bindings/index.cjs"));
var _index31 = _interopRequireDefault(require("./visitors/async-api-2/operation-trait/index.cjs"));
var _SecurityVisitor3 = _interopRequireDefault(require("./visitors/async-api-2/operation-trait/SecurityVisitor.cjs"));
var _BindingsVisitor6 = _interopRequireDefault(require("./visitors/async-api-2/operation-trait/BindingsVisitor.cjs"));
var _index32 = _interopRequireDefault(require("./visitors/async-api-2/bindings/amqp/channel-binding/index.cjs"));
var _index33 = _interopRequireDefault(require("./visitors/async-api-2/bindings/amqp/message-binding/index.cjs"));
var _index34 = _interopRequireDefault(require("./visitors/async-api-2/bindings/amqp/operation-binding/index.cjs"));
var _index35 = _interopRequireDefault(require("./visitors/async-api-2/bindings/amqp/server-binding/index.cjs"));
var _index36 = _interopRequireDefault(require("./visitors/async-api-2/bindings/amqp1/channel-binding/index.cjs"));
var _index37 = _interopRequireDefault(require("./visitors/async-api-2/bindings/amqp1/message-binding/index.cjs"));
var _index38 = _interopRequireDefault(require("./visitors/async-api-2/bindings/amqp1/operation-binding/index.cjs"));
var _index39 = _interopRequireDefault(require("./visitors/async-api-2/bindings/amqp1/server-binding/index.cjs"));
var _index40 = _interopRequireDefault(require("./visitors/async-api-2/bindings/anypointmq/channel-binding/index.cjs"));
var _index41 = _interopRequireDefault(require("./visitors/async-api-2/bindings/anypointmq/message-binding/index.cjs"));
var _index42 = _interopRequireDefault(require("./visitors/async-api-2/bindings/anypointmq/operation-binding/index.cjs"));
var _index43 = _interopRequireDefault(require("./visitors/async-api-2/bindings/anypointmq/server-binding/index.cjs"));
var _index44 = _interopRequireDefault(require("./visitors/async-api-2/bindings/http/channel-binding/index.cjs"));
var _index45 = _interopRequireDefault(require("./visitors/async-api-2/bindings/http/message-binding/index.cjs"));
var _index46 = _interopRequireDefault(require("./visitors/async-api-2/bindings/http/operation-binding/index.cjs"));
var _index47 = _interopRequireDefault(require("./visitors/async-api-2/bindings/http/server-binding/index.cjs"));
var _index48 = _interopRequireDefault(require("./visitors/async-api-2/bindings/googlepubsub/channel-binding/index.cjs"));
var _index49 = _interopRequireDefault(require("./visitors/async-api-2/bindings/googlepubsub/message-binding/index.cjs"));
var _index50 = _interopRequireDefault(require("./visitors/async-api-2/bindings/googlepubsub/operation-binding/index.cjs"));
var _index51 = _interopRequireDefault(require("./visitors/async-api-2/bindings/googlepubsub/server-binding/index.cjs"));
var _index52 = _interopRequireDefault(require("./visitors/async-api-2/bindings/ibmmq/channel-binding/index.cjs"));
var _index53 = _interopRequireDefault(require("./visitors/async-api-2/bindings/ibmmq/message-binding/index.cjs"));
var _index54 = _interopRequireDefault(require("./visitors/async-api-2/bindings/ibmmq/operation-binding/index.cjs"));
var _index55 = _interopRequireDefault(require("./visitors/async-api-2/bindings/ibmmq/server-binding/index.cjs"));
var _index56 = _interopRequireDefault(require("./visitors/async-api-2/bindings/jms/channel-binding/index.cjs"));
var _index57 = _interopRequireDefault(require("./visitors/async-api-2/bindings/jms/message-binding/index.cjs"));
var _index58 = _interopRequireDefault(require("./visitors/async-api-2/bindings/jms/operation-binding/index.cjs"));
var _index59 = _interopRequireDefault(require("./visitors/async-api-2/bindings/jms/server-binding/index.cjs"));
var _index60 = _interopRequireDefault(require("./visitors/async-api-2/bindings/kafka/channel-binding/index.cjs"));
var _index61 = _interopRequireDefault(require("./visitors/async-api-2/bindings/kafka/message-binding/index.cjs"));
var _index62 = _interopRequireDefault(require("./visitors/async-api-2/bindings/kafka/operation-binding/index.cjs"));
var _index63 = _interopRequireDefault(require("./visitors/async-api-2/bindings/kafka/server-binding/index.cjs"));
var _index64 = _interopRequireDefault(require("./visitors/async-api-2/bindings/mercure/channel-binding/index.cjs"));
var _index65 = _interopRequireDefault(require("./visitors/async-api-2/bindings/mercure/message-binding/index.cjs"));
var _index66 = _interopRequireDefault(require("./visitors/async-api-2/bindings/mercure/operation-binding/index.cjs"));
var _index67 = _interopRequireDefault(require("./visitors/async-api-2/bindings/mercure/server-binding/index.cjs"));
var _index68 = _interopRequireDefault(require("./visitors/async-api-2/bindings/mqtt/channel-binding/index.cjs"));
var _index69 = _interopRequireDefault(require("./visitors/async-api-2/bindings/mqtt/message-binding/index.cjs"));
var _index70 = _interopRequireDefault(require("./visitors/async-api-2/bindings/mqtt/operation-binding/index.cjs"));
var _index71 = _interopRequireDefault(require("./visitors/async-api-2/bindings/mqtt/server-binding/index.cjs"));
var _index72 = _interopRequireDefault(require("./visitors/async-api-2/bindings/mqtt5/channel-binding/index.cjs"));
var _index73 = _interopRequireDefault(require("./visitors/async-api-2/bindings/mqtt5/message-binding/index.cjs"));
var _index74 = _interopRequireDefault(require("./visitors/async-api-2/bindings/mqtt5/operation-binding/index.cjs"));
var _index75 = _interopRequireDefault(require("./visitors/async-api-2/bindings/mqtt5/server-binding/index.cjs"));
var _index76 = _interopRequireDefault(require("./visitors/async-api-2/bindings/nats/channel-binding/index.cjs"));
var _index77 = _interopRequireDefault(require("./visitors/async-api-2/bindings/nats/message-binding/index.cjs"));
var _index78 = _interopRequireDefault(require("./visitors/async-api-2/bindings/nats/operation-binding/index.cjs"));
var _index79 = _interopRequireDefault(require("./visitors/async-api-2/bindings/nats/server-binding/index.cjs"));
var _index80 = _interopRequireDefault(require("./visitors/async-api-2/bindings/pulsar/channel-binding/index.cjs"));
var _index81 = _interopRequireDefault(require("./visitors/async-api-2/bindings/pulsar/message-binding/index.cjs"));
var _index82 = _interopRequireDefault(require("./visitors/async-api-2/bindings/pulsar/operation-binding/index.cjs"));
var _index83 = _interopRequireDefault(require("./visitors/async-api-2/bindings/pulsar/server-binding/index.cjs"));
var _index84 = _interopRequireDefault(require("./visitors/async-api-2/bindings/redis/channel-binding/index.cjs"));
var _index85 = _interopRequireDefault(require("./visitors/async-api-2/bindings/redis/message-binding/index.cjs"));
var _index86 = _interopRequireDefault(require("./visitors/async-api-2/bindings/redis/operation-binding/index.cjs"));
var _index87 = _interopRequireDefault(require("./visitors/async-api-2/bindings/redis/server-binding/index.cjs"));
var _index88 = _interopRequireDefault(require("./visitors/async-api-2/bindings/sns/channel-binding/index.cjs"));
var _index89 = _interopRequireDefault(require("./visitors/async-api-2/bindings/sns/message-binding/index.cjs"));
var _index90 = _interopRequireDefault(require("./visitors/async-api-2/bindings/sns/operation-binding/index.cjs"));
var _index91 = _interopRequireDefault(require("./visitors/async-api-2/bindings/sns/server-binding/index.cjs"));
var _index92 = _interopRequireDefault(require("./visitors/async-api-2/bindings/solace/channel-binding/index.cjs"));
var _index93 = _interopRequireDefault(require("./visitors/async-api-2/bindings/solace/message-binding/index.cjs"));
var _index94 = _interopRequireDefault(require("./visitors/async-api-2/bindings/solace/operation-binding/index.cjs"));
var _index95 = _interopRequireDefault(require("./visitors/async-api-2/bindings/solace/server-binding/index.cjs"));
var _index96 = _interopRequireDefault(require("./visitors/async-api-2/bindings/sqs/channel-binding/index.cjs"));
var _index97 = _interopRequireDefault(require("./visitors/async-api-2/bindings/sqs/message-binding/index.cjs"));
var _index98 = _interopRequireDefault(require("./visitors/async-api-2/bindings/sqs/operation-binding/index.cjs"));
var _index99 = _interopRequireDefault(require("./visitors/async-api-2/bindings/sqs/server-binding/index.cjs"));
var _index100 = _interopRequireDefault(require("./visitors/async-api-2/bindings/stomp/channel-binding/index.cjs"));
var _index101 = _interopRequireDefault(require("./visitors/async-api-2/bindings/stomp/message-binding/index.cjs"));
var _index102 = _interopRequireDefault(require("./visitors/async-api-2/bindings/stomp/operation-binding/index.cjs"));
var _index103 = _interopRequireDefault(require("./visitors/async-api-2/bindings/stomp/server-binding/index.cjs"));
var _index104 = _interopRequireDefault(require("./visitors/async-api-2/bindings/ws/channel-binding/index.cjs"));
var _index105 = _interopRequireDefault(require("./visitors/async-api-2/bindings/ws/message-binding/index.cjs"));
var _index106 = _interopRequireDefault(require("./visitors/async-api-2/bindings/ws/operation-binding/index.cjs"));
var _index107 = _interopRequireDefault(require("./visitors/async-api-2/bindings/ws/server-binding/index.cjs"));
/**
 * AsyncApi >= 2.0.0 <=2.6.0 specification elements.
 */

/**
 * Binding elements.
 */
// AMQP 0-9-1

// AMQP 1.0

// Anypoint MQ

// HTTP

// Google Cloud Pub/Sub

// IBM MQ

// JMS

// Kafka

// Mercure

// MQTT

// MQTT 5

// NATS

// Pulsar

// Redis

// SNS

// Solace

// SQS

// STOMP

// WebSocket

/**
 * Specification object allows us to have complete control over visitors
 * when traversing the ApiDOM.
 * Specification also allows us to create amended refractors from
 * existing ones by manipulating it.
 *
 * Note: Specification object allows to use absolute internal JSON pointers.
 */

const ReferenceSpecification = {
  $visitor: _index14.default,
  fixedFields: {
    $ref: _$RefVisitor.default
  }
};
const SchemaSpecification = {
  $visitor: _index15.default,
  fixedFields: {
    ..._inheritedFixedFields.default,
    // validation vocabulary
    // validation keywords for Applying Subschemas With Boolean Logic
    allOf: _AllOfVisitor.default,
    anyOf: _AnyOfVisitor.default,
    oneOf: _OneOfVisitor.default,
    // validation Keywords for Arrays
    items: _ItemsVisitor.default,
    // validation Keywords for Objects
    properties: _PropertiesVisitor.default,
    patternProperties: _PatternPropertiesVisitor.default,
    dependencies: _DependenciesVisitor.default,
    // validation Vocabulary for Schema Re-Use With "definitions"
    definitions: _DefinitionsVisitor.default,
    // AsyncAPI vocabulary
    discriminator: {
      $ref: '#/visitors/value'
    },
    externalDocs: {
      $ref: '#/visitors/document/objects/ExternalDocumentation'
    },
    deprecated: {
      $ref: '#/visitors/value'
    }
  }
};
const specification = {
  visitors: {
    value: _FallbackVisitor.default,
    document: {
      objects: {
        /**
         * AsyncApi >= 2.0.0 <=2.6.0 specification elements.
         */
        AsyncApi: {
          $visitor: _index.default,
          fixedFields: {
            asyncapi: {
              $ref: '#/visitors/document/objects/AsyncApiVersion'
            },
            id: {
              $ref: '#/visitors/document/objects/Identifier'
            },
            info: {
              $ref: '#/visitors/document/objects/Info'
            },
            servers: {
              $ref: '#/visitors/document/objects/Servers'
            },
            defaultContentType: {
              $ref: '#/visitors/document/objects/DefaultContentType'
            },
            channels: {
              $ref: '#/visitors/document/objects/Channels'
            },
            components: {
              $ref: '#/visitors/document/objects/Components'
            },
            tags: {
              $ref: '#/visitors/document/objects/Tags'
            },
            externalDocs: {
              $ref: '#/visitors/document/objects/ExternalDocumentation'
            }
          }
        },
        AsyncApiVersion: {
          $visitor: _AsyncApiVersionVisitor.default
        },
        Identifier: {
          $visitor: _IdentifierVisitor.default
        },
        Info: {
          $visitor: _index2.default,
          fixedFields: {
            title: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            termsOfService: {
              $ref: '#/visitors/value'
            },
            version: _VersionVisitor.default,
            contact: {
              $ref: '#/visitors/document/objects/Contact'
            },
            license: {
              $ref: '#/visitors/document/objects/License'
            }
          }
        },
        Contact: {
          $visitor: _index3.default,
          fixedFields: {
            name: {
              $ref: '#/visitors/value'
            },
            url: {
              $ref: '#/visitors/value'
            },
            email: {
              $ref: '#/visitors/value'
            }
          }
        },
        License: {
          $visitor: _index5.default,
          fixedFields: {
            name: {
              $ref: '#/visitors/value'
            },
            url: {
              $ref: '#/visitors/value'
            }
          }
        },
        Servers: {
          $visitor: _index8.default
        },
        Server: {
          $visitor: _index9.default,
          fixedFields: {
            url: _UrlVisitor.default,
            protocol: {
              $ref: '#/visitors/value'
            },
            protocolVersion: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            variables: _VariablesVisitor.default,
            security: _SecurityVisitor.default,
            tags: {
              $ref: '#/visitors/document/objects/Tags'
            },
            bindings: _BindingsVisitor.default
          }
        },
        ServerVariable: {
          $visitor: _index10.default,
          fixedFields: {
            enum: {
              $ref: '#/visitors/value'
            },
            default: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            examples: {
              $ref: '#/visitors/value'
            }
          }
        },
        DefaultContentType: {
          $visitor: _DefaultContentTypeVisitor.default
        },
        Channels: {
          $visitor: _index23.default
        },
        ChannelItem: {
          $visitor: _index25.default,
          fixedFields: {
            $ref: _$RefVisitor2.default,
            description: {
              $ref: '#/visitors/value'
            },
            servers: _ServersVisitor2.default,
            subscribe: {
              $ref: '#/visitors/document/objects/Operation'
            },
            publish: {
              $ref: '#/visitors/document/objects/Operation'
            },
            parameters: {
              $ref: '#/visitors/document/objects/Parameters'
            },
            bindings: _BindingsVisitor3.default
          }
        },
        Operation: {
          $visitor: _index20.default,
          fixedFields: {
            operationId: {
              $ref: '#/visitors/value'
            },
            summary: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            security: _SecurityVisitor2.default,
            tags: {
              $ref: '#/visitors/document/objects/Tags'
            },
            externalDocs: {
              $ref: '#/visitors/document/objects/ExternalDocumentation'
            },
            bindings: _BindingsVisitor2.default,
            traits: _TraitsVisitor.default,
            message: _MessageVisitor.default
          }
        },
        OperationTrait: {
          $visitor: _index31.default,
          fixedFields: {
            operationId: {
              $ref: '#/visitors/value'
            },
            summary: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            security: _SecurityVisitor3.default,
            tags: {
              $ref: '#/visitors/document/objects/Tags'
            },
            externalDocs: {
              $ref: '#/visitors/document/objects/ExternalDocumentation'
            },
            bindings: _BindingsVisitor6.default
          }
        },
        Message: {
          $visitor: _index29.default,
          fixedFields: {
            messageId: {
              $ref: '#/visitors/value'
            },
            headers: _HeadersVisitor2.default,
            payload: {
              $ref: '#/visitors/value'
            },
            correlationId: _CorrelationIdVisitor2.default,
            schemaFormat: {
              $ref: '#/visitors/value'
            },
            contentType: {
              $ref: '#/visitors/value'
            },
            name: {
              $ref: '#/visitors/value'
            },
            title: {
              $ref: '#/visitors/value'
            },
            summary: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            tags: {
              $ref: '#/visitors/document/objects/Tags'
            },
            externalDocs: {
              $ref: '#/visitors/document/objects/ExternalDocumentation'
            },
            bindings: _BindingsVisitor5.default,
            examples: _ExamplesVisitor2.default,
            traits: _TraitsVisitor2.default
          }
        },
        MessageTrait: {
          $visitor: _index28.default,
          fixedFields: {
            messageId: {
              $ref: '#/visitors/value'
            },
            headers: _HeadersVisitor.default,
            correlationId: _CorrelationIdVisitor.default,
            schemaFormat: {
              $ref: '#/visitors/value'
            },
            contentType: {
              $ref: '#/visitors/value'
            },
            name: {
              $ref: '#/visitors/value'
            },
            title: {
              $ref: '#/visitors/value'
            },
            summary: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            tags: {
              $ref: '#/visitors/document/objects/Tags'
            },
            externalDocs: {
              $ref: '#/visitors/document/objects/ExternalDocumentation'
            },
            bindings: _BindingsVisitor4.default,
            examples: _ExamplesVisitor.default
          }
        },
        MessageExample: {
          $visitor: _index27.default,
          fixedFields: {
            headers: {
              $ref: '#/visitors/value'
            },
            payload: {
              $ref: '#/visitors/value'
            },
            name: {
              $ref: '#/visitors/value'
            },
            summary: {
              $ref: '#/visitors/value'
            }
          }
        },
        Tags: {
          $visitor: _index21.default
        },
        Tag: {
          $visitor: _index22.default,
          fixedFields: {
            name: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            externalDocs: {
              $ref: '#/visitors/document/objects/ExternalDocumentation'
            }
          }
        },
        ExternalDocumentation: {
          $visitor: _index18.default,
          fixedFields: {
            description: {
              $ref: '#/visitors/value'
            },
            url: {
              $ref: '#/visitors/value'
            }
          }
        },
        Components: {
          $visitor: _index19.default,
          fixedFields: {
            schemas: _SchemasVisitor.default,
            servers: _ServersVisitor.default,
            serverVariables: _ServerVariablesVisitor.default,
            channels: _ChannelsVisitor.default,
            messages: _MessagesVisitor.default,
            securitySchemes: _SecuritySchemesVisitor.default,
            parameters: _ParametersVisitor.default,
            correlationIds: _CorrelationIdsVisitor.default,
            operationTraits: _OperationTraitsVisitor.default,
            messageTraits: _MessageTraitsVisitor.default,
            serverBindings: _ServerBindingsVisitor.default,
            channelBindings: _ChannelBindingsVisitor.default,
            operationBindings: _OperationBindingsVisitor.default,
            messageBindings: _MessageBindingsVisitor.default
          }
        },
        JSONReference: ReferenceSpecification,
        Reference: ReferenceSpecification,
        JSONSchema: SchemaSpecification,
        Schema: SchemaSpecification,
        LinkDescription: _apidomNsJsonSchemaDraft.specificationObj.visitors.document.objects.LinkDescription,
        SecurityScheme: {
          $visitor: _index12.default,
          fixedFields: {
            type: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            name: {
              $ref: '#/visitors/value'
            },
            in: {
              $ref: '#/visitors/value'
            },
            scheme: {
              $ref: '#/visitors/value'
            },
            bearerFormat: {
              $ref: '#/visitors/value'
            },
            flows: {
              $ref: '#/visitors/document/objects/OAuthFlows'
            },
            openIdConnectUrl: {
              $ref: '#/visitors/value'
            }
          }
        },
        SecurityRequirement: {
          $visitor: _index13.default
        },
        OAuthFlows: {
          $visitor: _index6.default,
          fixedFields: {
            implicit: {
              $ref: '#/visitors/document/objects/OAuthFlow'
            },
            password: {
              $ref: '#/visitors/document/objects/OAuthFlow'
            },
            clientCredentials: {
              $ref: '#/visitors/document/objects/OAuthFlow'
            },
            authorizationCode: {
              $ref: '#/visitors/document/objects/OAuthFlow'
            }
          }
        },
        OAuthFlow: {
          $visitor: _index7.default,
          fixedFields: {
            authorizationUrl: {
              $ref: '#/visitors/value'
            },
            tokenUrl: {
              $ref: '#/visitors/value'
            },
            refreshUrl: {
              $ref: '#/visitors/value'
            },
            scopes: _ScopesVisitor.default
          }
        },
        ServerBindings: {
          $visitor: _index11.default,
          fixedFields: {
            http: {
              $ref: '#/visitors/document/objects/bindings/http/ServerBinding'
            },
            ws: {
              $ref: '#/visitors/document/objects/bindings/ws/ServerBinding'
            },
            kafka: {
              $ref: '#/visitors/document/objects/bindings/kafka/ServerBinding'
            },
            anypointmq: {
              $ref: '#/visitors/document/objects/bindings/anypointmq/ServerBinding'
            },
            amqp: {
              $ref: '#/visitors/document/objects/bindings/amqp/ServerBinding'
            },
            amqp1: {
              $ref: '#/visitors/document/objects/bindings/amqp1/ServerBinding'
            },
            mqtt: {
              $ref: '#/visitors/document/objects/bindings/mqtt/ServerBinding'
            },
            mqtt5: {
              $ref: '#/visitors/document/objects/bindings/mqtt5/ServerBinding'
            },
            nats: {
              $ref: '#/visitors/document/objects/bindings/nats/ServerBinding'
            },
            jms: {
              $ref: '#/visitors/document/objects/bindings/jms/ServerBinding'
            },
            sns: {
              $ref: '#/visitors/document/objects/bindings/sns/ServerBinding'
            },
            solace: {
              $ref: '#/visitors/document/objects/bindings/solace/ServerBinding'
            },
            sqs: {
              $ref: '#/visitors/document/objects/bindings/sqs/ServerBinding'
            },
            stomp: {
              $ref: '#/visitors/document/objects/bindings/stomp/ServerBinding'
            },
            redis: {
              $ref: '#/visitors/document/objects/bindings/redis/ServerBinding'
            },
            mercure: {
              $ref: '#/visitors/document/objects/bindings/mercure/ServerBinding'
            },
            ibmmq: {
              $ref: '#/visitors/document/objects/bindings/ibmmq/ServerBinding'
            },
            googlepubsub: {
              $ref: '#/visitors/document/objects/bindings/googlepubsub/ServerBinding'
            },
            pulsar: {
              $ref: '#/visitors/document/objects/bindings/pulsar/ServerBinding'
            }
          }
        },
        Parameters: {
          $visitor: _index16.default
        },
        Parameter: {
          $visitor: _index17.default,
          fixedFields: {
            description: {
              $ref: '#/visitors/value'
            },
            schema: _SchemaVisitor.default,
            location: {
              $ref: '#/visitors/value'
            }
          }
        },
        ChannelBindings: {
          $visitor: _index24.default,
          fixedFields: {
            http: {
              $ref: '#/visitors/document/objects/bindings/http/ChannelBinding'
            },
            ws: {
              $ref: '#/visitors/document/objects/bindings/ws/ChannelBinding'
            },
            kafka: {
              $ref: '#/visitors/document/objects/bindings/kafka/ChannelBinding'
            },
            anypointmq: {
              $ref: '#/visitors/document/objects/bindings/anypointmq/ChannelBinding'
            },
            amqp: {
              $ref: '#/visitors/document/objects/bindings/amqp/ChannelBinding'
            },
            amqp1: {
              $ref: '#/visitors/document/objects/bindings/amqp1/ChannelBinding'
            },
            mqtt: {
              $ref: '#/visitors/document/objects/bindings/mqtt/ChannelBinding'
            },
            mqtt5: {
              $ref: '#/visitors/document/objects/bindings/mqtt5/ChannelBinding'
            },
            nats: {
              $ref: '#/visitors/document/objects/bindings/nats/ChannelBinding'
            },
            jms: {
              $ref: '#/visitors/document/objects/bindings/jms/ChannelBinding'
            },
            sns: {
              $ref: '#/visitors/document/objects/bindings/sns/ChannelBinding'
            },
            solace: {
              $ref: '#/visitors/document/objects/bindings/solace/ChannelBinding'
            },
            sqs: {
              $ref: '#/visitors/document/objects/bindings/sqs/ChannelBinding'
            },
            stomp: {
              $ref: '#/visitors/document/objects/bindings/stomp/ChannelBinding'
            },
            redis: {
              $ref: '#/visitors/document/objects/bindings/redis/ChannelBinding'
            },
            mercure: {
              $ref: '#/visitors/document/objects/bindings/mercure/ChannelBinding'
            },
            ibmmq: {
              $ref: '#/visitors/document/objects/bindings/ibmmq/ChannelBinding'
            },
            googlepubsub: {
              $ref: '#/visitors/document/objects/bindings/googlepubsub/ChannelBinding'
            },
            pulsar: {
              $ref: '#/visitors/document/objects/bindings/pulsar/ChannelBinding'
            }
          }
        },
        OperationBindings: {
          $visitor: _index30.default,
          fixedFields: {
            http: {
              $ref: '#/visitors/document/objects/bindings/http/OperationBinding'
            },
            ws: {
              $ref: '#/visitors/document/objects/bindings/ws/OperationBinding'
            },
            kafka: {
              $ref: '#/visitors/document/objects/bindings/kafka/OperationBinding'
            },
            anypointmq: {
              $ref: '#/visitors/document/objects/bindings/anypointmq/OperationBinding'
            },
            amqp: {
              $ref: '#/visitors/document/objects/bindings/amqp/OperationBinding'
            },
            amqp1: {
              $ref: '#/visitors/document/objects/bindings/amqp1/OperationBinding'
            },
            mqtt: {
              $ref: '#/visitors/document/objects/bindings/mqtt/OperationBinding'
            },
            mqtt5: {
              $ref: '#/visitors/document/objects/bindings/mqtt5/OperationBinding'
            },
            nats: {
              $ref: '#/visitors/document/objects/bindings/nats/OperationBinding'
            },
            jms: {
              $ref: '#/visitors/document/objects/bindings/jms/OperationBinding'
            },
            sns: {
              $ref: '#/visitors/document/objects/bindings/sns/OperationBinding'
            },
            solace: {
              $ref: '#/visitors/document/objects/bindings/solace/OperationBinding'
            },
            sqs: {
              $ref: '#/visitors/document/objects/bindings/sqs/OperationBinding'
            },
            stomp: {
              $ref: '#/visitors/document/objects/bindings/stomp/OperationBinding'
            },
            redis: {
              $ref: '#/visitors/document/objects/bindings/redis/OperationBinding'
            },
            mercure: {
              $ref: '#/visitors/document/objects/bindings/mercure/OperationBinding'
            },
            googlepubsub: {
              $ref: '#/visitors/document/objects/bindings/googlepubsub/OperationBinding'
            },
            ibmmq: {
              $ref: '#/visitors/document/objects/bindings/ibmmq/OperationBinding'
            },
            pulsar: {
              $ref: '#/visitors/document/objects/bindings/pulsar/OperationBinding'
            }
          }
        },
        MessageBindings: {
          $visitor: _index26.default,
          fixedFields: {
            http: {
              $ref: '#/visitors/document/objects/bindings/http/MessageBinding'
            },
            ws: {
              $ref: '#/visitors/document/objects/bindings/ws/MessageBinding'
            },
            kafka: {
              $ref: '#/visitors/document/objects/bindings/kafka/MessageBinding'
            },
            anypointmq: {
              $ref: '#/visitors/document/objects/bindings/anypointmq/MessageBinding'
            },
            amqp: {
              $ref: '#/visitors/document/objects/bindings/amqp/MessageBinding'
            },
            amqp1: {
              $ref: '#/visitors/document/objects/bindings/amqp1/MessageBinding'
            },
            mqtt: {
              $ref: '#/visitors/document/objects/bindings/mqtt/MessageBinding'
            },
            mqtt5: {
              $ref: '#/visitors/document/objects/bindings/mqtt5/MessageBinding'
            },
            nats: {
              $ref: '#/visitors/document/objects/bindings/nats/MessageBinding'
            },
            jms: {
              $ref: '#/visitors/document/objects/bindings/jms/MessageBinding'
            },
            sns: {
              $ref: '#/visitors/document/objects/bindings/sns/MessageBinding'
            },
            solace: {
              $ref: '#/visitors/document/objects/bindings/solace/MessageBinding'
            },
            sqs: {
              $ref: '#/visitors/document/objects/bindings/sqs/MessageBinding'
            },
            stomp: {
              $ref: '#/visitors/document/objects/bindings/stomp/MessageBinding'
            },
            redis: {
              $ref: '#/visitors/document/objects/bindings/redis/MessageBinding'
            },
            mercure: {
              $ref: '#/visitors/document/objects/bindings/mercure/MessageBinding'
            },
            ibmmq: {
              $ref: '#/visitors/document/objects/bindings/ibmmq/MessageBinding'
            },
            googlepubsub: {
              $ref: '#/visitors/document/objects/bindings/googlepubsub/MessageBinding'
            },
            pulsar: {
              $ref: '#/visitors/document/objects/bindings/pulsar/MessageBinding'
            }
          }
        },
        CorrelationID: {
          $visitor: _index4.default,
          fixedFields: {
            description: {
              $ref: '#/visitors/value'
            },
            location: {
              $ref: '#/visitors/value'
            }
          }
        },
        bindings: {
          http: {
            ServerBinding: {
              $visitor: _index47.default
            },
            ChannelBinding: {
              $visitor: _index44.default
            },
            OperationBinding: {
              $visitor: _index46.default,
              fixedFields: {
                type: {
                  $ref: '#/visitors/value'
                },
                method: {
                  $ref: '#/visitors/value'
                },
                query: _SchemaOrReferenceVisitor.default,
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            MessageBinding: {
              $visitor: _index45.default,
              fixedFields: {
                headers: _SchemaOrReferenceVisitor.default,
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            }
          },
          ws: {
            ServerBinding: {
              $visitor: _index107.default
            },
            ChannelBinding: {
              $visitor: _index104.default,
              fixedFields: {
                method: {
                  $ref: '#/visitors/value'
                },
                query: _SchemaOrReferenceVisitor.default,
                headers: _SchemaOrReferenceVisitor.default,
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            OperationBinding: {
              $visitor: _index106.default
            },
            MessageBinding: {
              $visitor: _index105.default
            }
          },
          kafka: {
            ServerBinding: {
              $visitor: _index63.default,
              fixedFields: {
                schemaRegistryUrl: {
                  $ref: '#/visitors/value'
                },
                schemaRegistryVendor: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            ChannelBinding: {
              $visitor: _index60.default,
              fixedFields: {
                topic: {
                  $ref: '#/visitors/value'
                },
                partitions: {
                  $ref: '#/visitors/value'
                },
                replicas: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            OperationBinding: {
              $visitor: _index62.default,
              fixedFields: {
                groupId: _SchemaOrReferenceVisitor.default,
                clientId: _SchemaOrReferenceVisitor.default,
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            MessageBinding: {
              $visitor: _index61.default,
              fixedFields: {
                key: _SchemaOrReferenceVisitor.default,
                schemaIdLocation: {
                  $ref: '#/visitors/value'
                },
                schemaIdPayloadEncoding: {
                  $ref: '#/visitors/value'
                },
                schemaLookupStrategy: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            }
          },
          anypointmq: {
            ServerBinding: {
              $visitor: _index43.default
            },
            ChannelBinding: {
              $visitor: _index40.default,
              fixedFields: {
                destination: {
                  $ref: '#/visitors/value'
                },
                destinationType: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            OperationBinding: {
              $visitor: _index42.default
            },
            MessageBinding: {
              $visitor: _index41.default,
              fixedFields: {
                headers: _SchemaOrReferenceVisitor.default,
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            }
          },
          amqp: {
            ServerBinding: {
              $visitor: _index35.default
            },
            ChannelBinding: {
              $visitor: _index32.default,
              fixedFields: {
                is: {
                  $ref: '#/visitors/value'
                },
                exchange: {
                  $ref: '#/visitors/value'
                },
                queue: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            OperationBinding: {
              $visitor: _index34.default,
              fixedFields: {
                expiration: {
                  $ref: '#/visitors/value'
                },
                userId: {
                  $ref: '#/visitors/value'
                },
                cc: {
                  $ref: '#/visitors/value'
                },
                priority: {
                  $ref: '#/visitors/value'
                },
                deliveryMode: {
                  $ref: '#/visitors/value'
                },
                mandatory: {
                  $ref: '#/visitors/value'
                },
                bcc: {
                  $ref: '#/visitors/value'
                },
                replyTo: {
                  $ref: '#/visitors/value'
                },
                timestamp: {
                  $ref: '#/visitors/value'
                },
                ack: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            MessageBinding: {
              $visitor: _index33.default,
              fixedFields: {
                contentEncoding: {
                  $ref: '#/visitors/value'
                },
                messageType: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            }
          },
          amqp1: {
            ServerBinding: {
              $visitor: _index39.default
            },
            ChannelBinding: {
              $visitor: _index36.default
            },
            OperationBinding: {
              $visitor: _index38.default
            },
            MessageBinding: {
              $visitor: _index37.default
            }
          },
          mqtt: {
            ServerBinding: {
              $visitor: _index71.default,
              fixedFields: {
                clientId: {
                  $ref: '#/visitors/value'
                },
                cleanSession: {
                  $ref: '#/visitors/value'
                },
                lastWill: {
                  $ref: '#/visitors/value'
                },
                keepAlive: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            ChannelBinding: {
              $visitor: _index68.default
            },
            OperationBinding: {
              $visitor: _index70.default,
              fixedFields: {
                qos: {
                  $ref: '#/visitors/value'
                },
                retain: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            MessageBinding: {
              $visitor: _index69.default,
              fixedFields: {
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            }
          },
          mqtt5: {
            ServerBinding: {
              $visitor: _index75.default
            },
            ChannelBinding: {
              $visitor: _index72.default
            },
            OperationBinding: {
              $visitor: _index74.default
            },
            MessageBinding: {
              $visitor: _index73.default
            }
          },
          nats: {
            ServerBinding: {
              $visitor: _index79.default
            },
            ChannelBinding: {
              $visitor: _index76.default
            },
            OperationBinding: {
              $visitor: _index78.default,
              fixedFields: {
                queue: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            MessageBinding: {
              $visitor: _index77.default
            }
          },
          pulsar: {
            ServerBinding: {
              $visitor: _index83.default,
              fixedFields: {
                tenant: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            ChannelBinding: {
              $visitor: _index80.default,
              fixedFields: {
                namespace: {
                  $ref: '#/visitors/value'
                },
                persistence: {
                  $ref: '#/visitors/value'
                },
                compaction: {
                  $ref: '#/visitors/value'
                },
                'geo-replication': {
                  $ref: '#/visitors/value'
                },
                retention: {
                  $ref: '#/visitors/value'
                },
                ttl: {
                  $ref: '#/visitors/value'
                },
                deduplication: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            OperationBinding: {
              $visitor: _index82.default
            },
            MessageBinding: {
              $visitor: _index81.default
            }
          },
          jms: {
            ServerBinding: {
              $visitor: _index59.default
            },
            ChannelBinding: {
              $visitor: _index56.default
            },
            OperationBinding: {
              $visitor: _index58.default
            },
            MessageBinding: {
              $visitor: _index57.default
            }
          },
          sns: {
            ServerBinding: {
              $visitor: _index91.default
            },
            ChannelBinding: {
              $visitor: _index88.default
            },
            OperationBinding: {
              $visitor: _index90.default
            },
            MessageBinding: {
              $visitor: _index89.default
            }
          },
          solace: {
            ServerBinding: {
              $visitor: _index95.default,
              fixedFields: {
                bindingVersion: {
                  $ref: '#/visitors/value'
                },
                msgVpn: {
                  $ref: '#/visitors/value'
                }
              }
            },
            ChannelBinding: {
              $visitor: _index92.default
            },
            OperationBinding: {
              $visitor: _index94.default,
              fixedFields: {
                bindingVersion: {
                  $ref: '#/visitors/value'
                },
                destinations: {
                  $ref: '#/visitors/value'
                }
              }
            },
            MessageBinding: {
              $visitor: _index93.default
            }
          },
          sqs: {
            ServerBinding: {
              $visitor: _index99.default
            },
            ChannelBinding: {
              $visitor: _index96.default
            },
            OperationBinding: {
              $visitor: _index98.default
            },
            MessageBinding: {
              $visitor: _index97.default
            }
          },
          stomp: {
            ServerBinding: {
              $visitor: _index103.default
            },
            ChannelBinding: {
              $visitor: _index100.default
            },
            OperationBinding: {
              $visitor: _index102.default
            },
            MessageBinding: {
              $visitor: _index101.default
            }
          },
          redis: {
            ServerBinding: {
              $visitor: _index87.default
            },
            ChannelBinding: {
              $visitor: _index84.default
            },
            OperationBinding: {
              $visitor: _index86.default
            },
            MessageBinding: {
              $visitor: _index85.default
            }
          },
          mercure: {
            ServerBinding: {
              $visitor: _index67.default
            },
            ChannelBinding: {
              $visitor: _index64.default
            },
            OperationBinding: {
              $visitor: _index66.default
            },
            MessageBinding: {
              $visitor: _index65.default
            }
          },
          googlepubsub: {
            ServerBinding: {
              $visitor: _index51.default
            },
            ChannelBinding: {
              $visitor: _index48.default,
              fixedFields: {
                bindingVersion: {
                  $ref: '#/visitors/value'
                },
                labels: {
                  $ref: '#/visitors/value'
                },
                messageRetentionDuration: {
                  $ref: '#/visitors/value'
                },
                messageStoragePolicy: {
                  $ref: '#/visitors/value'
                },
                schemaSettings: {
                  $ref: '#/visitors/value'
                },
                topic: {
                  $ref: '#/visitors/value'
                }
              }
            },
            OperationBinding: {
              $visitor: _index50.default
            },
            MessageBinding: {
              $visitor: _index49.default,
              fixedFields: {
                bindingVersion: {
                  $ref: '#/visitors/value'
                },
                attributes: {
                  $ref: '#/visitors/value'
                },
                orderingKey: {
                  $ref: '#/visitors/value'
                },
                schema: {
                  $ref: '#/visitors/value'
                }
              }
            }
          },
          ibmmq: {
            ServerBinding: {
              $visitor: _index55.default,
              fixedFields: {
                groupId: {
                  $ref: '#/visitors/value'
                },
                ccdtQueueManagerName: {
                  $ref: '#/visitors/value'
                },
                cipherSpec: {
                  $ref: '#/visitors/value'
                },
                multiEndpointServer: {
                  $ref: '#/visitors/value'
                },
                heartBeatInterval: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            ChannelBinding: {
              $visitor: _index52.default,
              fixedFields: {
                destinationType: {
                  $ref: '#/visitors/value'
                },
                queue: {
                  $ref: '#/visitors/value'
                },
                topic: {
                  $ref: '#/visitors/value'
                },
                maxMsgLength: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            MessageBinding: {
              $visitor: _index53.default,
              fixedFields: {
                type: {
                  $ref: '#/visitors/value'
                },
                headers: {
                  $ref: '#/visitors/value'
                },
                description: {
                  $ref: '#/visitors/value'
                },
                expiry: {
                  $ref: '#/visitors/value'
                },
                bindingVersion: {
                  $ref: '#/visitors/value'
                }
              }
            },
            OperationBinding: {
              $visitor: _index54.default
            }
          }
        }
      },
      extension: {
        $visitor: _SpecificationExtensionVisitor.default
      }
    }
  }
};
var _default = exports.default = specification;