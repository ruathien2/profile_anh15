import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Photos from "./components/photos/Photos";
import ShowReel from "./components/showReel/ShowReel";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { NavLink, Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import ModalSide from "./components/modal/ModalSide";
import { useState } from "react";
import useClickOutSide from "./customHook/useClickOutSide";
import WidgetPhone from "./components/widgetPhone/WidgetPhone";
import Admin from "./pages/Admin";
import ProfileAdmin from "./pages/ProfileAdmin";
import Image from "./pages/Image";
import Images from "./pages/Images";

function App() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleCancel = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };
  const handleOpen1 = () => {
    setShow1(true);
  };
  const handleCancel1 = () => {
    setShow1(false);
  };
  const listMenu = [
    // {
    //   id: 1,
    //   title: "Bio",
    // },
    {
      id: 2,
      title: "Profile",
      link: "profile",
    },
    {
      id: 3,
      title: "Videos",
      link: "videos",
    },
    {
      id: 4,
      title: "Project",
      link: "project",
    },{
      id: 5,
      title: "Images",
      link: "image",
    },
    // {
    //   id: 5,
    //   title: "Contact",
    //   link: "contact",
    // },
  ];

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Layout handleOpen={handleOpen1} />}>
          <Route index element={<Home handleOpen={handleOpen} />} />
          <Route path="videos" element={<ShowReel />} />
          <Route path="image" element={<Images/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route index element={<ProfileAdmin />} />
        </Route>
      </Routes>

      {/* <ShowReel></ShowReel>
      <Photos></Photos> */}
      <div className="right-0 hidden lg:fixed lg:block top-2/4">
        <div className="flex flex-col bg-[#e7e25a] py-2 gap-2 justify-center -translate-y-2/4">
          <a
            href="https://www.facebook.com/profile.php?id=100013732423312"
            className="px-4 py-2 cursor-pointer "
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@camal_channel?lang=en"
            className="px-4 py-2 cursor-pointer"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-tiktok"
              viewBox="0 0 16 16"
            >
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/ap120618dq/?igsh=MTFtYjhyOHI4N3dieA%3D%3D&fbclid=IwY2xjawGBdxJleHRuA2FlbQIxMAABHU8-jOMFLzttNBQBrJK4PIX7DoElyZCa_StPiEgMaXYDuhmjGWrOMrwDjA_aem_019r-yb5nwvh3D159LDjVA"
            className="px-4 py-2 cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </a>
          <a
            target="_blank"
            href=""
            className="px-4 py-2 cursor-pointer "
            title="Github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
          <div
            onClick={handleOpen}
            href=""
            className="px-4 py-2 cursor-pointer "
            title="Information"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
          </div>
        </div>
      </div>
      {show && <ModalSide handleCancel={handleCancel}></ModalSide>}
      {show1 && (
        <div className="fixed top-0 block lg:hidden bg-[#005761] w-full text-white h-[100vh] z-20">
          <div
            className="fixed text-white cursor-pointer right-2 top-2"
            onClick={handleCancel1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center w-full px-20 mt-20 text-lg text-center ">
            {listMenu &&
              listMenu.map((item) => {
                return (
                  <span
                    className="w-full py-4 [&:not(:last-child)]:border-b-2 border-white  "
                    key={item.id}
                    onClick={handleCancel1}
                  >
                    <NavLink to={item.link}>{item.title}</NavLink>
                  </span>
                );
              })}
          </div>
        </div>
      )}
      <WidgetPhone></WidgetPhone>
     
    </div>
  );
}

export default App;
