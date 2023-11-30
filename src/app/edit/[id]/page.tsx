"use client";

import BackButton from "@/components/backButton/BackButton";
import FormPost from "@/components/formPost/FormPost";
import { FormInputPost } from "@/types";
import React from "react";
import { SubmitHandler } from "react-hook-form";

const EditPostPage = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <BackButton />
      <h1 className="text-2xl text-center my-4 font-bold">Edit Post</h1>
      <FormPost submit={handleEditPost} isEditing={true} />
    </div>
  );
};

export default EditPostPage;
