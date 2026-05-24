'use client'
import Modal from "@/components/modal";
import { useState } from "react";
import { TOKO_URL, URL_IMAGE } from "@/global";

interface ViewImageProps {
  imageUrl: string;
  className: string
  label?: string;
  nama: string;
}

const ViewImage: React.FC<ViewImageProps> = ({ imageUrl, label, className, nama }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)} className={className}>
        {label}
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={label || "View Image"}>
        <div className="flex justify-center">
          <img
            width={100} height={100}
            className="w-full object-cover rounded-lg"
            src={
              imageUrl
                ? `${URL_IMAGE}/${imageUrl}`
                : '/img/Ranok_image.png'
            } 
            alt={nama}
          />
        </div>
      </Modal>
    </div>
  );
}
export default ViewImage;