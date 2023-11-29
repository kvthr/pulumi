// Code generated by test DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package v1

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumix"
)

type Diameter float64

const (
	DiameterSixinch    = Diameter(6)
	DiameterTwelveinch = Diameter(12)
)

func (Diameter) ElementType() reflect.Type {
	return reflect.TypeOf((*Diameter)(nil)).Elem()
}

func (e Diameter) ToDiameterOutput() DiameterOutput {
	return pulumi.ToOutput(e).(DiameterOutput)
}

func (e Diameter) ToDiameterOutputWithContext(ctx context.Context) DiameterOutput {
	return pulumi.ToOutputWithContext(ctx, e).(DiameterOutput)
}

func (e Diameter) ToDiameterPtrOutput() DiameterPtrOutput {
	return e.ToDiameterPtrOutputWithContext(context.Background())
}

func (e Diameter) ToDiameterPtrOutputWithContext(ctx context.Context) DiameterPtrOutput {
	return Diameter(e).ToDiameterOutputWithContext(ctx).ToDiameterPtrOutputWithContext(ctx)
}

func (e Diameter) ToFloat64Output() pulumi.Float64Output {
	return pulumi.ToOutput(pulumi.Float64(e)).(pulumi.Float64Output)
}

func (e Diameter) ToFloat64OutputWithContext(ctx context.Context) pulumi.Float64Output {
	return pulumi.ToOutputWithContext(ctx, pulumi.Float64(e)).(pulumi.Float64Output)
}

func (e Diameter) ToFloat64PtrOutput() pulumi.Float64PtrOutput {
	return pulumi.Float64(e).ToFloat64PtrOutputWithContext(context.Background())
}

func (e Diameter) ToFloat64PtrOutputWithContext(ctx context.Context) pulumi.Float64PtrOutput {
	return pulumi.Float64(e).ToFloat64OutputWithContext(ctx).ToFloat64PtrOutputWithContext(ctx)
}

type DiameterOutput struct{ *pulumi.OutputState }

func (DiameterOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Diameter)(nil)).Elem()
}

func (o DiameterOutput) ToDiameterOutput() DiameterOutput {
	return o
}

func (o DiameterOutput) ToDiameterOutputWithContext(ctx context.Context) DiameterOutput {
	return o
}

func (o DiameterOutput) ToDiameterPtrOutput() DiameterPtrOutput {
	return o.ToDiameterPtrOutputWithContext(context.Background())
}

func (o DiameterOutput) ToDiameterPtrOutputWithContext(ctx context.Context) DiameterPtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, v Diameter) *Diameter {
		return &v
	}).(DiameterPtrOutput)
}

func (o DiameterOutput) ToFloat64Output() pulumi.Float64Output {
	return o.ToFloat64OutputWithContext(context.Background())
}

func (o DiameterOutput) ToFloat64OutputWithContext(ctx context.Context) pulumi.Float64Output {
	return o.ApplyTWithContext(ctx, func(_ context.Context, e Diameter) float64 {
		return float64(e)
	}).(pulumi.Float64Output)
}

func (o DiameterOutput) ToFloat64PtrOutput() pulumi.Float64PtrOutput {
	return o.ToFloat64PtrOutputWithContext(context.Background())
}

func (o DiameterOutput) ToFloat64PtrOutputWithContext(ctx context.Context) pulumi.Float64PtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, e Diameter) *float64 {
		v := float64(e)
		return &v
	}).(pulumi.Float64PtrOutput)
}

type DiameterPtrOutput struct{ *pulumi.OutputState }

func (DiameterPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Diameter)(nil)).Elem()
}

func (o DiameterPtrOutput) ToDiameterPtrOutput() DiameterPtrOutput {
	return o
}

func (o DiameterPtrOutput) ToDiameterPtrOutputWithContext(ctx context.Context) DiameterPtrOutput {
	return o
}

func (o DiameterPtrOutput) Elem() DiameterOutput {
	return o.ApplyT(func(v *Diameter) Diameter {
		if v != nil {
			return *v
		}
		var ret Diameter
		return ret
	}).(DiameterOutput)
}

