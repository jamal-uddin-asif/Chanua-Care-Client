import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import AddMedicineBtn from "../Buttons/AddMedicineBtn";
import AddMedicineForm from "../Forms/AddMedicineForm";

const AddMedicineDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <AddMedicineBtn/> {/*Open dialog btn*/}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle >Add Your Medicine</DialogTitle>
            <DialogDescription>
              <AddMedicineForm/>  {/*Form for add medicine*/}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddMedicineDialog;
