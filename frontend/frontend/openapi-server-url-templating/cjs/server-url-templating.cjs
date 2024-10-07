"use strict";

exports.__esModule = true;
exports.default = grammar;
// copyright: Copyright (c) 2024 Lowell D. Thomas, all rights reserved<br>
//   license: BSD-2-Clause (https://opensource.org/licenses/BSD-2-Clause)<br>
//
// Generated by apg-js, Version 4.4.0 [apg-js](https://github.com/ldthomas/apg-js)
function grammar() {
  // ```
  // SUMMARY
  //      rules = 12
  //       udts = 0
  //    opcodes = 87
  //        ---   ABNF original opcodes
  //        ALT = 9
  //        CAT = 2
  //        REP = 3
  //        RNM = 14
  //        TLS = 26
  //        TBS = 6
  //        TRG = 27
  //        ---   SABNF superset opcodes
  //        UDT = 0
  //        AND = 0
  //        NOT = 0
  // characters = [33 - 1114109]
  // ```
  /* OBJECT IDENTIFIER (for internal parser use) */
  this.grammarObject = 'grammarObject';

  /* RULES */
  this.rules = [];
  this.rules[0] = {
    name: 'server-url-template',
    lower: 'server-url-template',
    index: 0,
    isBkr: false
  };
  this.rules[1] = {
    name: 'server-variable',
    lower: 'server-variable',
    index: 1,
    isBkr: false
  };
  this.rules[2] = {
    name: 'server-variable-name',
    lower: 'server-variable-name',
    index: 2,
    isBkr: false
  };
  this.rules[3] = {
    name: 'literals',
    lower: 'literals',
    index: 3,
    isBkr: false
  };
  this.rules[4] = {
    name: 'ALPHA',
    lower: 'alpha',
    index: 4,
    isBkr: false
  };
  this.rules[5] = {
    name: 'DIGIT',
    lower: 'digit',
    index: 5,
    isBkr: false
  };
  this.rules[6] = {
    name: 'HEXDIG',
    lower: 'hexdig',
    index: 6,
    isBkr: false
  };
  this.rules[7] = {
    name: 'pct-encoded',
    lower: 'pct-encoded',
    index: 7,
    isBkr: false
  };
  this.rules[8] = {
    name: 'unreserved',
    lower: 'unreserved',
    index: 8,
    isBkr: false
  };
  this.rules[9] = {
    name: 'sub-delims',
    lower: 'sub-delims',
    index: 9,
    isBkr: false
  };
  this.rules[10] = {
    name: 'ucschar',
    lower: 'ucschar',
    index: 10,
    isBkr: false
  };
  this.rules[11] = {
    name: 'iprivate',
    lower: 'iprivate',
    index: 11,
    isBkr: false
  };

  /* UDTS */
  this.udts = [];

  /* OPCODES */
  /* server-url-template */
  this.rules[0].opcodes = [];
  this.rules[0].opcodes[0] = {
    type: 3,
    min: 1,
    max: Infinity
  }; // REP
  this.rules[0].opcodes[1] = {
    type: 1,
    children: [2, 3]
  }; // ALT
  this.rules[0].opcodes[2] = {
    type: 4,
    index: 3
  }; // RNM(literals)
  this.rules[0].opcodes[3] = {
    type: 4,
    index: 1
  }; // RNM(server-variable)

  /* server-variable */
  this.rules[1].opcodes = [];
  this.rules[1].opcodes[0] = {
    type: 2,
    children: [1, 2, 3]
  }; // CAT
  this.rules[1].opcodes[1] = {
    type: 7,
    string: [123]
  }; // TLS
  this.rules[1].opcodes[2] = {
    type: 4,
    index: 2
  }; // RNM(server-variable-name)
  this.rules[1].opcodes[3] = {
    type: 7,
    string: [125]
  }; // TLS

  /* server-variable-name */
  this.rules[2].opcodes = [];
  this.rules[2].opcodes[0] = {
    type: 3,
    min: 1,
    max: Infinity
  }; // REP
  this.rules[2].opcodes[1] = {
    type: 1,
    children: [2, 3, 4, 5, 6]
  }; // ALT
  this.rules[2].opcodes[2] = {
    type: 4,
    index: 8
  }; // RNM(unreserved)
  this.rules[2].opcodes[3] = {
    type: 4,
    index: 7
  }; // RNM(pct-encoded)
  this.rules[2].opcodes[4] = {
    type: 4,
    index: 9
  }; // RNM(sub-delims)
  this.rules[2].opcodes[5] = {
    type: 7,
    string: [58]
  }; // TLS
  this.rules[2].opcodes[6] = {
    type: 7,
    string: [64]
  }; // TLS

  /* literals */
  this.rules[3].opcodes = [];
  this.rules[3].opcodes[0] = {
    type: 3,
    min: 1,
    max: Infinity
  }; // REP
  this.rules[3].opcodes[1] = {
    type: 1,
    children: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  }; // ALT
  this.rules[3].opcodes[2] = {
    type: 6,
    string: [33]
  }; // TBS
  this.rules[3].opcodes[3] = {
    type: 5,
    min: 35,
    max: 36
  }; // TRG
  this.rules[3].opcodes[4] = {
    type: 6,
    string: [38]
  }; // TBS
  this.rules[3].opcodes[5] = {
    type: 5,
    min: 40,
    max: 59
  }; // TRG
  this.rules[3].opcodes[6] = {
    type: 6,
    string: [61]
  }; // TBS
  this.rules[3].opcodes[7] = {
    type: 5,
    min: 63,
    max: 91
  }; // TRG
  this.rules[3].opcodes[8] = {
    type: 6,
    string: [93]
  }; // TBS
  this.rules[3].opcodes[9] = {
    type: 6,
    string: [95]
  }; // TBS
  this.rules[3].opcodes[10] = {
    type: 5,
    min: 97,
    max: 122
  }; // TRG
  this.rules[3].opcodes[11] = {
    type: 6,
    string: [126]
  }; // TBS
  this.rules[3].opcodes[12] = {
    type: 4,
    index: 10
  }; // RNM(ucschar)
  this.rules[3].opcodes[13] = {
    type: 4,
    index: 11
  }; // RNM(iprivate)
  this.rules[3].opcodes[14] = {
    type: 4,
    index: 7
  }; // RNM(pct-encoded)

  /* ALPHA */
  this.rules[4].opcodes = [];
  this.rules[4].opcodes[0] = {
    type: 1,
    children: [1, 2]
  }; // ALT
  this.rules[4].opcodes[1] = {
    type: 5,
    min: 65,
    max: 90
  }; // TRG
  this.rules[4].opcodes[2] = {
    type: 5,
    min: 97,
    max: 122
  }; // TRG

  /* DIGIT */
  this.rules[5].opcodes = [];
  this.rules[5].opcodes[0] = {
    type: 5,
    min: 48,
    max: 57
  }; // TRG

  /* HEXDIG */
  this.rules[6].opcodes = [];
  this.rules[6].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6, 7]
  }; // ALT
  this.rules[6].opcodes[1] = {
    type: 4,
    index: 5
  }; // RNM(DIGIT)
  this.rules[6].opcodes[2] = {
    type: 7,
    string: [97]
  }; // TLS
  this.rules[6].opcodes[3] = {
    type: 7,
    string: [98]
  }; // TLS
  this.rules[6].opcodes[4] = {
    type: 7,
    string: [99]
  }; // TLS
  this.rules[6].opcodes[5] = {
    type: 7,
    string: [100]
  }; // TLS
  this.rules[6].opcodes[6] = {
    type: 7,
    string: [101]
  }; // TLS
  this.rules[6].opcodes[7] = {
    type: 7,
    string: [102]
  }; // TLS

  /* pct-encoded */
  this.rules[7].opcodes = [];
  this.rules[7].opcodes[0] = {
    type: 2,
    children: [1, 2, 3]
  }; // CAT
  this.rules[7].opcodes[1] = {
    type: 7,
    string: [37]
  }; // TLS
  this.rules[7].opcodes[2] = {
    type: 4,
    index: 6
  }; // RNM(HEXDIG)
  this.rules[7].opcodes[3] = {
    type: 4,
    index: 6
  }; // RNM(HEXDIG)

  /* unreserved */
  this.rules[8].opcodes = [];
  this.rules[8].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6]
  }; // ALT
  this.rules[8].opcodes[1] = {
    type: 4,
    index: 4
  }; // RNM(ALPHA)
  this.rules[8].opcodes[2] = {
    type: 4,
    index: 5
  }; // RNM(DIGIT)
  this.rules[8].opcodes[3] = {
    type: 7,
    string: [45]
  }; // TLS
  this.rules[8].opcodes[4] = {
    type: 7,
    string: [46]
  }; // TLS
  this.rules[8].opcodes[5] = {
    type: 7,
    string: [95]
  }; // TLS
  this.rules[8].opcodes[6] = {
    type: 7,
    string: [126]
  }; // TLS

  /* sub-delims */
  this.rules[9].opcodes = [];
  this.rules[9].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  }; // ALT
  this.rules[9].opcodes[1] = {
    type: 7,
    string: [33]
  }; // TLS
  this.rules[9].opcodes[2] = {
    type: 7,
    string: [36]
  }; // TLS
  this.rules[9].opcodes[3] = {
    type: 7,
    string: [38]
  }; // TLS
  this.rules[9].opcodes[4] = {
    type: 7,
    string: [39]
  }; // TLS
  this.rules[9].opcodes[5] = {
    type: 7,
    string: [40]
  }; // TLS
  this.rules[9].opcodes[6] = {
    type: 7,
    string: [41]
  }; // TLS
  this.rules[9].opcodes[7] = {
    type: 7,
    string: [42]
  }; // TLS
  this.rules[9].opcodes[8] = {
    type: 7,
    string: [43]
  }; // TLS
  this.rules[9].opcodes[9] = {
    type: 7,
    string: [44]
  }; // TLS
  this.rules[9].opcodes[10] = {
    type: 7,
    string: [59]
  }; // TLS
  this.rules[9].opcodes[11] = {
    type: 7,
    string: [61]
  }; // TLS

  /* ucschar */
  this.rules[10].opcodes = [];
  this.rules[10].opcodes[0] = {
    type: 1,
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  }; // ALT
  this.rules[10].opcodes[1] = {
    type: 5,
    min: 160,
    max: 55295
  }; // TRG
  this.rules[10].opcodes[2] = {
    type: 5,
    min: 63744,
    max: 64975
  }; // TRG
  this.rules[10].opcodes[3] = {
    type: 5,
    min: 65008,
    max: 65519
  }; // TRG
  this.rules[10].opcodes[4] = {
    type: 5,
    min: 65536,
    max: 131069
  }; // TRG
  this.rules[10].opcodes[5] = {
    type: 5,
    min: 131072,
    max: 196605
  }; // TRG
  this.rules[10].opcodes[6] = {
    type: 5,
    min: 196608,
    max: 262141
  }; // TRG
  this.rules[10].opcodes[7] = {
    type: 5,
    min: 262144,
    max: 327677
  }; // TRG
  this.rules[10].opcodes[8] = {
    type: 5,
    min: 327680,
    max: 393213
  }; // TRG
  this.rules[10].opcodes[9] = {
    type: 5,
    min: 393216,
    max: 458749
  }; // TRG
  this.rules[10].opcodes[10] = {
    type: 5,
    min: 458752,
    max: 524285
  }; // TRG
  this.rules[10].opcodes[11] = {
    type: 5,
    min: 524288,
    max: 589821
  }; // TRG
  this.rules[10].opcodes[12] = {
    type: 5,
    min: 589824,
    max: 655357
  }; // TRG
  this.rules[10].opcodes[13] = {
    type: 5,
    min: 655360,
    max: 720893
  }; // TRG
  this.rules[10].opcodes[14] = {
    type: 5,
    min: 720896,
    max: 786429
  }; // TRG
  this.rules[10].opcodes[15] = {
    type: 5,
    min: 786432,
    max: 851965
  }; // TRG
  this.rules[10].opcodes[16] = {
    type: 5,
    min: 851968,
    max: 917501
  }; // TRG
  this.rules[10].opcodes[17] = {
    type: 5,
    min: 921600,
    max: 983037
  }; // TRG

  /* iprivate */
  this.rules[11].opcodes = [];
  this.rules[11].opcodes[0] = {
    type: 1,
    children: [1, 2, 3]
  }; // ALT
  this.rules[11].opcodes[1] = {
    type: 5,
    min: 57344,
    max: 63743
  }; // TRG
  this.rules[11].opcodes[2] = {
    type: 5,
    min: 983040,
    max: 1048573
  }; // TRG
  this.rules[11].opcodes[3] = {
    type: 5,
    min: 1048576,
    max: 1114109
  }; // TRG

  // The `toString()` function will display the original grammar file(s) that produced these opcodes.
  this.toString = function toString() {
    let str = "";
    str += "; OpenAPI Server URL templating ABNF syntax\n";
    str += "server-url-template    = 1*( literals / server-variable )\n";
    str += "server-variable        = \"{\" server-variable-name \"}\"\n";
    str += "server-variable-name   = 1*( unreserved / pct-encoded / sub-delims / \":\" / \"@\" )\n";
    str += "literals               = 1*( %x21 / %x23-24 / %x26 / %x28-3B / %x3D / %x3F-5B\n";
    str += "                       / %x5D / %x5F / %x61-7A / %x7E / ucschar / iprivate\n";
    str += "                       / pct-encoded)\n";
    str += "                           ; any Unicode character except: CTL, SP,\n";
    str += "                           ;  DQUOTE, \"'\", \"%\" (aside from pct-encoded),\n";
    str += "                           ;  \"<\", \">\", \"\\\", \"^\", \"`\", \"{\", \"|\", \"}\"\n";
    str += "\n";
    str += "; Characters definitions (from RFC 6570)\n";
    str += "ALPHA          =  %x41-5A / %x61-7A   ; A-Z / a-z\n";
    str += "DIGIT          =  %x30-39             ; 0-9\n";
    str += "HEXDIG         =  DIGIT / \"A\" / \"B\" / \"C\" / \"D\" / \"E\" / \"F\"\n";
    str += "                 ; case-insensitive\n";
    str += "\n";
    str += "pct-encoded    =  \"%\" HEXDIG HEXDIG\n";
    str += "unreserved     =  ALPHA / DIGIT / \"-\" / \".\" / \"_\" / \"~\"\n";
    str += "sub-delims     =  \"!\" / \"$\" / \"&\" / \"'\" / \"(\" / \")\"\n";
    str += "               /  \"*\" / \"+\" / \",\" / \";\" / \"=\"\n";
    str += "\n";
    str += "ucschar        =  %xA0-D7FF / %xF900-FDCF / %xFDF0-FFEF\n";
    str += "               /  %x10000-1FFFD / %x20000-2FFFD / %x30000-3FFFD\n";
    str += "               /  %x40000-4FFFD / %x50000-5FFFD / %x60000-6FFFD\n";
    str += "               /  %x70000-7FFFD / %x80000-8FFFD / %x90000-9FFFD\n";
    str += "               /  %xA0000-AFFFD / %xB0000-BFFFD / %xC0000-CFFFD\n";
    str += "               /  %xD0000-DFFFD / %xE1000-EFFFD\n";
    str += "\n";
    str += "iprivate       =  %xE000-F8FF / %xF0000-FFFFD / %x100000-10FFFD\n";
    return str;
  };
}