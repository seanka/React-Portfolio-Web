const ArrayExtension = {
  ShuffleArray: <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  SortArrayByPosition: <T extends { position?: number }>(array: T[]): T[] => {
    return array.sort((a, b) => {
      const posA = a.position ? a.position : 99;
      const posB = b.position ? b.position : 98;
      return posA - posB;
    });
  },

  sortByIssuedDate: <T extends { issued?: string }>(array: T[]): T[] => {
    return array.sort((a, b) => {
      const dateA = a.issued ? new Date(a.issued + "-01").getTime() : 0;
      const dateB = b.issued ? new Date(b.issued + "-01").getTime() : 0;
      return dateB - dateA;
    });
  },

  sortByCreatedDate: <T extends { created?: string }>(array: T[]): T[] => {
    return array.sort((a, b) => {
      const dateA = a.created ? new Date(a.created + "-01").getTime() : 0;
      const dateB = b.created ? new Date(b.created + "-01").getTime() : 0;
      return dateB - dateA;
    });
  },
} as const;

export default ArrayExtension;
