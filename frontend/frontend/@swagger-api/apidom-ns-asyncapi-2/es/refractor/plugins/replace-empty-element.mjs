import { defaultTo } from 'ramda';
import { ObjectElement, ArrayElement, isStringElement, isArrayElement, isMemberElement, isElement, includesClasses, cloneDeep, toValue } from '@swagger-api/apidom-core';
import mediaTypes from "../../media-types.mjs";
/**
 * AsyncApi >= 2.0.0 <=2.6.0 specification elements.
 */
import AsyncApiVersionElement from "../../elements/AsyncApiVersion.mjs";
import IdentifierElement from "../../elements/Identifier.mjs";
import InfoElement from "../../elements/Info.mjs";
import ServersElement from "../../elements/Servers.mjs";
import DefaultContentTypeElement from "../../elements/DefaultContentType.mjs";
import ChannelsElement from "../../elements/Channels.mjs";
import ComponentsElement from "../../elements/Components.mjs";
import TagsElement from "../../elements/Tags.mjs";
import ExternalDocumentationElement from "../../elements/ExternalDocumentation.mjs";
import ContactElement from "../../elements/Contact.mjs";
import LicenseElement from "../../elements/License.mjs";
import ServerElement from "../../elements/Server.mjs";
import ServerVariableElement from "../../elements/ServerVariable.mjs";
import ChannelItemElement from "../../elements/ChannelItem.mjs";
import SchemaElement from "../../elements/Schema.mjs";
import MessageElement from "../../elements/Message.mjs";
import SecuritySchemeElement from "../../elements/SecurityScheme.mjs";
import ParameterElement from "../../elements/Parameter.mjs";
import CorrelationIDElement from "../../elements/CorrelationID.mjs";
import OperationTraitElement from "../../elements/OperationTrait.mjs";
import MessageTraitElement from "../../elements/MessageTrait.mjs";
import ServerBindingsElement from "../../elements/ServerBindings.mjs";
import ChannelBindingsElement from "../../elements/ChannelBindings.mjs";
import OperationBindingsElement from "../../elements/OperationBindings.mjs";
import MessageBindingsElement from "../../elements/MessageBindings.mjs";
import OAuthFlowsElement from "../../elements/OAuthFlows.mjs";
import OAuthFlowElement from "../../elements/OAuthFlow.mjs";
import OperationElement from "../../elements/Operation.mjs";
import SecurityRequirementElement from "../../elements/SecurityRequirement.mjs";
import TagElement from "../../elements/Tag.mjs";
import MessageExampleElement from "../../elements/MessageExample.mjs";
/**
 * Binding elements.
 */