func (o DiameterPtrOutput) ToFloat64PtrOutput() pulumi.Float64PtrOutput {
	return o.ToFloat64PtrOutputWithContext(context.Background())
}

func (o DiameterPtrOutput) ToFloat64PtrOutputWithContext(ctx context.Context) pulumi.Float64PtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, e *Diameter) *float64 {
		if e == nil {
			return nil
		}
		v := float64(*e)
		return &v
	}).(pulumi.Float64PtrOutput)
}

// DiameterInput is an input type that accepts DiameterArgs and DiameterOutput values.
// You can construct a concrete instance of `DiameterInput` via:
//
//	DiameterArgs{...}
type DiameterInput interface {
	pulumi.Input

	ToDiameterOutput() DiameterOutput
	ToDiameterOutputWithContext(context.Context) DiameterOutput
}

var diameterPtrType = reflect.TypeOf((**Diameter)(nil)).Elem()

type DiameterPtrInput interface {
	pulumi.Input

	ToDiameterPtrOutput() DiameterPtrOutput
	ToDiameterPtrOutputWithContext(context.Context) DiameterPtrOutput
}

type diameterPtr float64

func DiameterPtr(v float64) DiameterPtrInput {
	return (*diameterPtr)(&v)
}

func (*diameterPtr) ElementType() reflect.Type {
	return diameterPtrType
}

func (in *diameterPtr) ToDiameterPtrOutput() DiameterPtrOutput {
	return pulumi.ToOutput(in).(DiameterPtrOutput)
}

func (in *diameterPtr) ToDiameterPtrOutputWithContext(ctx context.Context) DiameterPtrOutput {
	return pulumi.ToOutputWithContext(ctx, in).(DiameterPtrOutput)
}

func (in *diameterPtr) ToOutput(ctx context.Context) pulumix.Output[*Diameter] {
	return pulumix.Output[*Diameter]{
		OutputState: in.ToDiameterPtrOutputWithContext(ctx).OutputState,
	}
}

type Farm string

const (
	Farm_Pulumi_Planters_Inc_ = Farm("Pulumi Planters Inc.")
	Farm_Plants_R_Us          = Farm("Plants'R'Us")
)

func (Farm) ElementType() reflect.Type {
	return reflect.TypeOf((*Farm)(nil)).Elem()
}

func (e Farm) ToFarmOutput() FarmOutput {
	return pulumi.ToOutput(e).(FarmOutput)
}

func (e Farm) ToFarmOutputWithContext(ctx context.Context) FarmOutput {
	return pulumi.ToOutputWithContext(ctx, e).(FarmOutput)
}

func (e Farm) ToFarmPtrOutput() FarmPtrOutput {
	return e.ToFarmPtrOutputWithContext(context.Background())
}

func (e Farm) ToFarmPtrOutputWithContext(ctx context.Context) FarmPtrOutput {
	return Farm(e).ToFarmOutputWithContext(ctx).ToFarmPtrOutputWithContext(ctx)
}

func (e Farm) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e Farm) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e Farm) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e Farm) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

type FarmOutput struct{ *pulumi.OutputState }

func (FarmOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Farm)(nil)).Elem()
}

func (o FarmOutput) ToFarmOutput() FarmOutput {
	return o
}

func (o FarmOutput) ToFarmOutputWithContext(ctx context.Context) FarmOutput {
	return o
}

func (o FarmOutput) ToFarmPtrOutput() FarmPtrOutput {
	return o.ToFarmPtrOutputWithContext(context.Background())
}

func (o FarmOutput) ToFarmPtrOutputWithContext(ctx context.Context) FarmPtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, v Farm) *Farm {
		return &v
	}).(FarmPtrOutput)
}

func (o FarmOutput) ToStringOutput() pulumi.StringOutput {
	return o.ToStringOutputWithContext(context.Background())
}

func (o FarmOutput) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, e Farm) string {
		return string(e)
	}).(pulumi.StringOutput)
}

