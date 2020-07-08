// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.21.0
// 	protoc        v3.11.4
// source: proto/billings/billings.proto

package go_micro_service_billings

import (
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

// Events
type TransactionEvent struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Account   string  `protobuf:"bytes,1,opt,name=account,proto3" json:"account,omitempty"`
	Amount    float32 `protobuf:"fixed32,2,opt,name=amount,proto3" json:"amount,omitempty"`
	Info      string  `protobuf:"bytes,3,opt,name=info,proto3" json:"info,omitempty"`
	Status    string  `protobuf:"bytes,4,opt,name=status,proto3" json:"status,omitempty"`
	Timestamp int64   `protobuf:"varint,5,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	Uuid      string  `protobuf:"bytes,6,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *TransactionEvent) Reset() {
	*x = TransactionEvent{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_billings_billings_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TransactionEvent) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TransactionEvent) ProtoMessage() {}

func (x *TransactionEvent) ProtoReflect() protoreflect.Message {
	mi := &file_proto_billings_billings_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TransactionEvent.ProtoReflect.Descriptor instead.
func (*TransactionEvent) Descriptor() ([]byte, []int) {
	return file_proto_billings_billings_proto_rawDescGZIP(), []int{0}
}

func (x *TransactionEvent) GetAccount() string {
	if x != nil {
		return x.Account
	}
	return ""
}

func (x *TransactionEvent) GetAmount() float32 {
	if x != nil {
		return x.Amount
	}
	return 0
}

func (x *TransactionEvent) GetInfo() string {
	if x != nil {
		return x.Info
	}
	return ""
}

func (x *TransactionEvent) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *TransactionEvent) GetTimestamp() int64 {
	if x != nil {
		return x.Timestamp
	}
	return 0
}

func (x *TransactionEvent) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

var File_proto_billings_billings_proto protoreflect.FileDescriptor

var file_proto_billings_billings_proto_rawDesc = []byte{
	0x0a, 0x1d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x73,
	0x2f, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0xa2, 0x01, 0x0a, 0x10, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x45,
	0x76, 0x65, 0x6e, 0x74, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x16,
	0x0a, 0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x02, 0x52, 0x06,
	0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x12, 0x1c, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x75, 0x75, 0x69, 0x64, 0x42, 0x2a, 0x5a, 0x28, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x62, 0x69,
	0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x73, 0x3b, 0x67, 0x6f, 0x5f, 0x6d, 0x69, 0x63, 0x72, 0x6f, 0x5f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x73,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_billings_billings_proto_rawDescOnce sync.Once
	file_proto_billings_billings_proto_rawDescData = file_proto_billings_billings_proto_rawDesc
)

func file_proto_billings_billings_proto_rawDescGZIP() []byte {
	file_proto_billings_billings_proto_rawDescOnce.Do(func() {
		file_proto_billings_billings_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_billings_billings_proto_rawDescData)
	})
	return file_proto_billings_billings_proto_rawDescData
}

var file_proto_billings_billings_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_proto_billings_billings_proto_goTypes = []interface{}{
	(*TransactionEvent)(nil), // 0: TransactionEvent
}
var file_proto_billings_billings_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_proto_billings_billings_proto_init() }
func file_proto_billings_billings_proto_init() {
	if File_proto_billings_billings_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_billings_billings_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TransactionEvent); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_billings_billings_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_proto_billings_billings_proto_goTypes,
		DependencyIndexes: file_proto_billings_billings_proto_depIdxs,
		MessageInfos:      file_proto_billings_billings_proto_msgTypes,
	}.Build()
	File_proto_billings_billings_proto = out.File
	file_proto_billings_billings_proto_rawDesc = nil
	file_proto_billings_billings_proto_goTypes = nil
	file_proto_billings_billings_proto_depIdxs = nil
}
