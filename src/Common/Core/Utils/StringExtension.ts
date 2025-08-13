const StringExtension = {
  NewlineInMiddle: (str: string) => {
    const mid = Math.floor(str.length / 2);
    return str.slice(0, mid) + "\n" + str.slice(mid);
  },
} as const;

export default StringExtension;
