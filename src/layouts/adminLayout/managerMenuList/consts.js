export const menuData = [
  {
    title: "User Section",
    list: [
      {
        path: "/manager/usercontrol",
        text: "User Panel",
        role: ["superadmin"],
      },
      {
        path: "/manager/blockuser",
        text: "Block User",
        role: ["admin", "superadmin"],
      },
    ],
  },
  {
    title: "Post Section",
    list: [
      {
        path: "/manager/addpost",
        text: "Add Post",
        role: ["editor", "superadmin"],
      },
      {
        path: "/manager/approvecomments",
        text: "Approve Comments",
        role: ["admin", "editor", "superadmin"],
      },
    ],
  },
  {
    title: "Course Section",
    list: [
      {
        path: "/manager/addcourse",
        text: "Add New Course",
        role: ["editor", "superadmin"],
      },
    ],
  },
];
