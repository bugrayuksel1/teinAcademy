const routes = {
  home: {
    name: "home",
    path: "/",
    access: "public",
  },
  groups: {
    name: "groups",
    path: "/groups",
    access: "public",
  },
  grades: {
    name: "grades",
    path: "/grades",
    access: "public",
  },
  postdetail: {
    name: "postdetail",
    path: "/grades/postdetail/:id",
    access: "public",
  },
  departments: {
    name: "departments",
    path: "/departments",
    access: "public",
  },
  class: {
    name: "class",
    path: "/class",
    access: "public",
  },
  administration: {
    name: "administration",
    path: "/administration",
    access: "user",
  },
  manager: {
    name: "manager",
    path: "/manager",
    access: "admin",
  },
  usercontrol: {
    name: "usercontrol",
    path: "/manager/usercontrol",
    access: "superadmin",
  },
};

export default routes;
