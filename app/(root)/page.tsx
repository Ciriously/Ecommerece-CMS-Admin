"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};

export default SetupPage;

// import prismadb from "@/lib/prismadb";

// export default async function Home() {
//   const clothes = await prismadb.clothes.findMany();

//   return (
//     <div>
//       {clothes.map((cloth) => (
//         <div>
//           {/* <h1>{cloth.name}</h1> */}
//           <p>{cloth.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
