// Code generated by test DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package my8110

import (
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"regress-node-8110/my8110/internal"
)

func ExampleFunc(ctx *pulumi.Context, args *ExampleFuncArgs, opts ...pulumi.InvokeOption) error {
	opts = internal.PkgInvokeDefaultOpts(opts)
	var rv struct{}
	err := ctx.Invoke("my8110::exampleFunc", args, &rv, opts...)
	return err
}

type ExampleFuncArgs struct {
	Enums []string `pulumi:"enums"`
}