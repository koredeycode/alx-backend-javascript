export default function createIteratorObject (report) {
  const customIterable = {
    data: Object.values(report.allEmployees).flat(),
    [Symbol.iterator] () {
      let index = 0;
      return {
        next: () => {
          if (index < this.data.length) {
            return {
              value: this.data[index++],
              done: false
            };
          } else {
            return {
              done: true
            };
          }
        }
      };
    }
  };
  return customIterable;
}
