// source: pulumi/converter.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var proto = { pulumirpc: { codegen: { }, testing: { } } }, global = proto;

var pulumi_codegen_hcl_pb = require('./codegen/hcl_pb.js');
goog.object.extend(proto, pulumi_codegen_hcl_pb);
var pulumi_plugin_pb = require('./plugin_pb.js');
goog.object.extend(proto, pulumi_plugin_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.pulumirpc.ConvertProgramRequest', null, global);
goog.exportSymbol('proto.pulumirpc.ConvertProgramResponse', null, global);
goog.exportSymbol('proto.pulumirpc.ConvertStateRequest', null, global);
goog.exportSymbol('proto.pulumirpc.ConvertStateResponse', null, global);
goog.exportSymbol('proto.pulumirpc.ResourceImport', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulumirpc.ConvertStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulumirpc.ConvertStateRequest.repeatedFields_, null);
};
goog.inherits(proto.pulumirpc.ConvertStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulumirpc.ConvertStateRequest.displayName = 'proto.pulumirpc.ConvertStateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulumirpc.ResourceImport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulumirpc.ResourceImport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulumirpc.ResourceImport.displayName = 'proto.pulumirpc.ResourceImport';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulumirpc.ConvertStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulumirpc.ConvertStateResponse.repeatedFields_, null);
};
goog.inherits(proto.pulumirpc.ConvertStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulumirpc.ConvertStateResponse.displayName = 'proto.pulumirpc.ConvertStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulumirpc.ConvertProgramRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulumirpc.ConvertProgramRequest.repeatedFields_, null);
};
goog.inherits(proto.pulumirpc.ConvertProgramRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulumirpc.ConvertProgramRequest.displayName = 'proto.pulumirpc.ConvertProgramRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulumirpc.ConvertProgramResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulumirpc.ConvertProgramResponse.repeatedFields_, null);
};
goog.inherits(proto.pulumirpc.ConvertProgramResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulumirpc.ConvertProgramResponse.displayName = 'proto.pulumirpc.ConvertProgramResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulumirpc.ConvertStateRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulumirpc.ConvertStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pulumirpc.ConvertStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulumirpc.ConvertStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.ConvertStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapperTarget: jspb.Message.getFieldWithDefault(msg, 1, ""),
    argsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulumirpc.ConvertStateRequest}
 */
proto.pulumirpc.ConvertStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulumirpc.ConvertStateRequest;
  return proto.pulumirpc.ConvertStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulumirpc.ConvertStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulumirpc.ConvertStateRequest}
 */
proto.pulumirpc.ConvertStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapperTarget(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulumirpc.ConvertStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulumirpc.ConvertStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulumirpc.ConvertStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.ConvertStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapperTarget();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string mapper_target = 1;
 * @return {string}
 */
proto.pulumirpc.ConvertStateRequest.prototype.getMapperTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulumirpc.ConvertStateRequest} returns this
 */
proto.pulumirpc.ConvertStateRequest.prototype.setMapperTarget = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string args = 2;
 * @return {!Array<string>}
 */
proto.pulumirpc.ConvertStateRequest.prototype.getArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pulumirpc.ConvertStateRequest} returns this
 */
proto.pulumirpc.ConvertStateRequest.prototype.setArgsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pulumirpc.ConvertStateRequest} returns this
 */
proto.pulumirpc.ConvertStateRequest.prototype.addArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulumirpc.ConvertStateRequest} returns this
 */
proto.pulumirpc.ConvertStateRequest.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulumirpc.ResourceImport.prototype.toObject = function(opt_includeInstance) {
  return proto.pulumirpc.ResourceImport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulumirpc.ResourceImport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.ResourceImport.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, ""),
    version: jspb.Message.getFieldWithDefault(msg, 4, ""),
    plugindownloadurl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    logicalName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    isComponent: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    isRemote: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulumirpc.ResourceImport}
 */
proto.pulumirpc.ResourceImport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulumirpc.ResourceImport;
  return proto.pulumirpc.ResourceImport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulumirpc.ResourceImport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulumirpc.ResourceImport}
 */
proto.pulumirpc.ResourceImport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlugindownloadurl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogicalName(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsComponent(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRemote(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulumirpc.ResourceImport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulumirpc.ResourceImport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulumirpc.ResourceImport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.ResourceImport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPlugindownloadurl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLogicalName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIsComponent();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getIsRemote();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.pulumirpc.ResourceImport.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulumirpc.ResourceImport} returns this
 */
proto.pulumirpc.ResourceImport.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pulumirpc.ResourceImport.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulumirpc.ResourceImport} returns this
 */
proto.pulumirpc.ResourceImport.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.pulumirpc.ResourceImport.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulumirpc.ResourceImport} returns this
 */
