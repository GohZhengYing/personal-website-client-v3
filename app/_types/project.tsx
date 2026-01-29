export type Skill = {
  skill: string;
  image: string;
};

export type ProjectItem = {
  title: string;
  body: string;
  image: string;
  link: string;
  skills: string[];
};

export type Project = {
  _id?: string;
  homePageHeader: string;
  homePageBody: string;
  homePageImage: string;
  homePageSkills: Skill[];
  projects: ProjectItem[];
  aboutMe: string;
  contacts: {
    email: string;
    linkedinUrl: string;
    githubUrl: string;
  };
};
