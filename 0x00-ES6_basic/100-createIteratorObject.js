export default function createIteratorObject(report) {
  const customIterable = {
    data: Object.values(report.allEmployees).flat(),
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          if (index < this.data.length) {
            index += 1;
            return {
              value: this.data[index - 1],
              done: false,
            };
          }
          return {
            done: true,
          };
        },
      };
    },
  };
  return customIterable;
}
