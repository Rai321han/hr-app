// "use client";

// import { useState } from "react";
// // import { deleteEmployee } from "@/actions/actions";

// export default function DeleteButton({ id }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <div
//         className="bg-red-400 p-2 cursor-pointer"
//         onClick={(e) => {
//           setOpen(true);
//           e.stopPropagation();
//         }}
//       >
//         <AiOutlineDelete />
//       </div>
//       <div>A modal</div>
//     </>
//   );
// }
"use client";
import { AiOutlineDelete } from "react-icons/ai";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { deleteEmployee } from "@/actions/actions";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }) {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        color="danger"
        isIconOnly
        radius="none"
        size="sm"
      >
        <AiOutlineDelete />
      </Button>
      <Modal
        radius="none"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure you want to delete this?
              </ModalHeader>
              {/* <ModalBody>
               
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody> */}
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  onClick={() => {
                    deleteEmployee(id);
                    router.refresh();
                  }}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