func (o FarmOutput) ToStringPtrOutput() pulumi.StringPtrOutput {
	return o.ToStringPtrOutputWithContext(context.Background())
}

func (o FarmOutput) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, e Farm) *string {
		v := string(e)
		return &v
	}).(pulumi.StringPtrOutput)
}

type FarmPtrOutput struct{ *pulumi.OutputState }

func (FarmPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Farm)(nil)).Elem()
}

func (o FarmPtrOutput) ToFarmPtrOutput() FarmPtrOutput {
	return o
}

func (o FarmPtrOutput) ToFarmPtrOutputWithContext(ctx context.Context) FarmPtrOutput {
	return o
}

func (o FarmPtrOutput) Elem() FarmOutput {
	return o.ApplyT(func(v *Farm) Farm {
		if v != nil {
			return *v
		}
		var ret Farm
		return ret
	}).(FarmOutput)
}

func (o FarmPtrOutput) ToStringPtrOutput() pulumi.StringPtrOutput {
	return o.ToStringPtrOutputWithContext(context.Background())
}

func (o FarmPtrOutput) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, e *Farm) *string {
		if e == nil {
			return nil
		}
		v := string(*e)
		return &v
	}).(pulumi.StringPtrOutput)
}

// FarmInput is an input type that accepts FarmArgs and FarmOutput values.
// You can construct a concrete instance of `FarmInput` via:
//
//	FarmArgs{...}
type FarmInput interface {
	pulumi.Input

	ToFarmOutput() FarmOutput
	ToFarmOutputWithContext(context.Context) FarmOutput
}

var farmPtrType = reflect.TypeOf((**Farm)(nil)).Elem()

type FarmPtrInput interface {
	pulumi.Input

	ToFarmPtrOutput() FarmPtrOutput
	ToFarmPtrOutputWithContext(context.Context) FarmPtrOutput
}

type farmPtr string

func FarmPtr(v string) FarmPtrInput {
	return (*farmPtr)(&v)
}

func (*farmPtr) ElementType() reflect.Type {
	return farmPtrType
}

func (in *farmPtr) ToFarmPtrOutput() FarmPtrOutput {
	return pulumi.ToOutput(in).(FarmPtrOutput)
}

func (in *farmPtr) ToFarmPtrOutputWithContext(ctx context.Context) FarmPtrOutput {
	return pulumi.ToOutputWithContext(ctx, in).(FarmPtrOutput)
}

func (in *farmPtr) ToOutput(ctx context.Context) pulumix.Output[*Farm] {
	return pulumix.Output[*Farm]{
		OutputState: in.ToFarmPtrOutputWithContext(ctx).OutputState,
	}
}

// types of rubber trees
type RubberTreeVariety string

const (
	// A burgundy rubber tree.
	RubberTreeVarietyBurgundy = RubberTreeVariety("Burgundy")
	// A ruby rubber tree.
	RubberTreeVarietyRuby = RubberTreeVariety("Ruby")
	// A tineke rubber tree.
	RubberTreeVarietyTineke = RubberTreeVariety("Tineke")
)

func (RubberTreeVariety) ElementType() reflect.Type {
	return reflect.TypeOf((*RubberTreeVariety)(nil)).Elem()
}

func (e RubberTreeVariety) ToRubberTreeVarietyOutput() RubberTreeVarietyOutput {
	return pulumi.ToOutput(e).(RubberTreeVarietyOutput)
}

func (e RubberTreeVariety) ToRubberTreeVarietyOutputWithContext(ctx context.Context) RubberTreeVarietyOutput {
	return pulumi.ToOutputWithContext(ctx, e).(RubberTreeVarietyOutput)
}

func (e RubberTreeVariety) ToRubberTreeVarietyPtrOutput() RubberTreeVarietyPtrOutput {
	return e.ToRubberTreeVarietyPtrOutputWithContext(context.Background())
}

