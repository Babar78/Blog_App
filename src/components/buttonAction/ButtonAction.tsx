import React from "react";
import Link from "next/link";
import { Pencil, Trash } from "lucide-react";

const ButtonAction = () => {
  return (
    <div>
      <Link href="/edit/1" className="btn mr-2">
        <Pencil />
        EDIT
      </Link>
      <button className="btn btn-error">
        <Trash /> DELETE
      </button>
    </div>
  );
};

export default ButtonAction;