// AMQP 0-9-1
import AmqpChannelBindingElement from "../../elements/bindings/amqp/AmqpChannelBinding.mjs";
import AmqpMessageBindingElement from "../../elements/bindings/amqp/AmqpMessageBinding.mjs";
import AmqpOperationBindingElement from "../../elements/bindings/amqp/AmqpOperationBinding.mjs";
import AmqpServerBindingElement from "../../elements/bindings/amqp/AmqpServerBinding.mjs"; // AMQP 1.0
import Amqp1ChannelBindingElement from "../../elements/bindings/amqp1/Amqp1ChannelBinding.mjs";
import Amqp1MessageBindingElement from "../../elements/bindings/amqp1/Amqp1MessageBinding.mjs";
import Amqp1OperationBindingElement from "../../elements/bindings/amqp1/Amqp1OperationBinding.mjs";
import Amqp1ServerBindingElement from "../../elements/bindings/amqp1/Amqp1ServerBinding.mjs"; // Anypoint MQ
import AnypointmqChannelBindingElement from "../../elements/bindings/anypointmq/AnypointmqChannelBinding.mjs";
import AnypointmqMessageBindingElement from "../../elements/bindings/anypointmq/AnypointmqMessageBinding.mjs";
import AnypointmqOperationBindingElement from "../../elements/bindings/anypointmq/AnypointmqOperationBinding.mjs";
import AnypointmqServerBindingElement from "../../elements/bindings/anypointmq/AnypointmqServerBinding.mjs"; // Google Cloud Pub/Sub
import GooglepubsubChannelBindingElement from "../../elements/bindings/googlepubsub/GooglepubsubChannelBinding.mjs";
import GooglepubsubMessageBindingElement from "../../elements/bindings/googlepubsub/GooglepubsubMessageBinding.mjs";
import GooglepubsubOperationBindingElement from "../../elements/bindings/googlepubsub/GooglepubsubOperationBinding.mjs";
import GooglepubsubServerBindingElement from "../../elements/bindings/googlepubsub/GooglepubsubServerBinding.mjs"; // HTTP
import HttpChannelBindingElement from "../../elements/bindings/http/HttpChannelBinding.mjs";
import HttpMessageBindingElement from "../../elements/bindings/http/HttpMessageBinding.mjs";
import HttpOperationBindingElement from "../../elements/bindings/http/HttpOperationBinding.mjs";
import HttpServerBindingElement from "../../elements/bindings/http/HttpServerBinding.mjs"; // IBM MQ
import IbmmqChannelBindingElement from "../../elements/bindings/ibmmq/IbmmqChannelBinding.mjs";
import IbmmqMessageBindingElement from "../../elements/bindings/ibmmq/IbmmqMessageBinding.mjs";
import IbmmqOperationBindingElement from "../../elements/bindings/ibmmq/IbmmqOperationBinding.mjs";
import IbmmqServerBindingElement from "../../elements/bindings/ibmmq/IbmmqServerBinding.mjs"; // JMS
import JmsChannelBindingElement from "../../elements/bindings/jms/JmsChannelBinding.mjs";
import JmsMessageBindingElement from "../../elements/bindings/jms/JmsMessageBinding.mjs";
import JmsOperationBindingElement from "../../elements/bindings/jms/JmsOperationBinding.mjs";
import JmsServerBindingElement from "../../elements/bindings/jms/JmsServerBinding.mjs"; // Kafka
import KafkaChannelBindingElement from "../../elements/bindings/kafka/KafkaChannelBinding.mjs";
import KafkaMessageBindingElement from "../../elements/bindings/kafka/KafkaMessageBinding.mjs";
import KafkaOperationBindingElement from "../../elements/bindings/kafka/KafkaOperationBinding.mjs";
import KafkaServerBindingElement from "../../elements/bindings/kafka/KafkaServerBinding.mjs"; // Mercure
import MercureChannelBindingElement from "../../elements/bindings/mercure/MercureChannelBinding.mjs";
import MercureMessageBindingElement from "../../elements/bindings/mercure/MercureMessageBinding.mjs";
import MercureOperationBindingElement from "../../elements/bindings/mercure/MercureOperationBinding.mjs";
import MercureServerBindingElement from "../../elements/bindings/mercure/MercureServerBinding.mjs"; // MQTT
import MqttChannelBindingElement from "../../elements/bindings/mqtt/MqttChannelBinding.mjs";
import MqttMessageBindingElement from "../../elements/bindings/mqtt/MqttMessageBinding.mjs";
import MqttOperationBindingElement from "../../elements/bindings/mqtt/MqttOperationBinding.mjs";
import MqttServerBindingElement from "../../elements/bindings/mqtt/MqttServerBinding.mjs"; // MQTT 5
import Mqtt5ChannelBindingElement from "../../elements/bindings/mqtt5/Mqtt5ChannelBinding.mjs";
import Mqtt5MessageBindingElement from "../../elements/bindings/mqtt5/Mqtt5MessageBinding.mjs";
import Mqtt5OperationBindingElement from "../../elements/bindings/mqtt5/Mqtt5OperationBinding.mjs";
import Mqtt5ServerBindingElement from "../../elements/bindings/mqtt5/Mqtt5ServerBinding.mjs"; // NATS
import NatsChannelBindingElement from "../../elements/bindings/nats/NatsChannelBinding.mjs";
import NatsMessageBindingElement from "../../elements/bindings/nats/NatsMessageBinding.mjs";
import NatsOperationBindingElement from "../../elements/bindings/nats/NatsOperationBinding.mjs";
import NatsServerBindingElement from "../../elements/bindings/nats/NatsServerBinding.mjs"; // Pulsar
import PulsarChannelBindingElement from "../../elements/bindings/pulsar/PulsarChannelBinding.mjs";
import PulsarMessageBindingElement from "../../elements/bindings/pulsar/PulsarMessageBinding.mjs";
import PulsarOperationBindingElement from "../../elements/bindings/pulsar/PulsarOperationBinding.mjs";
import PulsarServerBindingElement from "../../elements/bindings/pulsar/PulsarServerBinding.mjs"; // Redis
import RedisChannelBindingElement from "../../elements/bindings/redis/RedisChannelBinding.mjs";
import RedisMessageBindingElement from "../../elements/bindings/redis/RedisMessageBinding.mjs";
import RedisOperationBindingElement from "../../elements/bindings/redis/RedisOperationBinding.mjs";
import RedisServerBindingElement from "../../elements/bindings/redis/RedisServerBinding.mjs"; // SNS
import SnsChannelBindingElement from "../../elements/bindings/sns/SnsChannelBinding.mjs";
import SnsMessageBindingElement from "../../elements/bindings/sns/SnsMessageBinding.mjs";
import SnsOperationBindingElement from "../../elements/bindings/sns/SnsOperationBinding.mjs";
import SnsServerBindingElement from "../../elements/bindings/sns/SnsServerBinding.mjs"; // Solace
import SolaceChannelBindingElement from "../../elements/bindings/solace/SolaceChannelBinding.mjs";
import SolaceMessageBindingElement from "../../elements/bindings/solace/SolaceMessageBinding.mjs";
import SolaceOperationBindingElement from "../../elements/bindings/solace/SolaceOperationBinding.mjs";
import SolaceServerBindingElement from "../../elements/bindings/solace/SolaceServerBinding.mjs"; // SQS
import SqsChannelBindingElement from "../../elements/bindings/sqs/SqsChannelBinding.mjs";
import SqsMessageBindingElement from "../../elements/bindings/sqs/SqsMessageBinding.mjs";
import SqsOperationBindingElement from "../../elements/bindings/sqs/SqsOperationBinding.mjs";
import SqsServerBindingElement from "../../elements/bindings/sqs/SqsServerBinding.mjs"; // STOMP
import StompChannelBindingElement from "../../elements/bindings/stomp/StompChannelBinding.mjs";
import StompMessageBindingElement from "../../elements/bindings/stomp/StompMessageBinding.mjs";
import StompOperationBindingElement from "../../elements/bindings/stomp/StompOperationBinding.mjs";
import StompServerBindingElement from "../../elements/bindings/stomp/StompServerBinding.mjs"; // WebSocket
import WebSocketChannelBindingElement from "../../elements/bindings/ws/WebSocketChannelBinding.mjs";
import WebSocketMessageBindingElement from "../../elements/bindings/ws/WebSocketMessageBinding.mjs";
import WebSocketOperationBindingElement from "../../elements/bindings/ws/WebSocketOperationBinding.mjs";
import WebSocketServerBindingElement from "../../elements/bindings/ws/WebSocketServerBinding.mjs"; // non-concrete Elements (NCEs)
import ComponentsSchemasElement from "../../elements/nces/ComponentsSchemas.mjs";
import ComponentsServersElement from "../../elements/nces/ComponentsServers.mjs";
import ComponentsServerVariablesElement from "../../elements/nces/ComponentsServerVariables.mjs";
import ComponentsMessagesElement from "../../elements/nces/ComponentsMessages.mjs";
import ComponentsSecuritySchemesElement from "../../elements/nces/ComponentsSecuritySchemes.mjs";
import ComponentsParametersElement from "../../elements/nces/ComponentsParameters.mjs";
import ComponentsCorrelationIDsElement from "../../elements/nces/ComponentsCorrelationIDs.mjs";
import ComponentsOperationTraitsElement from "../../elements/nces/ComponentsOperationTraits.mjs";
import ComponentsMessageTraitsElement from "../../elements/nces/ComponentsMessageTraits.mjs";
import ComponentsServerBindingsElement from "../../elements/nces/ComponentsServerBindings.mjs";
import ComponentsChannelBindingsElement from "../../elements/nces/ComponentsChannelBindings.mjs";
import ComponentsOperationBindingsElement from "../../elements/nces/ComponentsOperationBindings.mjs";
import ComponentsMessageBindingsElement from "../../elements/nces/ComponentsMessageBindings.mjs";
import ServerVariablesElement from "../../elements/nces/ServerVariables.mjs";
import ChannelItemServersElement from "../../elements/nces/ChannelItemsServers.mjs";
import OAuthFlowScopesElement from "../../elements/nces/OAuthFlowScopes.mjs";
import OperationTraitsElement from "../../elements/nces/OperationTraits.mjs";
import ServerSecurityElement from "../../elements/nces/ServerSecurity.mjs";
import OperationMessageMapElement from "../../elements/nces/OperationMessageMap.mjs";
import OperationMessageElement from "../../elements/nces/OperationMessage.mjs";
import OperationSecurityElement from "../../elements/nces/OperationSecurity.mjs";
import OperationTraitSecurityElement from "../../elements/nces/OperationTraitSecurity.mjs";
import MessageExamplesElement from "../../elements/nces/MessageExamples.mjs";
import MessageTraitsElement from "../../elements/nces/MessageTraits.mjs";
import MessageTraitExamplesElement from "../../elements/nces/MessageTraitExamples.mjs";
import { getNodeType } from "../../traversal/visitor.mjs";
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
const isEmptyElement = element => isStringElement(element) && includesClasses(['yaml-e-node', 'yaml-e-scalar'], element);
const schema = {
  // concrete types handling (CTs)
  AsyncApi2Element: {
    asyncapi(...args) {
      return new AsyncApiVersionElement(...args);
    },
    identifier(...args) {
      return new IdentifierElement(...args);
    },
    info(...args) {
      return new InfoElement(...args);
    },
    servers(...args) {
      return new ServersElement(...args);
    },
    defaultContentType(...args) {
      return new DefaultContentTypeElement(...args);
    },
    channels(...args) {
      return new ChannelsElement(...args);
    },
    components(...args) {
      return new ComponentsElement(...args);
    },
    tags(...args) {
      return new TagsElement(...args);
    },
    externalDocs(...args) {
      return new ExternalDocumentationElement(...args);
    }
  },
  InfoElement: {
    contact(...args) {
      return new ContactElement(...args);
    },
    license(...args) {
      return new LicenseElement(...args);
    }
  },
  ServersElement: {
    '[key: *]': function key(...args) {
      return new ServerElement(...args);
    }
  },
  ServerElement: {
    variables(...args) {
      return new ServerVariablesElement(...args);
    },
    security(...args) {
      return new ServerSecurityElement(...args);
    },
    tags(...args) {
      return new TagsElement(...args);
    },
    bindings(...args) {
      return new ServerBindingsElement(...args);
    }
  },
  ServerVariableElement: {
    enum(...args) {
      return new ArrayElement(...args);
    },
    examples(...args) {
      return new ArrayElement(...args);
    }
  },
  SecurityRequirementElement: {
    '[key: *]': function key(...args) {
      return new ArrayElement(...args);
    }
  },
  ChannelsElement: {
    '[key: *]': function key(...args) {
      return new ChannelItemElement(...args);
    }
  },
  ChannelItemElement: {
    servers(...args) {
      return new ChannelItemServersElement(...args);
    },
    subscribe(...args) {
      return new OperationElement(...args);
    },
    publish(...args) {
      return new OperationElement(...args);
    },
    parameters(...args) {
      return new ParameterElement(...args);
    },
    bindings(...args) {
      return new ChannelBindingsElement(...args);
    }
  },
  OperationElement: {
    tags(...args) {
      return new TagsElement(...args);
    },
    externalDocs(...args) {
      return new ExternalDocumentationElement(...args);
    },
    bindings(...args) {
      return new OperationBindingsElement(...args);
    },
    traits(...args) {
      return new OperationTraitsElement(...args);
    },
    message(...args) {
      return new MessageElement(...args);
    }
  },
  ComponentsElement: {
    schemas(...args) {
      return new ComponentsSchemasElement(...args);
    },
    servers(...args) {
      return new ComponentsServersElement(...args);
    },
    serverVariables(...args) {
      return new ComponentsServerVariablesElement(...args);
    },
    messages(...args) {
      return new ComponentsMessagesElement(...args);
    },
    securitySchemes(...args) {
      return new ComponentsSecuritySchemesElement(...args);
    },
    parameters(...args) {
      return new ComponentsParametersElement(...args);
    },
    correlationIds(...args) {
      return new ComponentsCorrelationIDsElement(...args);
    },
    operationTraits(...args) {
      return new ComponentsOperationTraitsElement(...args);
    },
    messageTraits(...args) {
      return new ComponentsMessageTraitsElement(...args);
    },
    serverBindings(...args) {
      return new ComponentsServerBindingsElement(...args);
    },
    channelBindings(...args) {
      return new ComponentsChannelBindingsElement(...args);
    },
    operationBindings(...args) {
      return new ComponentsOperationBindingsElement(...args);
    },
    messageBindings(...args) {
      return new ComponentsMessageBindingsElement(...args);
    }
  },
  TagElement: {
    externalDocs(...args) {
      return new ExternalDocumentationElement(...args);
    }
  },
  MessageElement: {
    headers(...args) {
      return new SchemaElement(...args);
    },
    correlationId(...args) {
      return new CorrelationIDElement(...args);
    },
    tags(...args) {
      return new TagsElement(...args);
    },
    externalDocs(...args) {
      return new ExternalDocumentationElement(...args);
    },
    bindings(...args) {
      return new MessageBindingsElement(...args);
    },
    examples(...args) {
      return new ArrayElement(...args);
    },
    traits(...args) {
      return new ArrayElement(...args);
    },
    payload(...args) {
      // @ts-ignore
      const {
        context: messageElement
      } = this;
      const schemaFormat = defaultTo(mediaTypes.latest(), toValue(messageElement.schemaFormat));
      if (mediaTypes.includes(schemaFormat)) {
        return new SchemaElement(...args);
      }
      return new ObjectElement(...args);
    }
  },
  SecuritySchemeElement: {
    flows(...args) {
      return new OAuthFlowsElement(...args);
    }
  },
  OAuthFlowsElement: {
    implicit(...args) {
      return new OAuthFlowElement(...args);
    },
    password(...args) {
      return new OAuthFlowElement(...args);
    },
    clientCredentials(...args) {
      return new OAuthFlowElement(...args);
    },
    authorizationCode(...args) {
      return new OAuthFlowElement(...args);
    }
  },
  OAuthFlow: {
    scopes(...args) {
      return new OAuthFlowScopesElement(...args);
    }
  },
  ParametersElement: {
    '[key: *]': function key(...args) {
      return new ParameterElement(...args);
    }
  },
  ParameterElement: {
    schema(...args) {
      return new SchemaElement(...args);
    }
  },
  OperationTraitElement: {
    tags(...args) {
      return new TagsElement(...args);
    },
    externalDocs(...args) {
      return new ExternalDocumentationElement(...args);
    },
    bindings(...args) {
      return new OperationBindingsElement(...args);
    }
  },
  MessageTraitElement: {
    headers(...args) {
      return new SchemaElement(...args);
    },
    correlationId(...args) {
      return new CorrelationIDElement(...args);
    },
    tags(...args) {
      return new TagsElement(...args);
    },
    externalDocs(...args) {
      return new ExternalDocumentationElement(...args);
    },
    bindings(...args) {
      return new MessageBindingsElement(...args);
    },
    examples(...args) {
      return new ArrayElement(...args);
    }
  },
  MessageExampleElement: {
    headers(...args) {
      return new ObjectElement(...args);
    }
  },
  OperationBindingsElement: {
    http(...args) {
      return new HttpOperationBindingElement(...args);
    },
    ws(...args) {
      return new WebSocketOperationBindingElement(...args);
    },
    kafka(...args) {
      return new KafkaOperationBindingElement(...args);
    },
    anypointmq(...args) {
      return new AnypointmqOperationBindingElement(...args);
    },
    amqp(...args) {
      return new AmqpOperationBindingElement(...args);
    },
    amqp1(...args) {
      return new Amqp1OperationBindingElement(...args);
    },
    mqtt(...args) {
      return new MqttOperationBindingElement(...args);
    },
    mqtt5(...args) {
      return new Mqtt5OperationBindingElement(...args);
    },
    nats(...args) {
      return new NatsOperationBindingElement(...args);
    },
    jms(...args) {
      return new JmsOperationBindingElement(...args);
    },
    sns(...args) {
      return new SnsOperationBindingElement(...args);
    },
    solace(...args) {
      return new SolaceOperationBindingElement(...args);
    },
    sqs(...args) {
      return new SqsOperationBindingElement(...args);
    },
    stomp(...args) {
      return new StompOperationBindingElement(...args);
    },
    redis(...args) {
      return new RedisOperationBindingElement(...args);
    },
    mercure(...args) {
      return new MercureOperationBindingElement(...args);
    },
    googlepubsub(...args) {
      return new GooglepubsubOperationBindingElement(...args);
    },
    ibmmq(...args) {
      return new IbmmqOperationBindingElement(...args);
    },
    pulsar(...args) {
      return new PulsarOperationBindingElement(...args);
    }
  },
  MessageBindingsElement: {
    http(...args) {
      return new HttpMessageBindingElement(...args);
    },
    ws(...args) {
      return new WebSocketMessageBindingElement(...args);
    },
    kafka(...args) {
      return new KafkaMessageBindingElement(...args);
    },
    anypointmq(...args) {
      return new AnypointmqMessageBindingElement(...args);
    },
    amqp(...args) {
      return new AmqpMessageBindingElement(...args);
    },
    amqp1(...args) {
      return new Amqp1MessageBindingElement(...args);
    },
    mqtt(...args) {
      return new MqttMessageBindingElement(...args);
    },
    mqtt5(...args) {
      return new Mqtt5MessageBindingElement(...args);
    },
    nats(...args) {
      return new NatsMessageBindingElement(...args);
    },
    jms(...args) {
      return new JmsMessageBindingElement(...args);
    },
    sns(...args) {
      return new SnsMessageBindingElement(...args);
    },
    solace(...args) {
      return new SolaceMessageBindingElement(...args);
    },
    sqs(...args) {
      return new SqsMessageBindingElement(...args);
    },
    stomp(...args) {
      return new StompMessageBindingElement(...args);
    },
    redis(...args) {
      return new RedisMessageBindingElement(...args);
    },
    mercure(...args) {
      return new MercureMessageBindingElement(...args);
    },
    ibmmq(...args) {
      return new IbmmqMessageBindingElement(...args);
    },
    googlepubsub(...args) {
      return new GooglepubsubMessageBindingElement(...args);
    },
    pulsar(...args) {
      return new PulsarMessageBindingElement(...args);
    }
  },
  ServerBindingsElement: {
    http(...args) {
      return new HttpServerBindingElement(...args);
    },
    ws(...args) {
      return new WebSocketServerBindingElement(...args);
    },
    kafka(...args) {
      return new KafkaServerBindingElement(...args);
    },
    anypointmq(...args) {
      return new AnypointmqServerBindingElement(...args);
    },
    amqp(...args) {
      return new AmqpServerBindingElement(...args);
    },
    amqp1(...args) {
      return new Amqp1ServerBindingElement(...args);
    },
    mqtt(...args) {
      return new MqttServerBindingElement(...args);
    },
    mqtt5(...args) {
      return new Mqtt5ServerBindingElement(...args);
    },
    nats(...args) {
      return new NatsServerBindingElement(...args);
    },
    jms(...args) {
      return new JmsServerBindingElement(...args);
    },
    sns(...args) {
      return new SnsServerBindingElement(...args);
    },
    solace(...args) {
      return new SolaceServerBindingElement(...args);
    },
    sqs(...args) {
      return new SqsServerBindingElement(...args);
    },
    stomp(...args) {
      return new StompServerBindingElement(...args);
    },
    redis(...args) {
      return new RedisServerBindingElement(...args);
    },
    mercure(...args) {
      return new MercureServerBindingElement(...args);
    },
    ibmmq(...args) {
      return new IbmmqServerBindingElement(...args);
    },
    googlepubsub(...args) {
      return new GooglepubsubServerBindingElement(...args);
    },
    pulsar(...args) {
      return new PulsarServerBindingElement(...args);
    }
  },
  ChannelBindingsElement: {
    http(...args) {
      return new HttpChannelBindingElement(...args);
    },
    ws(...args) {
      return new WebSocketChannelBindingElement(...args);
    },
    kafka(...args) {
      return new KafkaChannelBindingElement(...args);
    },
    anypointmq(...args) {
      return new AnypointmqChannelBindingElement(...args);
    },
    amqp(...args) {
      return new AmqpChannelBindingElement(...args);
    },
    amqp1(...args) {
      return new Amqp1ChannelBindingElement(...args);
    },
    mqtt(...args) {
      return new MqttChannelBindingElement(...args);
    },
    mqtt5(...args) {
      return new Mqtt5ChannelBindingElement(...args);
    },
    nats(...args) {
      return new NatsChannelBindingElement(...args);
    },
    jms(...args) {
      return new JmsChannelBindingElement(...args);
    },
    sns(...args) {
      return new SnsChannelBindingElement(...args);
    },
    solace(...args) {
      return new SolaceChannelBindingElement(...args);
    },
    sqs(...args) {
      return new SqsChannelBindingElement(...args);
    },
    stomp(...args) {
      return new StompChannelBindingElement(...args);
    },
    redis(...args) {
      return new RedisChannelBindingElement(...args);
    },
    mercure(...args) {
      return new MercureChannelBindingElement(...args);
    },
    ibmmq(...args) {
      return new IbmmqChannelBindingElement(...args);
    },
    googlepubsub(...args) {
      return new GooglepubsubChannelBindingElement(...args);
    },
    pulsar(...args) {
      return new PulsarChannelBindingElement(...args);
    }
  },
  SchemaElement: {
    allOf(...args) {
      const element = new ArrayElement(...args);
      element.classes.push('json-schema-allOf');
      return element;
    },
    anyOf(...args) {
      const element = new ArrayElement(...args);
      element.classes.push('json-schema-anyOf');
      return element;
    },
    oneOf(...args) {
      const element = new ArrayElement(...args);
      element.classes.push('json-schema-oneOf');
      return element;
    },
    not(...args) {
      return new SchemaElement(...args);
    },
    if(...args) {
      return new SchemaElement(...args);
    },
    then(...args) {
      return new SchemaElement(...args);
    },
    else(...args) {
      return new SchemaElement(...args);
    },
    enum(...args) {
      return new ArrayElement(...args);
    },
    items(...args) {
      return new SchemaElement(...args);
    },
    additionalItems(...args) {
      return new SchemaElement(...args);
    },
    contains(...args) {
      return new SchemaElement(...args);
    },
    required(...args) {
      const element = new ArrayElement(...args);
      element.classes.push('json-schema-required');
      return element;
    },
    properties(...args) {
      const element = new ObjectElement(...args);
      element.classes.push('json-schema-properties');
      return element;
    },
    patternProperties(...args) {
      const element = new ObjectElement(...args);
      element.classes.push('json-schema-patternProperties');
      return element;
    },
    additionalProperties(...args) {
      return new SchemaElement(...args);
    },
    dependencies(...args) {
      const element = new ObjectElement(...args);
      element.classes.push('json-schema-dependencies');
      return element;
    },
    propertyNames(...args) {
      return new SchemaElement(...args);
    },
    examples(...args) {
      const element = new ArrayElement(...args);
      element.classes.push('json-schema-examples');
      return element;
    },
    definitions(...args) {
      const element = new ObjectElement(...args);
      element.classes.push('json-schema-definitions');
      return element;
    },
    externalDocs(...args) {
      return new ExternalDocumentationElement(...args);
    }
  },
  HttpOperationBindingElement: {
    query(...args) {
      return new SchemaElement(...args);
    }
  },
  HttpMessageBindingElement: {
    headers(...args) {
      return new SchemaElement(...args);
    }
  },
  WebSocketChannelBindingElement: {
    query(...args) {
      return new SchemaElement(...args);
    },
    headers(...args) {
      return new SchemaElement(...args);
    }
  },
  KafkaOperationBindingElement: {
    groupId(...args) {
      return new SchemaElement(...args);
    },
    clientId(...args) {
      return new SchemaElement(...args);
    }
  },
  KafkaMessageBindingElement: {
    key(...args) {
      return new SchemaElement(...args);
    }
  },
  AnypointmqMessageBindingElement: {
    headers(...args) {
      return new SchemaElement(...args);
    }
  },
  AmqpChannelBindingElement: {
    exchange(...args) {
      return new ObjectElement(...args);
    },
    queue(...args) {
      return new ObjectElement(...args);
    }
  },
  AmqpOperationBindingElement: {
    cc(...args) {
      return new ArrayElement(...args);
    },
    bcc(...args) {
      return new ArrayElement(...args);
    }
  },
  IbmmqChannelBindingElement: {
    queue(...args) {
      return new ObjectElement(...args);
    },
    topic(...args) {
      return new ObjectElement(...args);
    }
  },
  MqttServerBindingElement: {
    lastWill(...args) {
      return new ObjectElement(...args);
    }
  },
  SolaceOperationBindingElement: {
    destinations(...args) {
      return new ArrayElement(...args);
    }
  },
  GooglepubsubChannelBindingElement: {
    labels(...args) {
      return new ObjectElement(...args);
    },
    messageStoragePolicy(...args) {
      return new ObjectElement(...args);
    },
    schemaSettings(...args) {
      return new ObjectElement(...args);
    }
  },
  GooglepubsubMessageBindingElement: {
    attributes(...args) {
      return new ObjectElement(...args);
    },
    schema(...args) {
      return new ObjectElement(...args);
    }
  },
  PulsarChannelBindingElement: {
    'geo-replication': function (...args) {
      return new ArrayElement(...args);
    },
    retention(...args) {
      return new ObjectElement(...args);
    }
  },
  TagsElement: {
    '<*>': function asterisk(...args) {
      return new TagElement(...args);
    }
  },
  // non-concrete types handling (NCEs)
  [ComponentsSchemasElement.primaryClass]: {
    '[key: *]': function key(...args) {
      return new SchemaElement(...args);
    }
  },
  [ComponentsServersElement.primaryClass]: {
    '[key: *]': function key(...args) {
      return new ServerElement(...args);
    }
  },
  [ComponentsServerVariablesElement.primaryClass]: {
    '[key: *]': function key(...args) {
      return new ServerVariableElement(...args);
    }
  },
  [ComponentsMessagesElement.primaryClass]: {
    '[key: *]': function key(...args) {
      return new MessageElement(...args);
    }
  },
  [ComponentsSecuritySchemesElement.primaryClass]: {
    '[key: *]': function key(...args) {
      return new SecuritySchemeElement(...args);
    }
  },
  [ComponentsParametersElement.primaryClass]: {
    '[key: *]': function key(...args) {
      return new ParameterElement(...args);
    }
  },
  [ComponentsCorrelationIDsElement.primaryClass]: {
    '[key: *]': function key(...args) {
      return new CorrelationIDElement(...args);
    }
  },
  [ComponentsOperationTraitsElement.primaryClass]: {
    '[key: *]': function key(...args) {
      return new OperationTraitElement(...args);
    }
  },
  [ComponentsMessageTraitsElement.primaryClass]: {
    '[key: *]': function key(...args) {
      return new MessageTraitElement(...args);
    }
  },
  [ComponentsServerBindingsElement.primaryClass]: {
    '[key: *]': function key(...args) {
      return new ServerBindingsElement(...args);
    }
  },
  [ComponentsChannelBindingsElement.primaryClass]: {
    '[key: *]': function key(...args) {
      return new ChannelBindingsElement(...args);
    }
  },
  [ComponentsOperationBindingsElement.primaryClass]: {
    '[key: *]': function key(...args) {
      return new OperationBindingsElement(...args);
    }
  },
  [ComponentsMessageBindingsElement.primaryClass]: {
    '[key: *]': function key(...args) {
      return new MessageBindingsElement(...args);
    }
  },
  [ServerVariablesElement.primaryClass]: {
    '[key: *]': function key(...args) {
      return new ServerVariableElement(...args);
    }
  },
  'json-schema-properties': {
    '[key: *]': function key(...args) {
      return new SchemaElement(...args);
    }
  },
  [ServerSecurityElement.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new SecurityRequirementElement(...args);
    }
  },
  [OperationTraitsElement.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new OperationTraitElement(...args);
    }
  },
  [OperationMessageMapElement.primaryClass]: {
    oneOf(...args) {
      return new OperationMessageElement(...args);
    }
  },
  [OperationMessageElement.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new MessageElement(...args);
    }
  },
  [OperationSecurityElement.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new SecurityRequirementElement(...args);
    }
  },
  [OperationTraitSecurityElement.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new SecurityRequirementElement(...args);
    }
  },
  [MessageExamplesElement.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new MessageExampleElement(...args);
    }
  },
  [MessageTraitsElement.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new MessageTraitElement(...args);
    }
  },
  [MessageTraitExamplesElement.primaryClass]: {
    '<*>': function asterisk(...args) {
      return new MessageExampleElement(...args);
    }
  },
  'json-schema-allOf': {
    '<*>': function asterisk(...args) {
      return new SchemaElement(...args);
    }
  },
  'json-schema-anyOf': {
    '<*>': function asterisk(...args) {
      return new SchemaElement(...args);
    }
  },
  'json-schema-oneOf': {
    '<*>': function asterisk(...args) {
      return new SchemaElement(...args);
    }
  }
};
const findElementFactory = (ancestor, keyName) => {
  const elementType = getNodeType(ancestor); // @ts-ignore
  const keyMapping = schema[elementType] || schema[toValue(ancestor.classes.first)];
  return typeof keyMapping === 'undefined' ? undefined : Object.prototype.hasOwnProperty.call(keyMapping, '[key: *]') ? keyMapping['[key: *]'] : keyMapping[keyName];
};
const plugin = () => () => ({
  visitor: {
    StringElement(element, key, parent, path, ancestors) {
      if (!isEmptyElement(element)) return undefined;
      const lineage = [...ancestors, parent].filter(isElement);
      const parentElement = lineage[lineage.length - 1]; // @TODO(vladimir.gorej@gmail.com): can be replaced by Array.prototype.at in future
      let elementFactory;
      let context;
      if (isArrayElement(parentElement)) {
        context = element;
        elementFactory = findElementFactory(parentElement, '<*>');
      } else if (isMemberElement(parentElement)) {
        context = lineage[lineage.length - 2]; // @TODO(vladimir.gorej@gmail.com): can be replaced by Array.prototype.at in future
        elementFactory = findElementFactory(context, toValue(parentElement.key));
      }

      // no element factory found
      if (typeof elementFactory !== 'function') return undefined;
      return elementFactory.call({
        context
      }, undefined, cloneDeep(element.meta), cloneDeep(element.attributes));
    }
  }
});
export default plugin;