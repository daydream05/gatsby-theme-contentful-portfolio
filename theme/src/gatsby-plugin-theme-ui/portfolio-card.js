const portfolioCard = {
  container: {
    bg: [`unset`, `unset`, `unset`, `text`],
    px: [3, 3, 3, 4, 4],
    py: [3, 4, 4, 4, 4]
  },
  title: {
    fontWeight: `bold`,
    fontFamily: `heading`,
    fontSize: [3, 3, 3, 3],
    letterSpacing: 1,
    color: [`text`, `text`, `text`, `background`],
    mb: 4,
    mt: 0
  },
  textOverlay: {
    // this shows nothing right now,
    // we can't use linear gradient for different modes
  },
  category: {
    fontFamily: `body`,
    color: [`text`, `text`, `text`, `background`],
    letterSpacing: `widest`,
    fontSize: [0],
    opacity: 0.8,
    mt: [0]
  },
  description: {
    color: [`text`, `text`, `text`, `background`],
    fontFamily: `body`,
    lineHeight: 1.8,
    fontSize: [2, 2, 2, 1],
    mb: [4, 4, 4, 0],
    letterSpacing: `widest`
  }
};

export default portfolioCard;
