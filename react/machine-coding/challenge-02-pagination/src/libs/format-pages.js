export const formatPages = (total, current) => {
  let selected;

  if (current === 1) {
    selected = [current, current + 1, current + 2];
  } else if (current === total) {
    selected = [current - 2, current - 1, current];
  } else {
    selected = [current - 1, current, current + 1];
  }

  return selected;
};