func (e RubberTreeVariety) ToRubberTreeVarietyPtrOutputWithContext(ctx context.Context) RubberTreeVarietyPtrOutput {
	return RubberTreeVariety(e).ToRubberTreeVarietyOutputWithContext(ctx).ToRubberTreeVarietyPtrOutputWithContext(ctx)
}

func (e RubberTreeVariety) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e RubberTreeVariety) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e RubberTreeVariety) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e RubberTreeVariety) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

type RubberTreeVarietyOutput struct{ *pulumi.OutputState }

func (RubberTreeVarietyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*RubberTreeVariety)(nil)).Elem()
}

func (o RubberTreeVarietyOutput) ToRubberTreeVarietyOutput() RubberTreeVarietyOutput {
	return o
}

func (o RubberTreeVarietyOutput) ToRubberTreeVarietyOutputWithContext(ctx context.Context) RubberTreeVarietyOutput {
	return o
}

func (o RubberTreeVarietyOutput) ToRubberTreeVarietyPtrOutput() RubberTreeVarietyPtrOutput {
	return o.ToRubberTreeVarietyPtrOutputWithContext(context.Background())
}

func (o RubberTreeVarietyOutput) ToRubberTreeVarietyPtrOutputWithContext(ctx context.Context) RubberTreeVarietyPtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, v RubberTreeVariety) *RubberTreeVariety {
		return &v
	}).(RubberTreeVarietyPtrOutput)
}

func (o RubberTreeVarietyOutput) ToStringOutput() pulumi.StringOutput {
	return o.ToStringOutputWithContext(context.Background())
}

func (o RubberTreeVarietyOutput) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, e RubberTreeVariety) string {
		return string(e)
	}).(pulumi.StringOutput)
}

func (o RubberTreeVarietyOutput) ToStringPtrOutput() pulumi.StringPtrOutput {
	return o.ToStringPtrOutputWithContext(context.Background())
}

func (o RubberTreeVarietyOutput) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, e RubberTreeVariety) *string {
		v := string(e)
		return &v
	}).(pulumi.StringPtrOutput)
}

type RubberTreeVarietyPtrOutput struct{ *pulumi.OutputState }

func (RubberTreeVarietyPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**RubberTreeVariety)(nil)).Elem()
}

func (o RubberTreeVarietyPtrOutput) ToRubberTreeVarietyPtrOutput() RubberTreeVarietyPtrOutput {
	return o
}

func (o RubberTreeVarietyPtrOutput) ToRubberTreeVarietyPtrOutputWithContext(ctx context.Context) RubberTreeVarietyPtrOutput {
	return o
}

func (o RubberTreeVarietyPtrOutput) Elem() RubberTreeVarietyOutput {
	return o.ApplyT(func(v *RubberTreeVariety) RubberTreeVariety {
		if v != nil {
			return *v
		}
		var ret RubberTreeVariety
		return ret
	}).(RubberTreeVarietyOutput)
}

func (o RubberTreeVarietyPtrOutput) ToStringPtrOutput() pulumi.StringPtrOutput {
	return o.ToStringPtrOutputWithContext(context.Background())
}

func (o RubberTreeVarietyPtrOutput) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, e *RubberTreeVariety) *string {
		if e == nil {
			return nil
		}
		v := string(*e)
		return &v
	}).(pulumi.StringPtrOutput)
}

// RubberTreeVarietyInput is an input type that accepts RubberTreeVarietyArgs and RubberTreeVarietyOutput values.
// You can construct a concrete instance of `RubberTreeVarietyInput` via:
//
//	RubberTreeVarietyArgs{...}
type RubberTreeVarietyInput interface {
	pulumi.Input

	ToRubberTreeVarietyOutput() RubberTreeVarietyOutput
	ToRubberTreeVarietyOutputWithContext(context.Context) RubberTreeVarietyOutput
}

var rubberTreeVarietyPtrType = reflect.TypeOf((**RubberTreeVariety)(nil)).Elem()

type RubberTreeVarietyPtrInput interface {
	pulumi.Input

	ToRubberTreeVarietyPtrOutput() RubberTreeVarietyPtrOutput
	ToRubberTreeVarietyPtrOutputWithContext(context.Context) RubberTreeVarietyPtrOutput
}

