"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
Copyright 2016-2022, Pulumi Corporation.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
"""
import builtins
import collections.abc
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.message
import google.protobuf.struct_pb2
import pulumi.alias_pb2
import pulumi.source_pb2
import sys

if sys.version_info >= (3, 8):
    import typing as typing_extensions
else:
    import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

@typing_extensions.final
class SupportsFeatureRequest(google.protobuf.message.Message):
    """SupportsFeatureRequest allows a client to test if the resource monitor supports a certain feature, which it may use
    to control the format or types of messages it sends.
    """

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    ID_FIELD_NUMBER: builtins.int
    id: builtins.str
    """the ID of the feature to test support for."""
    def __init__(
        self,
        *,
        id: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["id", b"id"]) -> None: ...

global___SupportsFeatureRequest = SupportsFeatureRequest

@typing_extensions.final
class SupportsFeatureResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    HASSUPPORT_FIELD_NUMBER: builtins.int
    hasSupport: builtins.bool
    """true when the resource monitor supports this feature."""
    def __init__(
        self,
        *,
        hasSupport: builtins.bool = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["hasSupport", b"hasSupport"]) -> None: ...

global___SupportsFeatureResponse = SupportsFeatureResponse

@typing_extensions.final
class ReadResourceRequest(google.protobuf.message.Message):
    """There is a clear distinction here between the "properties" bag sent across the wire as part of these RPCs and
    properties that exist on Pulumi resources as projected into the target language. It is important to call out that the
    properties here are in the format that a provider will expect. This is to say that they are usually in camel case.
    If a language wants to project properties in a format *other* than camel-case, it is the job of the language to
    ensure that the properties are translated into camel case before invoking an RPC.

    ReadResourceRequest contains enough information to uniquely qualify and read a resource's state.
    """

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    @typing_extensions.final
    class PluginChecksumsEntry(google.protobuf.message.Message):
        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        KEY_FIELD_NUMBER: builtins.int
        VALUE_FIELD_NUMBER: builtins.int
        key: builtins.str
        value: builtins.bytes
        def __init__(
            self,
            *,
            key: builtins.str = ...,
            value: builtins.bytes = ...,
        ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["key", b"key", "value", b"value"]) -> None: ...

    ID_FIELD_NUMBER: builtins.int
    TYPE_FIELD_NUMBER: builtins.int
    NAME_FIELD_NUMBER: builtins.int
    PARENT_FIELD_NUMBER: builtins.int
    PROPERTIES_FIELD_NUMBER: builtins.int
    DEPENDENCIES_FIELD_NUMBER: builtins.int
    PROVIDER_FIELD_NUMBER: builtins.int
    VERSION_FIELD_NUMBER: builtins.int
    ACCEPTSECRETS_FIELD_NUMBER: builtins.int
    ADDITIONALSECRETOUTPUTS_FIELD_NUMBER: builtins.int
    ACCEPTRESOURCES_FIELD_NUMBER: builtins.int
    PLUGINDOWNLOADURL_FIELD_NUMBER: builtins.int
    PLUGINCHECKSUMS_FIELD_NUMBER: builtins.int
    SOURCEPOSITION_FIELD_NUMBER: builtins.int
    id: builtins.str
    """the ID of the resource to read."""
    type: builtins.str
    """the type of the resource object."""
    name: builtins.str
    """the name, for URN purposes, of the object."""
    parent: builtins.str
    """an optional parent URN that this child resource belongs to."""
    @property
    def properties(self) -> google.protobuf.struct_pb2.Struct:
        """optional state sufficient to uniquely identify the resource."""
    @property
    def dependencies(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.str]:
        """a list of URNs that this read depends on, as observed by the language host."""
    provider: builtins.str
    """an optional reference to the provider to use for this read."""
    version: builtins.str
    """the version of the provider to use when servicing this request."""
    acceptSecrets: builtins.bool
    """when true operations should return secrets as strongly typed."""
    @property
    def additionalSecretOutputs(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.str]:
        """a list of output properties that should also be treated as secret, in addition to ones we detect."""
    acceptResources: builtins.bool
    """when true operations should return resource references as strongly typed."""
    pluginDownloadURL: builtins.str
    """the server url of the provider to use when servicing this request."""
    @property
    def pluginChecksums(self) -> google.protobuf.internal.containers.ScalarMap[builtins.str, builtins.bytes]:
        """a map of checksums of the provider to use when servicing this request."""
    @property
    def sourcePosition(self) -> pulumi.source_pb2.SourcePosition:
        """the optional source position of the user code that initiated the read."""
    def __init__(
        self,
        *,
        id: builtins.str = ...,
        type: builtins.str = ...,
        name: builtins.str = ...,
        parent: builtins.str = ...,
        properties: google.protobuf.struct_pb2.Struct | None = ...,
        dependencies: collections.abc.Iterable[builtins.str] | None = ...,
        provider: builtins.str = ...,
        version: builtins.str = ...,
        acceptSecrets: builtins.bool = ...,
        additionalSecretOutputs: collections.abc.Iterable[builtins.str] | None = ...,
        acceptResources: builtins.bool = ...,
        pluginDownloadURL: builtins.str = ...,
        pluginChecksums: collections.abc.Mapping[builtins.str, builtins.bytes] | None = ...,
        sourcePosition: pulumi.source_pb2.SourcePosition | None = ...,
    ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["properties", b"properties", "sourcePosition", b"sourcePosition"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["acceptResources", b"acceptResources", "acceptSecrets", b"acceptSecrets", "additionalSecretOutputs", b"additionalSecretOutputs", "dependencies", b"dependencies", "id", b"id", "name", b"name", "parent", b"parent", "pluginChecksums", b"pluginChecksums", "pluginDownloadURL", b"pluginDownloadURL", "properties", b"properties", "provider", b"provider", "sourcePosition", b"sourcePosition", "type", b"type", "version", b"version"]) -> None: ...

global___ReadResourceRequest = ReadResourceRequest

@typing_extensions.final
class ReadResourceResponse(google.protobuf.message.Message):
    """ReadResourceResponse contains the result of reading a resource's state."""

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    URN_FIELD_NUMBER: builtins.int
    PROPERTIES_FIELD_NUMBER: builtins.int
    urn: builtins.str
    """the URN for this resource."""
    @property
    def properties(self) -> google.protobuf.struct_pb2.Struct:
        """the state of the resource read from the live environment."""
    def __init__(
        self,
        *,
        urn: builtins.str = ...,
        properties: google.protobuf.struct_pb2.Struct | None = ...,
    ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["properties", b"properties"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["properties", b"properties", "urn", b"urn"]) -> None: ...

global___ReadResourceResponse = ReadResourceResponse

@typing_extensions.final
class RegisterResourceRequest(google.protobuf.message.Message):
    """RegisterResourceRequest contains information about a resource object that was newly allocated."""

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    @typing_extensions.final
    class PropertyDependencies(google.protobuf.message.Message):
        """PropertyDependencies describes the resources that a particular property depends on."""

        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        URNS_FIELD_NUMBER: builtins.int
        @property
        def urns(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.str]:
            """A list of URNs this property depends on."""
        def __init__(
            self,
            *,
            urns: collections.abc.Iterable[builtins.str] | None = ...,
        ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["urns", b"urns"]) -> None: ...

    @typing_extensions.final
    class CustomTimeouts(google.protobuf.message.Message):
        """CustomTimeouts allows a user to be able to create a set of custom timeout parameters."""

        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        CREATE_FIELD_NUMBER: builtins.int
        UPDATE_FIELD_NUMBER: builtins.int
        DELETE_FIELD_NUMBER: builtins.int
        create: builtins.str
        """The create resource timeout represented as a string e.g. 5m."""
        update: builtins.str
        """The update resource timeout represented as a string e.g. 5m."""
        delete: builtins.str
        """The delete resource timeout represented as a string e.g. 5m."""
        def __init__(
            self,
            *,
            create: builtins.str = ...,
            update: builtins.str = ...,
            delete: builtins.str = ...,
        ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["create", b"create", "delete", b"delete", "update", b"update"]) -> None: ...

    @typing_extensions.final
    class PropertyDependenciesEntry(google.protobuf.message.Message):
        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        KEY_FIELD_NUMBER: builtins.int
        VALUE_FIELD_NUMBER: builtins.int
        key: builtins.str
        @property
        def value(self) -> global___RegisterResourceRequest.PropertyDependencies: ...
        def __init__(
            self,
            *,
            key: builtins.str = ...,
            value: global___RegisterResourceRequest.PropertyDependencies | None = ...,
        ) -> None: ...
        def HasField(self, field_name: typing_extensions.Literal["value", b"value"]) -> builtins.bool: ...
        def ClearField(self, field_name: typing_extensions.Literal["key", b"key", "value", b"value"]) -> None: ...

    @typing_extensions.final
    class ProvidersEntry(google.protobuf.message.Message):
        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        KEY_FIELD_NUMBER: builtins.int
        VALUE_FIELD_NUMBER: builtins.int
        key: builtins.str
        value: builtins.str
        def __init__(
            self,
            *,
            key: builtins.str = ...,
            value: builtins.str = ...,
        ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["key", b"key", "value", b"value"]) -> None: ...

    @typing_extensions.final
    class PluginChecksumsEntry(google.protobuf.message.Message):
        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        KEY_FIELD_NUMBER: builtins.int
        VALUE_FIELD_NUMBER: builtins.int
        key: builtins.str
        value: builtins.bytes
        def __init__(
            self,
            *,
            key: builtins.str = ...,
            value: builtins.bytes = ...,
        ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["key", b"key", "value", b"value"]) -> None: ...

    TYPE_FIELD_NUMBER: builtins.int
    NAME_FIELD_NUMBER: builtins.int
    PARENT_FIELD_NUMBER: builtins.int
    CUSTOM_FIELD_NUMBER: builtins.int
    OBJECT_FIELD_NUMBER: builtins.int
    PROTECT_FIELD_NUMBER: builtins.int
    DEPENDENCIES_FIELD_NUMBER: builtins.int
    PROVIDER_FIELD_NUMBER: builtins.int
    PROPERTYDEPENDENCIES_FIELD_NUMBER: builtins.int
    DELETEBEFOREREPLACE_FIELD_NUMBER: builtins.int
    VERSION_FIELD_NUMBER: builtins.int
    IGNORECHANGES_FIELD_NUMBER: builtins.int
    ACCEPTSECRETS_FIELD_NUMBER: builtins.int
    ADDITIONALSECRETOUTPUTS_FIELD_NUMBER: builtins.int
    ALIASURNS_FIELD_NUMBER: builtins.int
    IMPORTID_FIELD_NUMBER: builtins.int
    CUSTOMTIMEOUTS_FIELD_NUMBER: builtins.int
    DELETEBEFOREREPLACEDEFINED_FIELD_NUMBER: builtins.int
    SUPPORTSPARTIALVALUES_FIELD_NUMBER: builtins.int
    REMOTE_FIELD_NUMBER: builtins.int
    ACCEPTRESOURCES_FIELD_NUMBER: builtins.int
    PROVIDERS_FIELD_NUMBER: builtins.int
    REPLACEONCHANGES_FIELD_NUMBER: builtins.int
    PLUGINDOWNLOADURL_FIELD_NUMBER: builtins.int
    PLUGINCHECKSUMS_FIELD_NUMBER: builtins.int
    RETAINONDELETE_FIELD_NUMBER: builtins.int
    ALIASES_FIELD_NUMBER: builtins.int
    DELETEDWITH_FIELD_NUMBER: builtins.int
    ALIASSPECS_FIELD_NUMBER: builtins.int
    SOURCEPOSITION_FIELD_NUMBER: builtins.int
    type: builtins.str
    """the type of the object allocated."""
    name: builtins.str
    """the name, for URN purposes, of the object."""
    parent: builtins.str
    """an optional parent URN that this child resource belongs to."""
    custom: builtins.bool
    """true if the resource is a custom, managed by a plugin's CRUD operations."""
    @property
    def object(self) -> google.protobuf.struct_pb2.Struct:
        """an object produced by the interpreter/source."""
    protect: builtins.bool
    """true if the resource should be marked protected."""
    @property
    def dependencies(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.str]:
        """a list of URNs that this resource depends on, as observed by the language host."""
    provider: builtins.str
    """an optional reference to the provider to manage this resource's CRUD operations."""
    @property
    def propertyDependencies(self) -> google.protobuf.internal.containers.MessageMap[builtins.str, global___RegisterResourceRequest.PropertyDependencies]:
        """a map from property keys to the dependencies of the property."""
    deleteBeforeReplace: builtins.bool
    """true if this resource should be deleted before replacement."""
    version: builtins.str
    """the version of the provider to use when servicing this request."""
    @property
    def ignoreChanges(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.str]:
        """a list of property selectors to ignore during updates."""
    acceptSecrets: builtins.bool
    """when true operations should return secrets as strongly typed."""
    @property
    def additionalSecretOutputs(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.str]:
        """a list of output properties that should also be treated as secret, in addition to ones we detect."""
    @property
    def aliasURNs(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.str]:
        """a list of additional URNs that should be considered the same."""
    importId: builtins.str
    """if set, this resource's state should be imported from the given ID."""
    @property
    def customTimeouts(self) -> global___RegisterResourceRequest.CustomTimeouts:
        """ability to pass a custom Timeout block."""
    deleteBeforeReplaceDefined: builtins.bool
    """true if the deleteBeforeReplace property should be treated as defined even if it is false."""
    supportsPartialValues: builtins.bool
    """true if the request is from an SDK that supports partially-known properties during preview."""
    remote: builtins.bool
    """true if the resource is a plugin-managed component resource."""
    acceptResources: builtins.bool
    """when true operations should return resource references as strongly typed."""
    @property
    def providers(self) -> google.protobuf.internal.containers.ScalarMap[builtins.str, builtins.str]:
        """an optional reference to the provider map to manage this resource's CRUD operations."""
    @property
    def replaceOnChanges(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.str]:
        """a list of properties that if changed should force a replacement."""
    pluginDownloadURL: builtins.str
    """the server URL of the provider to use when servicing this request."""
    @property
    def pluginChecksums(self) -> google.protobuf.internal.containers.ScalarMap[builtins.str, builtins.bytes]:
        """a map of checksums expected for the provider plugin."""
    retainOnDelete: builtins.bool
    """if true the engine will not call the resource providers delete method for this resource."""
    @property
    def aliases(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[pulumi.alias_pb2.Alias]:
        """a list of additional aliases that should be considered the same."""
    deletedWith: builtins.str
    """if set the engine will not call the resource providers delete method for this resource when specified resource is deleted."""
    aliasSpecs: builtins.bool
    """Indicates that alias specs are specified correctly according to the spec.
    Older versions of the Node.js SDK did not send alias specs correctly.
    If this is not set to true and the engine detects the request is from the
    Node.js runtime, the engine will transform incorrect alias specs into
    correct ones.
    Other SDKs that are correctly specifying alias specs could set this to
    true, but it's not necessary.
    """
    @property
    def sourcePosition(self) -> pulumi.source_pb2.SourcePosition:
        """the optional source position of the user code that initiated the register."""
    def __init__(
        self,
        *,
        type: builtins.str = ...,
        name: builtins.str = ...,
        parent: builtins.str = ...,
        custom: builtins.bool = ...,
        object: google.protobuf.struct_pb2.Struct | None = ...,
        protect: builtins.bool = ...,
        dependencies: collections.abc.Iterable[builtins.str] | None = ...,
        provider: builtins.str = ...,
        propertyDependencies: collections.abc.Mapping[builtins.str, global___RegisterResourceRequest.PropertyDependencies] | None = ...,
        deleteBeforeReplace: builtins.bool = ...,
        version: builtins.str = ...,
        ignoreChanges: collections.abc.Iterable[builtins.str] | None = ...,
        acceptSecrets: builtins.bool = ...,
        additionalSecretOutputs: collections.abc.Iterable[builtins.str] | None = ...,
        aliasURNs: collections.abc.Iterable[builtins.str] | None = ...,
        importId: builtins.str = ...,
        customTimeouts: global___RegisterResourceRequest.CustomTimeouts | None = ...,
        deleteBeforeReplaceDefined: builtins.bool = ...,
        supportsPartialValues: builtins.bool = ...,
        remote: builtins.bool = ...,
        acceptResources: builtins.bool = ...,
        providers: collections.abc.Mapping[builtins.str, builtins.str] | None = ...,
        replaceOnChanges: collections.abc.Iterable[builtins.str] | None = ...,
        pluginDownloadURL: builtins.str = ...,
        pluginChecksums: collections.abc.Mapping[builtins.str, builtins.bytes] | None = ...,
        retainOnDelete: builtins.bool = ...,
        aliases: collections.abc.Iterable[pulumi.alias_pb2.Alias] | None = ...,
        deletedWith: builtins.str = ...,
        aliasSpecs: builtins.bool = ...,
        sourcePosition: pulumi.source_pb2.SourcePosition | None = ...,
    ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["customTimeouts", b"customTimeouts", "object", b"object", "sourcePosition", b"sourcePosition"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["acceptResources", b"acceptResources", "acceptSecrets", b"acceptSecrets", "additionalSecretOutputs", b"additionalSecretOutputs", "aliasSpecs", b"aliasSpecs", "aliasURNs", b"aliasURNs", "aliases", b"aliases", "custom", b"custom", "customTimeouts", b"customTimeouts", "deleteBeforeReplace", b"deleteBeforeReplace", "deleteBeforeReplaceDefined", b"deleteBeforeReplaceDefined", "deletedWith", b"deletedWith", "dependencies", b"dependencies", "ignoreChanges", b"ignoreChanges", "importId", b"importId", "name", b"name", "object", b"object", "parent", b"parent", "pluginChecksums", b"pluginChecksums", "pluginDownloadURL", b"pluginDownloadURL", "propertyDependencies", b"propertyDependencies", "protect", b"protect", "provider", b"provider", "providers", b"providers", "remote", b"remote", "replaceOnChanges", b"replaceOnChanges", "retainOnDelete", b"retainOnDelete", "sourcePosition", b"sourcePosition", "supportsPartialValues", b"supportsPartialValues", "type", b"type", "version", b"version"]) -> None: ...

global___RegisterResourceRequest = RegisterResourceRequest

@typing_extensions.final
class RegisterResourceResponse(google.protobuf.message.Message):
    """RegisterResourceResponse is returned by the engine after a resource has finished being initialized.  It includes the
    auto-assigned URN, the provider-assigned ID, and any other properties initialized by the engine.
    """

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    @typing_extensions.final
    class PropertyDependencies(google.protobuf.message.Message):
        """PropertyDependencies describes the resources that a particular property depends on."""

        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        URNS_FIELD_NUMBER: builtins.int
        @property
        def urns(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.str]:
            """A list of URNs this property depends on."""
        def __init__(
            self,
            *,
            urns: collections.abc.Iterable[builtins.str] | None = ...,
        ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["urns", b"urns"]) -> None: ...

    @typing_extensions.final
    class PropertyDependenciesEntry(google.protobuf.message.Message):
        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        KEY_FIELD_NUMBER: builtins.int
        VALUE_FIELD_NUMBER: builtins.int
        key: builtins.str
        @property
        def value(self) -> global___RegisterResourceResponse.PropertyDependencies: ...
        def __init__(
            self,
            *,
            key: builtins.str = ...,
            value: global___RegisterResourceResponse.PropertyDependencies | None = ...,
        ) -> None: ...
        def HasField(self, field_name: typing_extensions.Literal["value", b"value"]) -> builtins.bool: ...
        def ClearField(self, field_name: typing_extensions.Literal["key", b"key", "value", b"value"]) -> None: ...

    URN_FIELD_NUMBER: builtins.int
    ID_FIELD_NUMBER: builtins.int
    OBJECT_FIELD_NUMBER: builtins.int
    STABLE_FIELD_NUMBER: builtins.int
    STABLES_FIELD_NUMBER: builtins.int
    PROPERTYDEPENDENCIES_FIELD_NUMBER: builtins.int
    urn: builtins.str
    """the URN assigned by the engine."""
    id: builtins.str
    """the unique ID assigned by the provider."""
    @property
    def object(self) -> google.protobuf.struct_pb2.Struct:
        """the resulting object properties, including provider defaults."""
    stable: builtins.bool
    """if true, the object's state is stable and may be trusted not to change."""
    @property
    def stables(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.str]:
        """an optional list of guaranteed-stable properties."""
    @property
    def propertyDependencies(self) -> google.protobuf.internal.containers.MessageMap[builtins.str, global___RegisterResourceResponse.PropertyDependencies]:
        """a map from property keys to the dependencies of the property."""
    def __init__(
        self,
        *,
        urn: builtins.str = ...,
        id: builtins.str = ...,
        object: google.protobuf.struct_pb2.Struct | None = ...,
        stable: builtins.bool = ...,
        stables: collections.abc.Iterable[builtins.str] | None = ...,
        propertyDependencies: collections.abc.Mapping[builtins.str, global___RegisterResourceResponse.PropertyDependencies] | None = ...,
    ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["object", b"object"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["id", b"id", "object", b"object", "propertyDependencies", b"propertyDependencies", "stable", b"stable", "stables", b"stables", "urn", b"urn"]) -> None: ...

global___RegisterResourceResponse = RegisterResourceResponse

@typing_extensions.final
class RegisterResourceOutputsRequest(google.protobuf.message.Message):
    """RegisterResourceOutputsRequest adds extra resource outputs created by the program after registration has occurred."""

    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    URN_FIELD_NUMBER: builtins.int
    OUTPUTS_FIELD_NUMBER: builtins.int
    urn: builtins.str
    """the URN for the resource to attach output properties to."""
    @property
    def outputs(self) -> google.protobuf.struct_pb2.Struct:
        """additional output properties to add to the existing resource."""
    def __init__(
        self,
        *,
        urn: builtins.str = ...,
        outputs: google.protobuf.struct_pb2.Struct | None = ...,
    ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["outputs", b"outputs"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["outputs", b"outputs", "urn", b"urn"]) -> None: ...

global___RegisterResourceOutputsRequest = RegisterResourceOutputsRequest

@typing_extensions.final
class ResourceInvokeRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    @typing_extensions.final
    class PluginChecksumsEntry(google.protobuf.message.Message):
        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        KEY_FIELD_NUMBER: builtins.int
        VALUE_FIELD_NUMBER: builtins.int
        key: builtins.str
        value: builtins.bytes
        def __init__(
            self,
            *,
            key: builtins.str = ...,
            value: builtins.bytes = ...,
        ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["key", b"key", "value", b"value"]) -> None: ...

    TOK_FIELD_NUMBER: builtins.int
    ARGS_FIELD_NUMBER: builtins.int
    PROVIDER_FIELD_NUMBER: builtins.int
    VERSION_FIELD_NUMBER: builtins.int
    ACCEPTRESOURCES_FIELD_NUMBER: builtins.int
    PLUGINDOWNLOADURL_FIELD_NUMBER: builtins.int
    PLUGINCHECKSUMS_FIELD_NUMBER: builtins.int
    SOURCEPOSITION_FIELD_NUMBER: builtins.int
    tok: builtins.str
    """the function token to invoke."""
    @property
    def args(self) -> google.protobuf.struct_pb2.Struct:
        """the arguments for the function invocation."""
    provider: builtins.str
    """an optional reference to the provider version to use for this invoke."""
    version: builtins.str
    """the version of the provider to use when servicing this request."""
    acceptResources: builtins.bool
    """when true operations should return resource references as strongly typed."""
    pluginDownloadURL: builtins.str
    """an optional reference to the provider url to use for this invoke."""
    @property
    def pluginChecksums(self) -> google.protobuf.internal.containers.ScalarMap[builtins.str, builtins.bytes]:
        """a map of checksums expected for the provider plugin."""
    @property
    def sourcePosition(self) -> pulumi.source_pb2.SourcePosition:
        """the optional source position of the user code that initiated the invoke."""
    def __init__(
        self,
        *,
        tok: builtins.str = ...,
        args: google.protobuf.struct_pb2.Struct | None = ...,
        provider: builtins.str = ...,
        version: builtins.str = ...,
        acceptResources: builtins.bool = ...,
        pluginDownloadURL: builtins.str = ...,
        pluginChecksums: collections.abc.Mapping[builtins.str, builtins.bytes] | None = ...,
        sourcePosition: pulumi.source_pb2.SourcePosition | None = ...,
    ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["args", b"args", "sourcePosition", b"sourcePosition"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["acceptResources", b"acceptResources", "args", b"args", "pluginChecksums", b"pluginChecksums", "pluginDownloadURL", b"pluginDownloadURL", "provider", b"provider", "sourcePosition", b"sourcePosition", "tok", b"tok", "version", b"version"]) -> None: ...

global___ResourceInvokeRequest = ResourceInvokeRequest

@typing_extensions.final
class ResourceCallRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    @typing_extensions.final
    class ArgumentDependencies(google.protobuf.message.Message):
        """ArgumentDependencies describes the resources that a particular argument depends on."""

        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        URNS_FIELD_NUMBER: builtins.int
        @property
        def urns(self) -> google.protobuf.internal.containers.RepeatedScalarFieldContainer[builtins.str]:
            """A list of URNs this argument depends on."""
        def __init__(
            self,
            *,
            urns: collections.abc.Iterable[builtins.str] | None = ...,
        ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["urns", b"urns"]) -> None: ...

    @typing_extensions.final
    class ArgDependenciesEntry(google.protobuf.message.Message):
        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        KEY_FIELD_NUMBER: builtins.int
        VALUE_FIELD_NUMBER: builtins.int
        key: builtins.str
        @property
        def value(self) -> global___ResourceCallRequest.ArgumentDependencies: ...
        def __init__(
            self,
            *,
            key: builtins.str = ...,
            value: global___ResourceCallRequest.ArgumentDependencies | None = ...,
        ) -> None: ...
        def HasField(self, field_name: typing_extensions.Literal["value", b"value"]) -> builtins.bool: ...
        def ClearField(self, field_name: typing_extensions.Literal["key", b"key", "value", b"value"]) -> None: ...

    @typing_extensions.final
    class PluginChecksumsEntry(google.protobuf.message.Message):
        DESCRIPTOR: google.protobuf.descriptor.Descriptor

        KEY_FIELD_NUMBER: builtins.int
        VALUE_FIELD_NUMBER: builtins.int
        key: builtins.str
        value: builtins.bytes
        def __init__(
            self,
            *,
            key: builtins.str = ...,
            value: builtins.bytes = ...,
        ) -> None: ...
        def ClearField(self, field_name: typing_extensions.Literal["key", b"key", "value", b"value"]) -> None: ...

    TOK_FIELD_NUMBER: builtins.int
    ARGS_FIELD_NUMBER: builtins.int
    ARGDEPENDENCIES_FIELD_NUMBER: builtins.int
    PROVIDER_FIELD_NUMBER: builtins.int
    VERSION_FIELD_NUMBER: builtins.int
    PLUGINDOWNLOADURL_FIELD_NUMBER: builtins.int
    PLUGINCHECKSUMS_FIELD_NUMBER: builtins.int
    SOURCEPOSITION_FIELD_NUMBER: builtins.int
    tok: builtins.str
    """the function token to invoke."""
    @property
    def args(self) -> google.protobuf.struct_pb2.Struct:
        """the arguments for the function invocation."""
    @property
    def argDependencies(self) -> google.protobuf.internal.containers.MessageMap[builtins.str, global___ResourceCallRequest.ArgumentDependencies]:
        """a map from argument keys to the dependencies of the argument."""
    provider: builtins.str
    """an optional reference to the provider to use for this invoke."""
    version: builtins.str
    """the version of the provider to use when servicing this request."""
    pluginDownloadURL: builtins.str
    """the pluginDownloadURL of the provider to use when servicing this request."""
    @property
    def pluginChecksums(self) -> google.protobuf.internal.containers.ScalarMap[builtins.str, builtins.bytes]:
        """a map of checksums of the provider to use when servicing this request."""
    @property
    def sourcePosition(self) -> pulumi.source_pb2.SourcePosition:
        """the optional source position of the user code that initiated the call."""
    def __init__(
        self,
        *,
        tok: builtins.str = ...,
        args: google.protobuf.struct_pb2.Struct | None = ...,
        argDependencies: collections.abc.Mapping[builtins.str, global___ResourceCallRequest.ArgumentDependencies] | None = ...,
        provider: builtins.str = ...,
        version: builtins.str = ...,
        pluginDownloadURL: builtins.str = ...,
        pluginChecksums: collections.abc.Mapping[builtins.str, builtins.bytes] | None = ...,
        sourcePosition: pulumi.source_pb2.SourcePosition | None = ...,
    ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["args", b"args", "sourcePosition", b"sourcePosition"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["argDependencies", b"argDependencies", "args", b"args", "pluginChecksums", b"pluginChecksums", "pluginDownloadURL", b"pluginDownloadURL", "provider", b"provider", "sourcePosition", b"sourcePosition", "tok", b"tok", "version", b"version"]) -> None: ...

global___ResourceCallRequest = ResourceCallRequest
