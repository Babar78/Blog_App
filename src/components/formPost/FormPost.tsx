"use client";
import { FormInputPost } from "@/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: React.FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Post Title..."
        className="input input-bordered w-full max-w-lg"
      />

      <textarea
        className="textarea textarea-bordered w-full max-w-lg"
        {...register("content", { required: true })}
        placeholder="Post Content..."
      ></textarea>
      <select
        {...register("tag", { required: true })}
        className="select select-bordered w-full max-w-lg"
        defaultValue={""}
      >
        <option disabled value="">
          Select Tags
        </option>
        <option>Javascript</option>
        <option>Php</option>
        <option>Python</option>
        <option>C++</option>
      </select>
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Edit Post" : "Create Post"}
      </button>
    </form>
  );
};

export default FormPost;