type rubberTreeVarietyPtr string

func RubberTreeVarietyPtr(v string) RubberTreeVarietyPtrInput {
	return (*rubberTreeVarietyPtr)(&v)
}

func (*rubberTreeVarietyPtr) ElementType() reflect.Type {
	return rubberTreeVarietyPtrType
}

func (in *rubberTreeVarietyPtr) ToRubberTreeVarietyPtrOutput() RubberTreeVarietyPtrOutput {
	return pulumi.ToOutput(in).(RubberTreeVarietyPtrOutput)
}

func (in *rubberTreeVarietyPtr) ToRubberTreeVarietyPtrOutputWithContext(ctx context.Context) RubberTreeVarietyPtrOutput {
	return pulumi.ToOutputWithContext(ctx, in).(RubberTreeVarietyPtrOutput)
}

func (in *rubberTreeVarietyPtr) ToOutput(ctx context.Context) pulumix.Output[*RubberTreeVariety] {
	return pulumix.Output[*RubberTreeVariety]{
		OutputState: in.ToRubberTreeVarietyPtrOutputWithContext(ctx).OutputState,
	}
}

// RubberTreeVarietyArrayInput is an input type that accepts RubberTreeVarietyArray and RubberTreeVarietyArrayOutput values.
// You can construct a concrete instance of `RubberTreeVarietyArrayInput` via:
//
//	RubberTreeVarietyArray{ RubberTreeVarietyArgs{...} }
type RubberTreeVarietyArrayInput interface {
	pulumi.Input

	ToRubberTreeVarietyArrayOutput() RubberTreeVarietyArrayOutput
	ToRubberTreeVarietyArrayOutputWithContext(context.Context) RubberTreeVarietyArrayOutput
}

type RubberTreeVarietyArray []RubberTreeVariety

func (RubberTreeVarietyArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]RubberTreeVariety)(nil)).Elem()
}

func (i RubberTreeVarietyArray) ToRubberTreeVarietyArrayOutput() RubberTreeVarietyArrayOutput {
	return i.ToRubberTreeVarietyArrayOutputWithContext(context.Background())
}

func (i RubberTreeVarietyArray) ToRubberTreeVarietyArrayOutputWithContext(ctx context.Context) RubberTreeVarietyArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RubberTreeVarietyArrayOutput)
}

type RubberTreeVarietyArrayOutput struct{ *pulumi.OutputState }

func (RubberTreeVarietyArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]RubberTreeVariety)(nil)).Elem()
}

func (o RubberTreeVarietyArrayOutput) ToRubberTreeVarietyArrayOutput() RubberTreeVarietyArrayOutput {
	return o
}

func (o RubberTreeVarietyArrayOutput) ToRubberTreeVarietyArrayOutputWithContext(ctx context.Context) RubberTreeVarietyArrayOutput {
	return o
}

func (o RubberTreeVarietyArrayOutput) Index(i pulumi.IntInput) RubberTreeVarietyOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) RubberTreeVariety {
		return vs[0].([]RubberTreeVariety)[vs[1].(int)]
	}).(RubberTreeVarietyOutput)
}

type TreeSize string

const (
	TreeSizeSmall  = TreeSize("small")
	TreeSizeMedium = TreeSize("medium")
	TreeSizeLarge  = TreeSize("large")
)

func (TreeSize) ElementType() reflect.Type {
	return reflect.TypeOf((*TreeSize)(nil)).Elem()
}

func (e TreeSize) ToTreeSizeOutput() TreeSizeOutput {
	return pulumi.ToOutput(e).(TreeSizeOutput)
}

func (e TreeSize) ToTreeSizeOutputWithContext(ctx context.Context) TreeSizeOutput {
	return pulumi.ToOutputWithContext(ctx, e).(TreeSizeOutput)
}

func (e TreeSize) ToTreeSizePtrOutput() TreeSizePtrOutput {
	return e.ToTreeSizePtrOutputWithContext(context.Background())
}

