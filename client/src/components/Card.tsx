import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "/src/styles/Card.css";

interface CardProps {
  img: string;
  title: string;
  date: string;
  description: string;
  user: string;
  state: string;
}

export default function Card({
  img,
  title,
  date,
  description,
  user,
  state,
}: CardProps) {
  return (
    <div className="component-card">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="card">
            <img className="card-image" src={img} alt="image-annonce" />
            <div className="card-text">
              <h2 className="card-title">{title}</h2>
              <p className="card-date">{date}</p>
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
            <Dialog.Title className="DialogTitle">{title}</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              {description}
            </Dialog.Description>
            <img src={img} alt="" className="modal-image" />
            <div className="Fieldset">
              <span className="Label">Utilisateur :</span>
              <p className="UserInfo">{user}</p>
            </div>
            <div className="Fieldset">
              <span className="Label">État :</span>
              <p className="UserInfo">{state}</p>
            </div>
            <div className="Fieldset">
              <span className="Label">Date :</span>
              <p className="UserInfo">{date}</p>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
