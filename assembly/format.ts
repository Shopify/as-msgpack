export const enum Format {
  ERROR = 0,
  Four_Bytes = 0xffffffff,
  FOUR_LEAST_SIG_BITS_IN_BYTE = 0x0f,
  FOUR_SIG_BITS_IN_BYTE = 0xf0,
  POSITIVE_FIXINT = 0x00,
  FIXMAP = 0x80,
  FIXARRAY = 0x90,
  FIXSTR = 0xa0,
  NIL = 0xc0,
  FALSE = 0xc2,
  TRUE = 0xc3,
  BIN8 = 0xc4,
  BIN16 = 0xc5,
  BIN32 = 0xc6,
  EXT8 = 0xc7,
  EXT16 = 0xc8,
  EXT32 = 0xc9,
  FLOAT32 = 0xca,
  FLOAT64 = 0xcb,
  UINT8 = 0xcc,
  UINT16 = 0xcd,
  UINT32 = 0xce,
  UINT64 = 0xcf,
  INT8 = 0xd0,
  INT16 = 0xd1,
  INT32 = 0xd2,
  INT64 = 0xd3,
  FIXEXT1 = 0xd4,
  FIXEXT2 = 0xd5,
  FIXEXT4 = 0xd6,
  FIXEXT8 = 0xd7,
  FIXEXT16 = 0xd8,
  STR8 = 0xd9,
  STR16 = 0xda,
  STR32 = 0xdb,
  ARRAY16 = 0xdc,
  ARRAY32 = 0xdd,
  MAP16 = 0xde,
  MAP32 = 0xdf,
  NEGATIVE_FIXINT = 0xe0,
}

export function formatName(byte: u8): string {
  switch(byte) {
    case Format.POSITIVE_FIXINT:
      return "positive_fixint";
    case Format.FIXMAP:
      return "fixmap";
    case Format.FIXARRAY:
      return "fixarray";
    case Format.FIXSTR:
      return "fixstr";
    case Format.NIL:
      return "nil";
    case Format.FALSE:
      return "false";
    case Format.TRUE:
      return "true";
    case Format.BIN8:
      return "bin8";
    case Format.BIN16:
      return "bin16";
    case Format.BIN32:
      return "bin32";
    case Format.EXT8:
      return "ext8";
    case Format.EXT16:
      return "ext16";
    case Format.EXT32:
      return "ext32";
    case Format.FLOAT32:
      return "float32";
    case Format.FLOAT64:
      return "float64";
    case Format.UINT8:
      return "uint8";
    case Format.UINT16:
      return "uint16";
    case Format.UINT32:
      return "uint32";
    case Format.UINT64:
      return "uint64";
    case Format.INT8:
      return "int8";
    case Format.INT16:
      return "int16";
    case Format.INT32:
      return "int32";
    case Format.INT64:
      return "int64";
    case Format.FIXEXT1:
      return "fixext1";
    case Format.FIXEXT2:
      return "fixext2";
    case Format.FIXEXT4:
      return "fixext4";
    case Format.FIXEXT8:
      return "fixext8";
    case Format.FIXEXT16:
      return "fixext16";
    case Format.STR8:
      return "str8";
    case Format.STR16:
      return "str16";
    case Format.STR32:
      return "str32";
    case Format.ARRAY16:
      return "array16";
    case Format.ARRAY32:
      return "array32";
    case Format.MAP16:
      return "map16";
    case Format.MAP32:
      return "map32";
    case Format.NEGATIVE_FIXINT:
      return "negative_fixint";
    default:
      return "unknown";
  }
}