func (e TreeSize) ToTreeSizePtrOutputWithContext(ctx context.Context) TreeSizePtrOutput {
	return TreeSize(e).ToTreeSizeOutputWithContext(ctx).ToTreeSizePtrOutputWithContext(ctx)
}

func (e TreeSize) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e TreeSize) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e TreeSize) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e TreeSize) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

type TreeSizeOutput struct{ *pulumi.OutputState }

func (TreeSizeOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*TreeSize)(nil)).Elem()
}

func (o TreeSizeOutput) ToTreeSizeOutput() TreeSizeOutput {
	return o
}

func (o TreeSizeOutput) ToTreeSizeOutputWithContext(ctx context.Context) TreeSizeOutput {
	return o
}

func (o TreeSizeOutput) ToTreeSizePtrOutput() TreeSizePtrOutput {
	return o.ToTreeSizePtrOutputWithContext(context.Background())
}

func (o TreeSizeOutput) ToTreeSizePtrOutputWithContext(ctx context.Context) TreeSizePtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, v TreeSize) *TreeSize {
		return &v
	}).(TreeSizePtrOutput)
}

func (o TreeSizeOutput) ToStringOutput() pulumi.StringOutput {
	return o.ToStringOutputWithContext(context.Background())
}

func (o TreeSizeOutput) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, e TreeSize) string {
		return string(e)
	}).(pulumi.StringOutput)
}

func (o TreeSizeOutput) ToStringPtrOutput() pulumi.StringPtrOutput {
	return o.ToStringPtrOutputWithContext(context.Background())
}

func (o TreeSizeOutput) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, e TreeSize) *string {
		v := string(e)
		return &v
	}).(pulumi.StringPtrOutput)
}

type TreeSizePtrOutput struct{ *pulumi.OutputState }

func (TreeSizePtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**TreeSize)(nil)).Elem()
}

func (o TreeSizePtrOutput) ToTreeSizePtrOutput() TreeSizePtrOutput {
	return o
}

func (o TreeSizePtrOutput) ToTreeSizePtrOutputWithContext(ctx context.Context) TreeSizePtrOutput {
	return o
}

func (o TreeSizePtrOutput) Elem() TreeSizeOutput {
	return o.ApplyT(func(v *TreeSize) TreeSize {
		if v != nil {
			return *v
		}
		var ret TreeSize
		return ret
	}).(TreeSizeOutput)
}

func (o TreeSizePtrOutput) ToStringPtrOutput() pulumi.StringPtrOutput {
	return o.ToStringPtrOutputWithContext(context.Background())
}

func (o TreeSizePtrOutput) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, e *TreeSize) *string {
		if e == nil {
			return nil
		}
		v := string(*e)
		return &v
	}).(pulumi.StringPtrOutput)
}

// TreeSizeInput is an input type that accepts TreeSizeArgs and TreeSizeOutput values.
// You can construct a concrete instance of `TreeSizeInput` via:
//
//	TreeSizeArgs{...}
type TreeSizeInput interface {
	pulumi.Input

	ToTreeSizeOutput() TreeSizeOutput
	ToTreeSizeOutputWithContext(context.Context) TreeSizeOutput
}

var treeSizePtrType = reflect.TypeOf((**TreeSize)(nil)).Elem()

type TreeSizePtrInput interface {
	pulumi.Input

	ToTreeSizePtrOutput() TreeSizePtrOutput
	ToTreeSizePtrOutputWithContext(context.Context) TreeSizePtrOutput
}

type treeSizePtr string

func TreeSizePtr(v string) TreeSizePtrInput {
	return (*treeSizePtr)(&v)
}

func (*treeSizePtr) ElementType() reflect.Type {
	return treeSizePtrType
}

func (in *treeSizePtr) ToTreeSizePtrOutput() TreeSizePtrOutput {
	return pulumi.ToOutput(in).(TreeSizePtrOutput)
}

func (in *treeSizePtr) ToTreeSizePtrOutputWithContext(ctx context.Context) TreeSizePtrOutput {
	return pulumi.ToOutputWithContext(ctx, in).(TreeSizePtrOutput)
}

