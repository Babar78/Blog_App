"use client";

import FormPost from "@/components/formPost/FormPost";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { FormInputPost } from "@/types";
import BackButton from "@/components/backButton/BackButton";

function CreatePage() {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <BackButton />
      <h1 className="text-2xl text-center my-4 font-bold">Add New Post</h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
}

export default CreatePage;
