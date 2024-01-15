export const getStar = (star: number | undefined) => {
  if (star === 3) {
    return "⭐⭐⭐";
  } else if (star === 4) {
    return "⭐⭐⭐⭐";
  } else if (star === 5) {
    return "⭐⭐⭐⭐⭐";
  }
};
