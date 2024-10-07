"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _ramda = require("ramda");
var _apidomCore = require("@swagger-api/apidom-core");
var _mediaTypes = _interopRequireDefault(require("../../media-types.cjs"));
var _AsyncApiVersion = _interopRequireDefault(require("../../elements/AsyncApiVersion.cjs"));
var _Identifier = _interopRequireDefault(require("../../elements/Identifier.cjs"));
var _Info = _interopRequireDefault(require("../../elements/Info.cjs"));
var _Servers = _interopRequireDefault(require("../../elements/Servers.cjs"));
var _DefaultContentType = _interopRequireDefault(require("../../elements/DefaultContentType.cjs"));
var _Channels = _interopRequireDefault(require("../../elements/Channels.cjs"));
var _Components = _interopRequireDefault(require("../../elements/Components.cjs"));
var _Tags = _interopRequireDefault(require("../../elements/Tags.cjs"));
var _ExternalDocumentation = _interopRequireDefault(require("../../elements/ExternalDocumentation.cjs"));
var _Contact = _interopRequireDefault(require("../../elements/Contact.cjs"));
var _License = _interopRequireDefault(require("../../elements/License.cjs"));
var _Server = _interopRequireDefault(require("../../elements/Server.cjs"));
var _ServerVariable = _interopRequireDefault(require("../../elements/ServerVariable.cjs"));
var _ChannelItem = _interopRequireDefault(require("../../elements/ChannelItem.cjs"));
var _Schema = _interopRequireDefault(require("../../elements/Schema.cjs"));
var _Message = _interopRequireDefault(require("../../elements/Message.cjs"));
var _SecurityScheme = _interopRequireDefault(require("../../elements/SecurityScheme.cjs"));
var _Parameter = _interopRequireDefault(require("../../elements/Parameter.cjs"));
var _CorrelationID = _interopRequireDefault(require("../../elements/CorrelationID.cjs"));
var _OperationTrait = _interopRequireDefault(require("../../elements/OperationTrait.cjs"));
var _MessageTrait = _interopRequireDefault(require("../../elements/MessageTrait.cjs"));
var _ServerBindings = _interopRequireDefault(require("../../elements/ServerBindings.cjs"));
var _ChannelBindings = _interopRequireDefault(require("../../elements/ChannelBindings.cjs"));
var _OperationBindings = _interopRequireDefault(require("../../elements/OperationBindings.cjs"));
var _MessageBindings = _interopRequireDefault(require("../../elements/MessageBindings.cjs"));
var _OAuthFlows = _interopRequireDefault(require("../../elements/OAuthFlows.cjs"));
var _OAuthFlow = _interopRequireDefault(require("../../elements/OAuthFlow.cjs"));
var _Operation = _interopRequireDefault(require("../../elements/Operation.cjs"));
var _SecurityRequirement = _interopRequireDefault(require("../../elements/SecurityRequirement.cjs"));
var _Tag = _interopRequireDefault(require("../../elements/Tag.cjs"));
var _MessageExample = _interopRequireDefault(require("../../elements/MessageExample.cjs"));
var _AmqpChannelBinding = _interopRequireDefault(require("../../elements/bindings/amqp/AmqpChannelBinding.cjs"));
var _AmqpMessageBinding = _interopRequireDefault(require("../../elements/bindings/amqp/AmqpMessageBinding.cjs"));
var _AmqpOperationBinding = _interopRequireDefault(require("../../elements/bindings/amqp/AmqpOperationBinding.cjs"));
var _AmqpServerBinding = _interopRequireDefault(require("../../elements/bindings/amqp/AmqpServerBinding.cjs"));
var _Amqp1ChannelBinding = _interopRequireDefault(require("../../elements/bindings/amqp1/Amqp1ChannelBinding.cjs"));
var _Amqp1MessageBinding = _interopRequireDefault(require("../../elements/bindings/amqp1/Amqp1MessageBinding.cjs"));
var _Amqp1OperationBinding = _interopRequireDefault(require("../../elements/bindings/amqp1/Amqp1OperationBinding.cjs"));
var _Amqp1ServerBinding = _interopRequireDefault(require("../../elements/bindings/amqp1/Amqp1ServerBinding.cjs"));
var _AnypointmqChannelBinding = _interopRequireDefault(require("../../elements/bindings/anypointmq/AnypointmqChannelBinding.cjs"));
var _AnypointmqMessageBinding = _interopRequireDefault(require("../../elements/bindings/anypointmq/AnypointmqMessageBinding.cjs"));
var _AnypointmqOperationBinding = _interopRequireDefault(require("../../elements/bindings/anypointmq/AnypointmqOperationBinding.cjs"));
var _AnypointmqServerBinding = _interopRequireDefault(require("../../elements/bindings/anypointmq/AnypointmqServerBinding.cjs"));
var _GooglepubsubChannelBinding = _interopRequireDefault(require("../../elements/bindings/googlepubsub/GooglepubsubChannelBinding.cjs"));
var _GooglepubsubMessageBinding = _interopRequireDefault(require("../../elements/bindings/googlepubsub/GooglepubsubMessageBinding.cjs"));
var _GooglepubsubOperationBinding = _interopRequireDefault(require("../../elements/bindings/googlepubsub/GooglepubsubOperationBinding.cjs"));
var _GooglepubsubServerBinding = _interopRequireDefault(require("../../elements/bindings/googlepubsub/GooglepubsubServerBinding.cjs"));
var _HttpChannelBinding = _interopRequireDefault(require("../../elements/bindings/http/HttpChannelBinding.cjs"));
var _HttpMessageBinding = _interopRequireDefault(require("../../elements/bindings/http/HttpMessageBinding.cjs"));
var _HttpOperationBinding = _interopRequireDefault(require("../../elements/bindings/http/HttpOperationBinding.cjs"));
var _HttpServerBinding = _interopRequireDefault(require("../../elements/bindings/http/HttpServerBinding.cjs"));
var _IbmmqChannelBinding = _interopRequireDefault(require("../../elements/bindings/ibmmq/IbmmqChannelBinding.cjs"));
var _IbmmqMessageBinding = _interopRequireDefault(require("../../elements/bindings/ibmmq/IbmmqMessageBinding.cjs"));
var _IbmmqOperationBinding = _interopRequireDefault(require("../../elements/bindings/ibmmq/IbmmqOperationBinding.cjs"));
var _IbmmqServerBinding = _interopRequireDefault(require("../../elements/bindings/ibmmq/IbmmqServerBinding.cjs"));
var _JmsChannelBinding = _interopRequireDefault(require("../../elements/bindings/jms/JmsChannelBinding.cjs"));
var _JmsMessageBinding = _interopRequireDefault(require("../../elements/bindings/jms/JmsMessageBinding.cjs"));
var _JmsOperationBinding = _interopRequireDefault(require("../../elements/bindings/jms/JmsOperationBinding.cjs"));
var _JmsServerBinding = _interopRequireDefault(require("../../elements/bindings/jms/JmsServerBinding.cjs"));
var _KafkaChannelBinding = _interopRequireDefault(require("../../elements/bindings/kafka/KafkaChannelBinding.cjs"));
var _KafkaMessageBinding = _interopRequireDefault(require("../../elements/bindings/kafka/KafkaMessageBinding.cjs"));
var _KafkaOperationBinding = _interopRequireDefault(require("../../elements/bindings/kafka/KafkaOperationBinding.cjs"));
var _KafkaServerBinding = _interopRequireDefault(require("../../elements/bindings/kafka/KafkaServerBinding.cjs"));
var _MercureChannelBinding = _interopRequireDefault(require("../../elements/bindings/mercure/MercureChannelBinding.cjs"));
var _MercureMessageBinding = _interopRequireDefault(require("../../elements/bindings/mercure/MercureMessageBinding.cjs"));
var _MercureOperationBinding = _interopRequireDefault(require("../../elements/bindings/mercure/MercureOperationBinding.cjs"));
var _MercureServerBinding = _interopRequireDefault(require("../../elements/bindings/mercure/MercureServerBinding.cjs"));
var _MqttChannelBinding = _interopRequireDefault(require("../../elements/bindings/mqtt/MqttChannelBinding.cjs"));
var _MqttMessageBinding = _interopRequireDefault(require("../../elements/bindings/mqtt/MqttMessageBinding.cjs"));
var _MqttOperationBinding = _interopRequireDefault(require("../../elements/bindings/mqtt/MqttOperationBinding.cjs"));
var _MqttServerBinding = _interopRequireDefault(require("../../elements/bindings/mqtt/MqttServerBinding.cjs"));
var _Mqtt5ChannelBinding = _interopRequireDefault(require("../../elements/bindings/mqtt5/Mqtt5ChannelBinding.cjs"));
var _Mqtt5MessageBinding = _interopRequireDefault(require("../../elements/bindings/mqtt5/Mqtt5MessageBinding.cjs"));
var _Mqtt5OperationBinding = _interopRequireDefault(require("../../elements/bindings/mqtt5/Mqtt5OperationBinding.cjs"));
var _Mqtt5ServerBinding = _interopRequireDefault(require("../../elements/bindings/mqtt5/Mqtt5ServerBinding.cjs"));
var _NatsChannelBinding = _interopRequireDefault(require("../../elements/bindings/nats/NatsChannelBinding.cjs"));
var _NatsMessageBinding = _interopRequireDefault(require("../../elements/bindings/nats/NatsMessageBinding.cjs"));
var _NatsOperationBinding = _interopRequireDefault(require("../../elements/bindings/nats/NatsOperationBinding.cjs"));
var _NatsServerBinding = _interopRequireDefault(require("../../elements/bindings/nats/NatsServerBinding.cjs"));
var _PulsarChannelBinding = _interopRequireDefault(require("../../elements/bindings/pulsar/PulsarChannelBinding.cjs"));
var _PulsarMessageBinding = _interopRequireDefault(require("../../elements/bindings/pulsar/PulsarMessageBinding.cjs"));
var _PulsarOperationBinding = _interopRequireDefault(require("../../elements/bindings/pulsar/PulsarOperationBinding.cjs"));
var _PulsarServerBinding = _interopRequireDefault(require("../../elements/bindings/pulsar/PulsarServerBinding.cjs"));
var _RedisChannelBinding = _interopRequireDefault(require("../../elements/bindings/redis/RedisChannelBinding.cjs"));
var _RedisMessageBinding = _interopRequireDefault(require("../../elements/bindings/redis/RedisMessageBinding.cjs"));
var _RedisOperationBinding = _interopRequireDefault(require("../../elements/bindings/redis/RedisOperationBinding.cjs"));
var _RedisServerBinding = _interopRequireDefault(require("../../elements/bindings/redis/RedisServerBinding.cjs"));
var _SnsChannelBinding = _interopRequireDefault(require("../../elements/bindings/sns/SnsChannelBinding.cjs"));
var _SnsMessageBinding = _interopRequireDefault(require("../../elements/bindings/sns/SnsMessageBinding.cjs"));
var _SnsOperationBinding = _interopRequireDefault(require("../../elements/bindings/sns/SnsOperationBinding.cjs"));
var _SnsServerBinding = _interopRequireDefault(require("../../elements/bindings/sns/SnsServerBinding.cjs"));
var _SolaceChannelBinding = _interopRequireDefault(require("../../elements/bindings/solace/SolaceChannelBinding.cjs"));
var _SolaceMessageBinding = _interopRequireDefault(require("../../elements/bindings/solace/SolaceMessageBinding.cjs"));
var _SolaceOperationBinding = _interopRequireDefault(require("../../elements/bindings/solace/SolaceOperationBinding.cjs"));
var _SolaceServerBinding = _interopRequireDefault(require("../../elements/bindings/solace/SolaceServerBinding.cjs"));
var _SqsChannelBinding = _interopRequireDefault(require("../../elements/bindings/sqs/SqsChannelBinding.cjs"));
var _SqsMessageBinding = _interopRequireDefault(require("../../elements/bindings/sqs/SqsMessageBinding.cjs"));
var _SqsOperationBinding = _interopRequireDefault(require("../../elements/bindings/sqs/SqsOperationBinding.cjs"));
var _SqsServerBinding = _interopRequireDefault(require("../../elements/bindings/sqs/SqsServerBinding.cjs"));
var _StompChannelBinding = _interopRequireDefault(require("../../elements/bindings/stomp/StompChannelBinding.cjs"));
var _StompMessageBinding = _interopRequireDefault(require("../../elements/bindings/stomp/StompMessageBinding.cjs"));
var _StompOperationBinding = _interopRequireDefault(require("../../elements/bindings/stomp/StompOperationBinding.cjs"));
var _StompServerBinding = _interopRequireDefault(require("../../elements/bindings/stomp/StompServerBinding.cjs"));
var _WebSocketChannelBinding = _interopRequireDefault(require("../../elements/bindings/ws/WebSocketChannelBinding.cjs"));
var _WebSocketMessageBinding = _interopRequireDefault(require("../../elements/bindings/ws/WebSocketMessageBinding.cjs"));
var _WebSocketOperationBinding = _interopRequireDefault(require("../../elements/bindings/ws/WebSocketOperationBinding.cjs"));
var _WebSocketServerBinding = _interopRequireDefault(require("../../elements/bindings/ws/WebSocketServerBinding.cjs"));
var _ComponentsSchemas = _interopRequireDefault(require("../../elements/nces/ComponentsSchemas.cjs"));
var _ComponentsServers = _interopRequireDefault(require("../../elements/nces/ComponentsServers.cjs"));
var _ComponentsServerVariables = _interopRequireDefault(require("../../elements/nces/ComponentsServerVariables.cjs"));
var _ComponentsMessages = _interopRequireDefault(require("../../elements/nces/ComponentsMessages.cjs"));
var _ComponentsSecuritySchemes = _interopRequireDefault(require("../../elements/nces/ComponentsSecuritySchemes.cjs"));
var _ComponentsParameters = _interopRequireDefault(require("../../elements/nces/ComponentsParameters.cjs"));
var _ComponentsCorrelationIDs = _interopRequireDefault(require("../../elements/nces/ComponentsCorrelationIDs.cjs"));
var _ComponentsOperationTraits = _interopRequireDefault(require("../../elements/nces/ComponentsOperationTraits.cjs"));
var _ComponentsMessageTraits = _interopRequireDefault(require("../../elements/nces/ComponentsMessageTraits.cjs"));
var _ComponentsServerBindings = _interopRequireDefault(require("../../elements/nces/ComponentsServerBindings.cjs"));
var _ComponentsChannelBindings = _interopRequireDefault(require("../../elements/nces/ComponentsChannelBindings.cjs"));
var _ComponentsOperationBindings = _interopRequireDefault(require("../../elements/nces/ComponentsOperationBindings.cjs"));
var _ComponentsMessageBindings = _interopRequireDefault(require("../../elements/nces/ComponentsMessageBindings.cjs"));
var _ServerVariables = _interopRequireDefault(require("../../elements/nces/ServerVariables.cjs"));
var _ChannelItemsServers = _interopRequireDefault(require("../../elements/nces/ChannelItemsServers.cjs"));
var _OAuthFlowScopes = _interopRequireDefault(require("../../elements/nces/OAuthFlowScopes.cjs"));
var _OperationTraits = _interopRequireDefault(require("../../elements/nces/OperationTraits.cjs"));
var _ServerSecurity = _interopRequireDefault(require("../../elements/nces/ServerSecurity.cjs"));
var _OperationMessageMap = _interopRequireDefault(require("../../elements/nces/OperationMessageMap.cjs"));
var _OperationMessage = _interopRequireDefault(require("../../elements/nces/OperationMessage.cjs"));
var _OperationSecurity = _interopRequireDefault(require("../../elements/nces/OperationSecurity.cjs"));
var _OperationTraitSecurity = _interopRequireDefault(require("../../elements/nces/OperationTraitSecurity.cjs"));
var _MessageExamples = _interopRequireDefault(require("../../elements/nces/MessageExamples.cjs"));
var _MessageTraits = _interopRequireDefault(require("../../elements/nces/MessageTraits.cjs"));
var _MessageTraitExamples = _interopRequireDefault(require("../../elements/nces/MessageTraitExamples.cjs"));
var _visitor = require("../../traversal/visitor.cjs");
/**
 * AsyncApi >= 2.0.0 <=2.6.0 specification elements.
 */

