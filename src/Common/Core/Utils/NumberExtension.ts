const NumberExtension = {
  Format: (number: number) => {
    return number.toLocaleString("id-ID");
  },
} as const;

export default NumberExtension;