func (in *treeSizePtr) ToOutput(ctx context.Context) pulumix.Output[*TreeSize] {
	return pulumix.Output[*TreeSize]{
		OutputState: in.ToTreeSizePtrOutputWithContext(ctx).OutputState,
	}
}

// TreeSizeMapInput is an input type that accepts TreeSizeMap and TreeSizeMapOutput values.
// You can construct a concrete instance of `TreeSizeMapInput` via:
//
//	TreeSizeMap{ "key": TreeSizeArgs{...} }
type TreeSizeMapInput interface {
	pulumi.Input

	ToTreeSizeMapOutput() TreeSizeMapOutput
	ToTreeSizeMapOutputWithContext(context.Context) TreeSizeMapOutput
}

type TreeSizeMap map[string]TreeSize

func (TreeSizeMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]TreeSize)(nil)).Elem()
}

func (i TreeSizeMap) ToTreeSizeMapOutput() TreeSizeMapOutput {
	return i.ToTreeSizeMapOutputWithContext(context.Background())
}

func (i TreeSizeMap) ToTreeSizeMapOutputWithContext(ctx context.Context) TreeSizeMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(TreeSizeMapOutput)
}

type TreeSizeMapOutput struct{ *pulumi.OutputState }

func (TreeSizeMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]TreeSize)(nil)).Elem()
}

func (o TreeSizeMapOutput) ToTreeSizeMapOutput() TreeSizeMapOutput {
	return o
}

func (o TreeSizeMapOutput) ToTreeSizeMapOutputWithContext(ctx context.Context) TreeSizeMapOutput {
	return o
}

func (o TreeSizeMapOutput) MapIndex(k pulumi.StringInput) TreeSizeOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) TreeSize {
		return vs[0].(map[string]TreeSize)[vs[1].(string)]
	}).(TreeSizeOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*DiameterInput)(nil)).Elem(), Diameter(6))
	pulumi.RegisterInputType(reflect.TypeOf((*DiameterPtrInput)(nil)).Elem(), Diameter(6))
	pulumi.RegisterInputType(reflect.TypeOf((*FarmInput)(nil)).Elem(), Farm("Pulumi Planters Inc."))
	pulumi.RegisterInputType(reflect.TypeOf((*FarmPtrInput)(nil)).Elem(), Farm("Pulumi Planters Inc."))
	pulumi.RegisterInputType(reflect.TypeOf((*RubberTreeVarietyInput)(nil)).Elem(), RubberTreeVariety("Burgundy"))
	pulumi.RegisterInputType(reflect.TypeOf((*RubberTreeVarietyPtrInput)(nil)).Elem(), RubberTreeVariety("Burgundy"))
	pulumi.RegisterInputType(reflect.TypeOf((*RubberTreeVarietyArrayInput)(nil)).Elem(), RubberTreeVarietyArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*TreeSizeInput)(nil)).Elem(), TreeSize("small"))
	pulumi.RegisterInputType(reflect.TypeOf((*TreeSizePtrInput)(nil)).Elem(), TreeSize("small"))
	pulumi.RegisterInputType(reflect.TypeOf((*TreeSizeMapInput)(nil)).Elem(), TreeSizeMap{})
	pulumi.RegisterOutputType(DiameterOutput{})
	pulumi.RegisterOutputType(DiameterPtrOutput{})
	pulumi.RegisterOutputType(FarmOutput{})
	pulumi.RegisterOutputType(FarmPtrOutput{})
	pulumi.RegisterOutputType(RubberTreeVarietyOutput{})
	pulumi.RegisterOutputType(RubberTreeVarietyPtrOutput{})
	pulumi.RegisterOutputType(RubberTreeVarietyArrayOutput{})
	pulumi.RegisterOutputType(TreeSizeOutput{})
	pulumi.RegisterOutputType(TreeSizePtrOutput{})
	pulumi.RegisterOutputType(TreeSizeMapOutput{})
}
