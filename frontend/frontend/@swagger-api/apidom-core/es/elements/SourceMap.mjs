import { ArrayElement } from 'minim';
class SourceMap extends ArrayElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'sourceMap';
  }
  get positionStart() {
    return this.children.filter(item => item.classes.contains('position')).get(0);
  }
  get positionEnd() {
    return this.children.filter(item => item.classes.contains('position')).get(1);
  }
  set position(position) {
    if (typeof position === 'undefined') {
      return;
    }
    const start = new ArrayElement([position.start.row, position.start.column, position.start.char]);
    const end = new ArrayElement([position.end.row, position.end.column, position.end.char]);
    start.classes.push('position');
    end.classes.push('position');
    this.push(start).push(end);
  }
}
export default SourceMap;