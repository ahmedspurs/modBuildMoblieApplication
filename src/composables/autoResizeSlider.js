export const autoResizeCardSliderSmall = (screenWidth) => {
  if (screenWidth > 390) return 4;
  else if (screenWidth > 300) return 3;
  else return 2;
};

export const autoResizeBestProducts = (screenWidth) => {
  if (screenWidth > 540) return 3;
  else if (screenWidth > 350) return 2;
  else return 1;
};

export const autoResizeCityChips = (screenWidth) => {
  if (screenWidth > 450) return 5;
  else if (screenWidth > 320) return 4;
  else return 3;
};

export const autoResizePartners = (screenWidth) => {
  if (screenWidth > 450) return 4;
  else if (screenWidth > 320) return 3;
  else return 2;
};