proto.pulumirpc.ResourceImport.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string version = 4;
 * @return {string}
 */
proto.pulumirpc.ResourceImport.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulumirpc.ResourceImport} returns this
 */
proto.pulumirpc.ResourceImport.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string pluginDownloadURL = 5;
 * @return {string}
 */
proto.pulumirpc.ResourceImport.prototype.getPlugindownloadurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulumirpc.ResourceImport} returns this
 */
proto.pulumirpc.ResourceImport.prototype.setPlugindownloadurl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string logical_name = 6;
 * @return {string}
 */
proto.pulumirpc.ResourceImport.prototype.getLogicalName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulumirpc.ResourceImport} returns this
 */
proto.pulumirpc.ResourceImport.prototype.setLogicalName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool is_component = 7;
 * @return {boolean}
 */
proto.pulumirpc.ResourceImport.prototype.getIsComponent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulumirpc.ResourceImport} returns this
 */
proto.pulumirpc.ResourceImport.prototype.setIsComponent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool is_remote = 8;
 * @return {boolean}
 */
proto.pulumirpc.ResourceImport.prototype.getIsRemote = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulumirpc.ResourceImport} returns this
 */
proto.pulumirpc.ResourceImport.prototype.setIsRemote = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulumirpc.ConvertStateResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulumirpc.ConvertStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulumirpc.ConvertStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulumirpc.ConvertStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.ConvertStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    proto.pulumirpc.ResourceImport.toObject, includeInstance),
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    pulumi_codegen_hcl_pb.Diagnostic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulumirpc.ConvertStateResponse}
 */
proto.pulumirpc.ConvertStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulumirpc.ConvertStateResponse;
  return proto.pulumirpc.ConvertStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulumirpc.ConvertStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulumirpc.ConvertStateResponse}
 */
proto.pulumirpc.ConvertStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pulumirpc.ResourceImport;
      reader.readMessage(value,proto.pulumirpc.ResourceImport.deserializeBinaryFromReader);
      msg.addResources(value);
      break;
    case 2:
      var value = new pulumi_codegen_hcl_pb.Diagnostic;
      reader.readMessage(value,pulumi_codegen_hcl_pb.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulumirpc.ConvertStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulumirpc.ConvertStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulumirpc.ConvertStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.ConvertStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pulumirpc.ResourceImport.serializeBinaryToWriter
    );
  }
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      pulumi_codegen_hcl_pb.Diagnostic.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ResourceImport resources = 1;
 * @return {!Array<!proto.pulumirpc.ResourceImport>}
 */
proto.pulumirpc.ConvertStateResponse.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.pulumirpc.ResourceImport>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pulumirpc.ResourceImport, 1));
};


/**
 * @param {!Array<!proto.pulumirpc.ResourceImport>} value
 * @return {!proto.pulumirpc.ConvertStateResponse} returns this
*/
proto.pulumirpc.ConvertStateResponse.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pulumirpc.ResourceImport=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulumirpc.ResourceImport}
 */
proto.pulumirpc.ConvertStateResponse.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pulumirpc.ResourceImport, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulumirpc.ConvertStateResponse} returns this
 */
proto.pulumirpc.ConvertStateResponse.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};


/**
 * repeated codegen.Diagnostic diagnostics = 2;
 * @return {!Array<!proto.pulumirpc.codegen.Diagnostic>}
 */
proto.pulumirpc.ConvertStateResponse.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.pulumirpc.codegen.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, pulumi_codegen_hcl_pb.Diagnostic, 2));
};


/**
 * @param {!Array<!proto.pulumirpc.codegen.Diagnostic>} value
 * @return {!proto.pulumirpc.ConvertStateResponse} returns this
*/
proto.pulumirpc.ConvertStateResponse.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.pulumirpc.codegen.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulumirpc.codegen.Diagnostic}
 */
proto.pulumirpc.ConvertStateResponse.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.pulumirpc.codegen.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulumirpc.ConvertStateResponse} returns this
 */
