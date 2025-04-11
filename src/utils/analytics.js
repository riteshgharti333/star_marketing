import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-DSEKZL1ZC1");
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
