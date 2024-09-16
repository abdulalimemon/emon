type Icon = {
  title: string;
  image: string;
};

type Feature = {
  title: string;
  details: string;
};

type Technology = {
  name: string;
  details: string;
};

export type Project = {
  _id:string;
  name: string;
  id: number;
  title: string;
  shortdetail: string;
  image: string;
  icons: Icon[];
  link: string;
  url: string;
  urlName: string;
  projectOverview: string;
  feature: Feature[];
  technology: Technology[];
};

export type TMessage = {
  name: string;
  email: string;
  company: string;
  message: string;
};
