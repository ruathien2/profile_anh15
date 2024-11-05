import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import { useTranslation } from "react-i18next";

const list_input = [
  {
    id: 1,
    title: "Tên hoặc Biệt Danh",
    placeholder: "Tên hoặc Biệt Danh",
    name: "name",
  },
  {
    id: 2,
    title: "Năm Sinh",
    placeholder: "Năm Sinh",
    name: "born",
  },
  {
    id: 3,
    title: "Số Điện Thoại",
    placeholder: "Số Điện Thoại",
    name: "phoneNumber",
  },
  {
    id: 4,
    title: "Địa Chỉ Email",
    placeholder: "Địa Chỉ Email",
    name: "email",
  },
  {
    id: 5,
    title: "Màu Mắt",
    placeholder: "Màu Mắt",
    name: "eyesColor",
  },
  {
    id: 6,
    title: "Màu Tóc",
    placeholder: "Màu Tóc",
    name: "hairColor",
  },
  {
    id: 7,
    title: "Ngôn ngữ",
    placeholder: "Ngôn ngữ",
    name: "languages",
  },
];

export default function ProfileAdmin() {


  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: "onChange" });

 

  return (
    <div className="flex flex-col w-full gap-4 p-3 bg-white shadow">
      {/* <h1 className="text-3xl font-semibold text-center">Thông Tin Cá Nhân</h1>
      <div className="flex w-full mx-auto">
        <form className="flex flex-col w-full gap-2">
          {list_input.map((item) => {
            return (
              <div className="flex flex-col gap-2">
                <Label className="" title={item.title}></Label>
                <Input
                  control={control}
                  name={item.name}
                  type={"text"}
                  placeholder={item.placeholder}
                  className={"w-full"}
                ></Input>
              </div>
            );
          })}
        </form>
      </div> */}
     
    
    </div>
  );
}