proto.pulumirpc.ConvertStateResponse.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulumirpc.ConvertProgramRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulumirpc.ConvertProgramRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pulumirpc.ConvertProgramRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulumirpc.ConvertProgramRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.ConvertProgramRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceDirectory: jspb.Message.getFieldWithDefault(msg, 1, ""),
    targetDirectory: jspb.Message.getFieldWithDefault(msg, 2, ""),
    mapperTarget: jspb.Message.getFieldWithDefault(msg, 3, ""),
    loaderTarget: jspb.Message.getFieldWithDefault(msg, 4, ""),
    argsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulumirpc.ConvertProgramRequest}
 */
proto.pulumirpc.ConvertProgramRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulumirpc.ConvertProgramRequest;
  return proto.pulumirpc.ConvertProgramRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulumirpc.ConvertProgramRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulumirpc.ConvertProgramRequest}
 */
proto.pulumirpc.ConvertProgramRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceDirectory(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetDirectory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapperTarget(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoaderTarget(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulumirpc.ConvertProgramRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulumirpc.ConvertProgramRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulumirpc.ConvertProgramRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.ConvertProgramRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceDirectory();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTargetDirectory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMapperTarget();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLoaderTarget();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string source_directory = 1;
 * @return {string}
 */
proto.pulumirpc.ConvertProgramRequest.prototype.getSourceDirectory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulumirpc.ConvertProgramRequest} returns this
 */
proto.pulumirpc.ConvertProgramRequest.prototype.setSourceDirectory = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string target_directory = 2;
 * @return {string}
 */
proto.pulumirpc.ConvertProgramRequest.prototype.getTargetDirectory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulumirpc.ConvertProgramRequest} returns this
 */
proto.pulumirpc.ConvertProgramRequest.prototype.setTargetDirectory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string mapper_target = 3;
 * @return {string}
 */
proto.pulumirpc.ConvertProgramRequest.prototype.getMapperTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulumirpc.ConvertProgramRequest} returns this
 */
proto.pulumirpc.ConvertProgramRequest.prototype.setMapperTarget = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string loader_target = 4;
 * @return {string}
 */
proto.pulumirpc.ConvertProgramRequest.prototype.getLoaderTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulumirpc.ConvertProgramRequest} returns this
 */
proto.pulumirpc.ConvertProgramRequest.prototype.setLoaderTarget = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string args = 5;
 * @return {!Array<string>}
 */
proto.pulumirpc.ConvertProgramRequest.prototype.getArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pulumirpc.ConvertProgramRequest} returns this
 */
proto.pulumirpc.ConvertProgramRequest.prototype.setArgsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pulumirpc.ConvertProgramRequest} returns this
 */
proto.pulumirpc.ConvertProgramRequest.prototype.addArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulumirpc.ConvertProgramRequest} returns this
 */
proto.pulumirpc.ConvertProgramRequest.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulumirpc.ConvertProgramResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulumirpc.ConvertProgramResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulumirpc.ConvertProgramResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulumirpc.ConvertProgramResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.ConvertProgramResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    pulumi_codegen_hcl_pb.Diagnostic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulumirpc.ConvertProgramResponse}
 */
proto.pulumirpc.ConvertProgramResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulumirpc.ConvertProgramResponse;
  return proto.pulumirpc.ConvertProgramResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulumirpc.ConvertProgramResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulumirpc.ConvertProgramResponse}
 */
proto.pulumirpc.ConvertProgramResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pulumi_codegen_hcl_pb.Diagnostic;
      reader.readMessage(value,pulumi_codegen_hcl_pb.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulumirpc.ConvertProgramResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulumirpc.ConvertProgramResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulumirpc.ConvertProgramResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.ConvertProgramResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pulumi_codegen_hcl_pb.Diagnostic.serializeBinaryToWriter
    );
  }
};


/**
 * repeated codegen.Diagnostic diagnostics = 1;
 * @return {!Array<!proto.pulumirpc.codegen.Diagnostic>}
 */
proto.pulumirpc.ConvertProgramResponse.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.pulumirpc.codegen.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, pulumi_codegen_hcl_pb.Diagnostic, 1));
};


/**
 * @param {!Array<!proto.pulumirpc.codegen.Diagnostic>} value
 * @return {!proto.pulumirpc.ConvertProgramResponse} returns this
*/
proto.pulumirpc.ConvertProgramResponse.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pulumirpc.codegen.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulumirpc.codegen.Diagnostic}
 */
proto.pulumirpc.ConvertProgramResponse.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pulumirpc.codegen.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulumirpc.ConvertProgramResponse} returns this
 */
proto.pulumirpc.ConvertProgramResponse.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};


goog.object.extend(exports, proto.pulumirpc);
