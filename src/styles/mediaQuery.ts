const customMediaQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1440),
  laptop: customMediaQuery(1200),
  landScapeTablet: customMediaQuery(992),
  tablet: customMediaQuery(768),
  landScapePhone: customMediaQuery(600),
  phone: `@media (max-width: 576px)`,
};
