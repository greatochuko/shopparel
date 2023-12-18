import { ShippingInformationType } from "../pages/CheckoutPage";
import ShippingInformationForm from "./ShippingInformationForm";
import ChangeNameForm from "./ChangeNameForm";
import ChangeEmailForm from "./ChangeEmailForm";
import ChangePasswordForm from "./ChangePasswordForm";
import DeleteShippingInfoModal from "./DeleteShippingInfoModal";
import SignoutModal from "./SignoutModal";
import ReviewForm from "./ReviewForm";
import { ReviewType } from "./Review";

export type Value =
  | ({
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
    } & ShippingInformationType)
  | null;

type ModalProps = {
  closeModal: () => void;
  type: string;
  shippingInfo?: ShippingInformationType;
  setShippingInformations?: React.Dispatch<
    React.SetStateAction<ShippingInformationType[]>
  >;
  productId?: string;
  review?: ReviewType;
};

export default function Modal({
  type,
  shippingInfo,
  closeModal,
  setShippingInformations,
  productId,
  review,
}: ModalProps) {
  return (
    <div
      onClick={closeModal}
      className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/50 flex-center animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-2xl sm:w-fit bg-white rounded-lg animate-zoom-in shadow-md overflow-hidden flex flex-col justify-between"
      >
        {type === "name" ? <ChangeNameForm closeModal={closeModal} /> : null}
        {type === "email" ? <ChangeEmailForm closeModal={closeModal} /> : null}
        {type === "password" ? (
          <ChangePasswordForm closeModal={closeModal} />
        ) : null}
        {type === "add-new-shipping-info" ? (
          <ShippingInformationForm
            closeModal={closeModal}
            setShippingInformations={setShippingInformations}
          />
        ) : null}
        {type === "edit-shipping-info" ? (
          <ShippingInformationForm
            type="edit"
            closeModal={closeModal}
            shippingInformation={shippingInfo}
            setShippingInformations={setShippingInformations}
          />
        ) : null}
        {type === "delete-shipping-info" ? (
          <DeleteShippingInfoModal
            closeModal={closeModal}
            shippingInfo={shippingInfo as ShippingInformationType}
            setShippingInformations={setShippingInformations}
          />
        ) : null}
        {type === "signout" ? <SignoutModal closeModal={closeModal} /> : null}
        {type === "review" ? (
          <ReviewForm
            closeModal={closeModal}
            productId={productId as string}
            review={review}
          />
        ) : null}
      </div>
    </div>
  );
}
