import { default as Grammar } from './node-grammar.js';
import { Parser, Trace, Stats } from '../lib/parser.js';

const obj = new Grammar();
const parser = new Parser();
parser.trace = new Trace();
parser.stats = new Stats();
const input = 'aaabbbccc';
const result = parser.parse(obj, 'S', input);
console.log('\nPARSER ABNF GRAMMAR');
console.log(obj.toString());
console.log('\nPARSER INPUT STRING');
console.log(input);
console.log('\nPARSER RESULT');
console.dir(result);
console.log('\nPARSER NODE HIT STATISTICS');
console.log(parser.stats.displayStats());
console.log(parser.stats.displayHits());
console.log(parser.stats.displayHits('alphabetical'));
console.log(parser.stats.displayHits('index'));
console.log('\nPARSER TRACE');
console.log(parser.trace.displayTrace());
