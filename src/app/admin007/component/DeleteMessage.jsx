"use client";
export const instant = false;

import React from "react";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const DeleteMessage = ({id}) => {
    const router = useRouter();
    const handelDelete = async () => {
        const prom = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URI}/visitor/${id}`,{
            method:'DELETE'
        });
        const res = await prom.json();
        if(!res){
            toast.error('Surver is error')
        }else{
            toast.success('Delete is successfully Done!')
        }
        router.refresh()

    }
  return (
    <button
      onClick={handelDelete}
      className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500 transition-all hover:bg-red-500 hover:text-white"
    >
      <Trash2 size={16} />
      Delete
    </button>
  );
};

export default DeleteMessage;