/**
 * Binding elements.
 */
// AMQP 0-9-1

// AMQP 1.0

// Anypoint MQ

// Google Cloud Pub/Sub

// HTTP

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

// non-concrete Elements (NCEs)

/**
 * This plugin is specific to YAML 1.2 format, which allows defining key-value pairs
 * with empty key, empty value, or both. If the value is not provided in YAML format,
 * this plugin compensates for this missing value with the most appropriate semantic element type.
 *
 * https://yaml.org/spec/1.2.2/#72-empty-nodes
 *
 * @example
 *
 * ```yaml
 * asyncapi: 2.6.0
 * info:
 * ```
 * Refracting result without this plugin:
 *
 *  (AsyncApi2Element
 *    (MemberElement
 *      (StringElement)
 *      (AsyncApiVersionElement))
 *    (MemberElement
 *      (StringElement)
 *      (StringElement))
 *
 * Refracting result with this plugin:
 *
 *  (AsyncApi2Element
 *    (MemberElement
 *      (StringElement)
 *      (AsyncApiVersionElement))
 *    (MemberElement
 *      (StringElement)
 *      (InfoElement))
 */

const isEmptyElement = element => (0, _apidomCore.isStringElement)(element) && (0, _apidomCore.includesClasses)(['yaml-e-node', 'yaml-e-scalar'], element);
const schema = {
  // concrete types handling (CTs)
  AsyncApi2Element: {
    asyncapi(...args) {
      return new _AsyncApiVersion.default(...args);
    },
    identifier(...args) {
      return new _Identifier.default(...args);
    },
    info(...args) {
      return new _Info.default(...args);
    },
    servers(...args) {
      return new _Servers.default(...args);
    },
    defaultContentType(...args) {
      return new _DefaultContentType.default(...args);
    },
    channels(...args) {
      return new _Channels.default(...args);
    },
    components(...args) {
      return new _Components.default(...args);
    },
    tags(...args) {
      return new _Tags.default(...args);
    },
    externalDocs(...args) {
      return new _ExternalDocumentation.default(...args);
    }
  },
  InfoElement: {
    contact(...args) {
      return new _Contact.default(...args);
    },
    license(...args) {
      return new _License.default(...args);
    }
  },
  ServersElement: {
    '[key: *]': function key(...args) {
      return new _Server.default(...args);
    }
  },
  ServerElement: {
    variables(...args) {
      return new _ServerVariables.default(...args);
    },
    security(...args) {
      return new _ServerSecurity.default(...args);
    },
    tags(...args) {
      return new _Tags.default(...args);
    },
    bindings(...args) {
      return new _ServerBindings.default(...args);
    }
  },
  ServerVariableElement: {
    enum(...args) {
      return new _apidomCore.ArrayElement(...args);
    },
    examples(...args) {
      return new _apidomCore.ArrayElement(...args);
    }
  },
  SecurityRequirementElement: {
    '[key: *]': function key(...args) {
      return new _apidomCore.ArrayElement(...args);
    }
  },
  ChannelsElement: {
    '[key: *]': function key(...args) {
      return new _ChannelItem.default(...args);
    }
  },
  ChannelItemElement: {
    servers(...args) {
      return new _ChannelItemsServers.default(...args);
    },
    subscribe(...args) {
      return new _Operation.default(...args);
    },
    publish(...args) {
      return new _Operation.default(...args);
    },
    parameters(...args) {
      return new _Parameter.default(...args);
    },
    bindings(...args) {
      return new _ChannelBindings.default(...args);
    }
  },
  OperationElement: {
    tags(...args) {
      return new _Tags.default(...args);
    },
    externalDocs(...args) {
      return new _ExternalDocumentation.default(...args);
    },
    bindings(...args) {
      return new _OperationBindings.default(...args);
    },
    traits(...args) {
      return new _OperationTraits.default(...args);
    },
    message(...args) {
      return new _Message.default(...args);
    }
  },
  ComponentsElement: {
    schemas(...args) {
      return new _ComponentsSchemas.default(...args);
    },
    servers(...args) {
      return new _ComponentsServers.default(...args);
    },
    serverVariables(...args) {
      return new _ComponentsServerVariables.default(...args);
    },
    messages(...args) {
      return new _ComponentsMessages.default(...args);
    },
    securitySchemes(...args) {
      return new _ComponentsSecuritySchemes.default(...args);
    },
    parameters(...args) {
      return new _ComponentsParameters.default(...args);
    },
    correlationIds(...args) {
      return new _ComponentsCorrelationIDs.default(...args);
    },
    operationTraits(...args) {
      return new _ComponentsOperationTraits.default(...args);
    },
    messageTraits(...args) {
      return new _ComponentsMessageTraits.default(...args);
    },
    serverBindings(...args) {
      return new _ComponentsServerBindings.default(...args);
    },
    channelBindings(...args) {
      return new _ComponentsChannelBindings.default(...args);
    },
    operationBindings(...args) {
      return new _ComponentsOperationBindings.default(...args);
    },
    messageBindings(...args) {
      return new _ComponentsMessageBindings.default(...args);
    }
  },
  TagElement: {
    externalDocs(...args) {
      return new _ExternalDocumentation.default(...args);
    }
  },
  MessageElement: {
    headers(...args) {
      return new _Schema.default(...args);
    },
    correlationId(...args) {
      return new _CorrelationID.default(...args);
    },
    tags(...args) {
      return new _Tags.default(...args);
    },
    externalDocs(...args) {
      return new _ExternalDocumentation.default(...args);
    },
    bindings(...args) {
      return new _MessageBindings.default(...args);
    },
    examples(...args) {
      return new _apidomCore.ArrayElement(...args);
    },
    traits(...args) {
      return new _apidomCore.ArrayElement(...args);
    },
    payload(...args) {
      // @ts-ignore
      const {
        context: messageElement
      } = this;
      const schemaFormat = (0, _ramda.defaultTo)(_mediaTypes.default.latest(), (0, _apidomCore.toValue)(messageElement.schemaFormat));
      if (_mediaTypes.default.includes(schemaFormat)) {
        return new _Schema.default(...args);
      }
      return new _apidomCore.ObjectElement(...args);
    }
  },
  SecuritySchemeElement: {
    flows(...args) {
      return new _OAuthFlows.default(...args);
    }
  },
  OAuthFlowsElement: {
    implicit(...args) {
      return new _OAuthFlow.default(...args);
    },
    password(...args) {
      return new _OAuthFlow.default(...args);
    },
    clientCredentials(...args) {
      return new _OAuthFlow.default(...args);
    },
    authorizationCode(...args) {
      return new _OAuthFlow.default(...args);
    }
  },
  OAuthFlow: {
    scopes(...args) {
      return new _OAuthFlowScopes.default(...args);
    }
  },
  ParametersElement: {
    '[key: *]': function key(...args) {
      return new _Parameter.default(...args);
    }
  },
  ParameterElement: {
    schema(...args) {
      return new _Schema.default(...args);
    }
  },
  OperationTraitElement: {
    tags(...args) {
      return new _Tags.default(...args);
    },
    externalDocs(...args) {
      return new _ExternalDocumentation.default(...args);
    },
    bindings(...args) {
      return new _OperationBindings.default(...args);
    }
  },
  MessageTraitElement: {
    headers(...args) {
      return new _Schema.default(...args);
    },
    correlationId(...args) {
      return new _CorrelationID.default(...args);
    },
    tags(...args) {
      return new _Tags.default(...args);
    },
    externalDocs(...args) {
      return new _ExternalDocumentation.default(...args);
    },
    bindings(...args) {
      return new _MessageBindings.default(...args);
    },
    examples(...args) {
      return new _apidomCore.ArrayElement(...args);
    }
  },
  MessageExampleElement: {
    headers(...args) {
      return new _apidomCore.ObjectElement(...args);
    }
  },
  OperationBindingsElement: {
    http(...args) {
      return new _HttpOperationBinding.default(...args);
    },
    ws(...args) {
      return new _WebSocketOperationBinding.default(...args);
    },
    kafka(...args) {
      return new _KafkaOperationBinding.default(...args);
    },
    anypointmq(...args) {
      return new _AnypointmqOperationBinding.default(...args);
    },
    amqp(...args) {
      return new _AmqpOperationBinding.default(...args);
    },
    amqp1(...args) {
      return new _Amqp1OperationBinding.default(...args);
    },
    mqtt(...args) {
      return new _MqttOperationBinding.default(...args);
    },
    mqtt5(...args) {
      return new _Mqtt5OperationBinding.default(...args);
    },
    nats(...args) {
      return new _NatsOperationBinding.default(...args);
    },
    jms(...args) {
      return new _JmsOperationBinding.default(...args);
    },
    sns(...args) {
      return new _SnsOperationBinding.default(...args);
    },
    solace(...args) {
      return new _SolaceOperationBinding.default(...args);
    },
    sqs(...args) {
      return new _SqsOperationBinding.default(...args);
    },
    stomp(...args) {
      return new _StompOperationBinding.default(...args);
    },
    redis(...args) {
      return new _RedisOperationBinding.default(...args);
    },
    mercure(...args) {
      return new _MercureOperationBinding.default(...args);
    },
    googlepubsub(...args) {
      return new _GooglepubsubOperationBinding.default(...args);
    },
    ibmmq(...args) {
      return new _IbmmqOperationBinding.default(...args);
    },
    pulsar(...args) {
      return new _PulsarOperationBinding.default(...args);
    }
  },
  MessageBindingsElement: {
    http(...args) {
      return new _HttpMessageBinding.default(...args);
    },
    ws(...args) {
      return new _WebSocketMessageBinding.default(...args);
    },
    kafka(...args) {
      return new _KafkaMessageBinding.default(...args);
    },
    anypointmq(...args) {
      return new _AnypointmqMessageBinding.default(...args);
    },
    amqp(...args) {
      return new _AmqpMessageBinding.default(...args);
    },
    amqp1(...args) {
      return new _Amqp1MessageBinding.default(...args);
    },
    mqtt(...args) {
      return new _MqttMessageBinding.default(...args);
    },
    mqtt5(...args) {
      return new _Mqtt5MessageBinding.default(...args);
    },
    nats(...args) {
      return new _NatsMessageBinding.default(...args);
    },
    jms(...args) {
      return new _JmsMessageBinding.default(...args);
    },
    sns(...args) {
      return new _SnsMessageBinding.default(...args);
    },
    solace(...args) {
      return new _SolaceMessageBinding.default(...args);
    },
    sqs(...args) {
      return new _SqsMessageBinding.default(...args);
    },
    stomp(...args) {
      return new _StompMessageBinding.default(...args);
    },
    redis(...args) {
      return new _RedisMessageBinding.default(...args);
    },
    mercure(...args) {
      return new _MercureMessageBinding.default(...args);
    },
    ibmmq(...args) {
      return new _IbmmqMessageBinding.default(...args);
    },
    googlepubsub(...args) {
      return new _GooglepubsubMessageBinding.default(...args);
    },
    pulsar(...args) {
      return new _PulsarMessageBinding.default(...args);
    }
  },
  ServerBindingsElement: {
    http(...args) {
      return new _HttpServerBinding.default(...args);
    },
    ws(...args) {
      return new _WebSocketServerBinding.default(...args);
    },
    kafka(...args) {
      return new _KafkaServerBinding.default(...args);
    },
    anypointmq(...args) {
      return new _AnypointmqServerBinding.default(...args);
    },
    amqp(...args) {
      return new _AmqpServerBinding.default(...args);
    },
    amqp1(...args) {
      return new _Amqp1ServerBinding.default(...args);
    },
    mqtt(...args) {
      return new _MqttServerBinding.default(...args);
    },
    mqtt5(...args) {
      return new _Mqtt5ServerBinding.default(...args);
    },
    nats(...args) {
      return new _NatsServerBinding.default(...args);
    },
    jms(...args) {
      return new _JmsServerBinding.default(...args);
    },
    sns(...args) {
      return new _SnsServerBinding.default(...args);
    },
    solace(...args) {
      return new _SolaceServerBinding.default(...args);
    },
    sqs(...args) {
      return new _SqsServerBinding.default(...args);
    },
    stomp(...args) {
      return new _StompServerBinding.default(...args);
    },
    redis(...args) {
      return new _RedisServerBinding.default(...args);
    },
    mercure(...args) {
      return new _MercureServerBinding.default(...args);
    },
    ibmmq(...args) {
      return new _IbmmqServerBinding.default(...args);
    },
    googlepubsub(...args) {
      return new _GooglepubsubServerBinding.default(...args);
    },
    pulsar(...args) {
      return new _PulsarServerBinding.default(...args);
    }
  },
  ChannelBindingsElement: {
    http(...args) {
      return new _HttpChannelBinding.default(...args);
    },
    ws(...args) {
      return new _WebSocketChannelBinding.default(...args);
    },
    kafka(...args) {
      return new _KafkaChannelBinding.default(...args);
    },
    anypointmq(...args) {
      return new _AnypointmqChannelBinding.default(...args);
    },
    amqp(...args) {
      return new _AmqpChannelBinding.default(...args);
    },
    amqp1(...args) {
      return new _Amqp1ChannelBinding.default(...args);
    },
    mqtt(...args) {
      return new _MqttChannelBinding.default(...args);
    },
    mqtt5(...args) {
      return new _Mqtt5ChannelBinding.default(...args);
    },
    nats(...args) {
      return new _NatsChannelBinding.default(...args);
    },
    jms(...args) {
      return new _JmsChannelBinding.default(...args);
    },
    sns(...args) {
      return new _SnsChannelBinding.default(...args);
    },
    solace(...args) {
      return new _SolaceChannelBinding.default(...args);
    },
    sqs(...args) {
      return new _SqsChannelBinding.default(...args);
    },
    stomp(...args) {
      return new _StompChannelBinding.default(...args);
    },
    redis(...args) {
      return new _RedisChannelBinding.default(...args);
    },
    mercure(...args) {
      return new _MercureChannelBinding.default(...args);
    },
    ibmmq(...args) {
      return new _IbmmqChannelBinding.default(...args);
    },
    googlepubsub(...args) {
      return new _GooglepubsubChannelBinding.default(...args);
    },
    pulsar(...args) {
      return new _PulsarChannelBinding.default(...args);
    }
  },
  SchemaElement: {
    allOf(...args) {
      const element = new _apidomCore.ArrayElement(...args);
      element.classes.push('json-schema-allOf');
      return element;
    },
    anyOf(...args) {
      const element = new _apidomCore.ArrayElement(...args);
      element.classes.push('json-schema-anyOf');
      return element;
    },
    oneOf(...args) {
      const element = new _apidomCore.ArrayElement(...args);
      element.classes.push('json-schema-oneOf');
      return element;
    },
    not(...args) {
      return new _Schema.default(...args);
    },
    if(...args) {
      return new _Schema.default(...args);
    },
    then(...args) {
      return new _Schema.default(...args);
    },
    else(...args) {
      return new _Schema.default(...args);
    },
    enum(...args) {
      return new _apidomCore.ArrayElement(...args);
    },
    items(...args) {
      return new _Schema.default(...args);
    },
    additionalItems(...args) {
      return new _Schema.default(...args);
    },
    contains(...args) {
      return new _Schema.default(...args);
    },
    required(...args) {
      const element = new _apidomCore.ArrayElement(...args);
      element.classes.push('json-schema-required');
      return element;
    },
    properties(...args) {
      const element = new _apidomCore.ObjectElement(...args);
      element.classes.push('json-schema-properties');
      return element;
    },
    patternProperties(...args) {
      const element = new _apidomCore.ObjectElement(...args);
      element.classes.push('json-schema-patternProperties');
      return element;
    },
    additionalProperties(...args) {
      return new _Schema.default(...args);
    },
    dependencies(...args) {
      const element = new _apidomCore.ObjectElement(...args);
      element.classes.push('json-schema-dependencies');
      return element;
    },
    propertyNames(...args) {
      return new _Schema.default(...args);
    },
    examples(...args) {
      const element = new _apidomCore.ArrayElement(...args);
      element.classes.push('json-schema-examples');
      return element;
    },
    definitions(...args) {
      const element = new _apidomCore.ObjectElement(...args);
      element.classes.push('json-schema-definitions');
      return element;
    },
    externalDocs(...args) {
      return new _ExternalDocumentation.default(...args);
    }
  },
  HttpOperationBindingElement: {
    query(...args) {
      return new _Schema.default(...args);
    }
  },
  HttpMessageBindingElement: {
    headers(...args) {
      return new _Schema.default(...args);
    }
  },
  WebSocketChannelBindingElement: {
    query(...args) {
      return new _Schema.default(...args);
    },
    headers(...args) {
      return new _Schema.default(...args);
    }
  },
  KafkaOperationBindingElement: {
    groupId(...args) {
      return new _Schema.default(...args);
    },
    clientId(...args) {
      return new _Schema.default(...args);
    }
  },
  KafkaMessageBindingElement: {
    key(...args) {
      return new _Schema.default(...args);
    }
  },
  AnypointmqMessageBindingElement: {
    headers(...args) {
      return new _Schema.default(...args);
    }
  },
  AmqpChannelBindingElement: {
    exchange(...args) {
      return new _apidomCore.ObjectElement(...args);
    },
    queue(...args) {
      return new _apidomCore.ObjectElement(...args);
    }
  },
  AmqpOperationBindingElement: {
    cc(...args) {
      return new _apidomCore.ArrayElement(...args);
    },
    bcc(...args) {
      return new _apidomCore.ArrayElement(...args);
    }
  },
  IbmmqChannelBindingElement: {
    queue(...args) {
      return new _apidomCore.ObjectElement(...args);
    },
    topic(...args) {
      return new _apidomCore.ObjectElement(...args);
    }
  },
  MqttServerBindingElement: {
    lastWill(...args) {
      return new _apidomCore.ObjectElement(...args);
    }
  },
  SolaceOperationBindingElement: {
    destinations(...args) {
      return new _apidomCore.ArrayElement(...args);
    }
  },
  GooglepubsubChannelBindingElement: {
    labels(...args) {
      return new _apidomCore.ObjectElement(...args);
    },
    messageStoragePolicy(...args) {
      return new _apidomCore.ObjectElement(...args);
    },
    schemaSettings(...args) {
      return new _apidomCore.ObjectElement(...args);
    }
  },
  GooglepubsubMessageBindingElement: {
    attributes(...args) {
      return new _apidomCore.ObjectElement(...args);
    },
    schema(...args) {
      return new _apidomCore.ObjectElement(...args);
    }
  },
  PulsarChannelBindingElement: {
    'geo-replication': function (...args) {
      return new _apidomCore.ArrayElement(...args);
    },
    retention(...args) {
      return new _apidomCore.ObjectElement(...args);
    }
  },
  TagsElement: {
    '<*>': function asterisk(...args) {
      return new _Tag.default(...args);
    }
  },
  // non-concrete types handling (NCEs)
  [_ComponentsSchemas.default.primaryClass]: {
    '[key: *]': function key(...args) {
      return new _Schema.default(...args);
    }
  },
  [_ComponentsServers.default.primaryClass]: {
    '[key: *]': function key(...args) {
      return new _Server.default(...args);
    }
  },
  [_ComponentsServerVariables.default.primaryClass]: {
    '[key: *]': function key(...args) {
      return new _ServerVariable.default(...args);
    }
  },
  [_ComponentsMessages.default.primaryClass]: {
    '[key: *]': function key(...args) {
      return new _Message.default(...args);
    }
  },
  [_ComponentsSecuritySchemes.default.primaryClass]: {
    '[key: *]': function key(...args) {
      return new _SecurityScheme.default(...args);
    }
  },
  [_ComponentsParameters.default.primaryClass]: {
    '[key: *]': function key(...args) {
      return new _Parameter.default(...args);
    }
  },
  [_ComponentsCorrelationIDs.default.primaryClass]: {
    '[key: *]': function key(...args) {
      return new _CorrelationID.default(...args);
    }
  },
  [_ComponentsOperationTraits.default.primaryClass]: {
    '[key: *]': function key(...args) {
      return new _OperationTrait.default(...args);
    }
  },
  [_ComponentsMessageTraits.default.primaryClass]: {
    '[key: *]': function key(...args) {
      return new _MessageTrait.default(...args);
    }
  },
  [_ComponentsServerBindings.default.primaryClass]: {
    '[key: *]': function key(...args) {
      return new _ServerBindings.default(...args);
    }
  },
  [_ComponentsChannelBindings.default.primaryClass]: {
    '[key: *]': function key(...args) {
      return new _ChannelBindings.default(...args);
    }
  },
  [_ComponentsOperationBindings.default.primaryClass]: {
    '[key: *]': function key(...args) {
      return new _OperationBindings.default(...args);
    }
  },
  [_ComponentsMessageBindings.default.primaryClass]: {
    '[key: *]': function key(...args) {
      return new _MessageBindings.default(...args);
    }
  },
  [_ServerVariables.default.primaryClass]: {
    '[key: *]': function key(...args) {
      return new _ServerVariable.default(...args);
    }
  },
  'json-schema-properties': {
    '[key: *]': function key(...args) {
      return new _Schema.default(...args);
    }
  },
  [_ServerSecurity.default.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _SecurityRequirement.default(...args);
    }
  },
  [_OperationTraits.default.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _OperationTrait.default(...args);
    }
  },
  [_OperationMessageMap.default.primaryClass]: {
    oneOf(...args) {
      return new _OperationMessage.default(...args);
    }
  },
  [_OperationMessage.default.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _Message.default(...args);
    }
  },
  [_OperationSecurity.default.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _SecurityRequirement.default(...args);
    }
  },
  [_OperationTraitSecurity.default.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _SecurityRequirement.default(...args);
    }
  },
  [_MessageExamples.default.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _MessageExample.default(...args);
    }
  },
  [_MessageTraits.default.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _MessageTrait.default(...args);
    }
  },
  [_MessageTraitExamples.default.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _MessageExample.default(...args);
    }
  },
  'json-schema-allOf': {
    '<*>': function asterisk(...args) {
      return new _Schema.default(...args);
    }
  },
  'json-schema-anyOf': {
    '<*>': function asterisk(...args) {
      return new _Schema.default(...args);
    }
  },
  'json-schema-oneOf': {
    '<*>': function asterisk(...args) {
      return new _Schema.default(...args);
    }
  }
};
const findElementFactory = (ancestor, keyName) => {
  const elementType = (0, _visitor.getNodeType)(ancestor); // @ts-ignore
  const keyMapping = schema[elementType] || schema[(0, _apidomCore.toValue)(ancestor.classes.first)];
  return typeof keyMapping === 'undefined' ? undefined : Object.prototype.hasOwnProperty.call(keyMapping, '[key: *]') ? keyMapping['[key: *]'] : keyMapping[keyName];
};
const plugin = () => () => ({
  visitor: {
    StringElement(element, key, parent, path, ancestors) {
      if (!isEmptyElement(element)) return undefined;
      const lineage = [...ancestors, parent].filter(_apidomCore.isElement);
      const parentElement = lineage[lineage.length - 1]; // @TODO(vladimir.gorej@gmail.com): can be replaced by Array.prototype.at in future
      let elementFactory;
      let context;
      if ((0, _apidomCore.isArrayElement)(parentElement)) {
        context = element;
        elementFactory = findElementFactory(parentElement, '<*>');
      } else if ((0, _apidomCore.isMemberElement)(parentElement)) {
        context = lineage[lineage.length - 2]; // @TODO(vladimir.gorej@gmail.com): can be replaced by Array.prototype.at in future
        elementFactory = findElementFactory(context, (0, _apidomCore.toValue)(parentElement.key));
      }

      // no element factory found
      if (typeof elementFactory !== 'function') return undefined;
      return elementFactory.call({
        context
      }, undefined, (0, _apidomCore.cloneDeep)(element.meta), (0, _apidomCore.cloneDeep)(element.attributes));
    }
  }
});
var _default = exports.default = plugin;