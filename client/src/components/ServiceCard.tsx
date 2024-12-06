import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "/src/styles/Card.css";

interface ServiceCardProps {
  img: string;
  title: string;
  date: string;
  description: string;
  user: string;
}

export default function ServiceCard({
  img,
  title,
  date,
  description,
  user,
}: ServiceCardProps) {
  return (
    <div className="component-card">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="card">
            <div className="card-content">
              <img
                className="card-image"
                src={
                  img ||
                  "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
                }
                alt="image-annonce"
              />
              <div className="card-text">
                <h2 className="card-title">{title}</h2>
                <p className="card-date">{date}</p>
              </div>
            </div>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Close asChild>
              <button type="button" className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
            <div className="modal-content">
              <img
                src={
                  img ||
                  "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
                }
                alt=""
                className="modal-image"
              />
              <div className="modal-details-container">
                <Dialog.Title className="DialogTitle">{title}</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                  {description}
                </Dialog.Description>
                <div className="modal-details">
                  <div className="Fieldset">
                    <span className="Label">Utilisateur :</span>
                    <p className="UserInfo">{user}</p>
                  </div>
                  <div className="Fieldset">
                    <span className="Label">Date :</span>
                    <p className="UserInfo">{date}</p>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
