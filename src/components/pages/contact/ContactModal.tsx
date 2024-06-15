import ContactModalInfo from "@/components/shared/Modal/ContactModalInfo";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const ContactModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Button</Button>
        </DialogTrigger>
        <ContactModalInfo />
      </Dialog>
    </>
  );
};

export default ContactModal;
