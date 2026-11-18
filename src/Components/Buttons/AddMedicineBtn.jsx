import React from "react";
import { FiPlus } from "react-icons/fi";
import { Button } from "../ui/button";

const AddMedicineBtn = ({isPending}) => {
  return (
    <Button disabled={isPending} type="submit" className="inline-flex hover:cursor-pointer disabled:bg-gray-300 items-center gap-2 border-2 border-border rounded-xl text-surface hover:bg-surface hover:text-text bg-secondary p-2 font-bold  mr-2 transition-all duration-200">

      <FiPlus className="w-5 h-5" />
      <span>{isPending ? 'Loading..' : 'Add medicine'}</span>
    </Button>
  );
};

export default AddMedicineBtn;
