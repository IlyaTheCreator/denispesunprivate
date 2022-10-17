import MyButton from '../UI/FormButtons/MyButton';
import {
  Button,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';


const Modal = ({
  isOpen,
  onClose,
  mainActionText,
  secondaryActionText,
  title,
  size, // 'xs', 'sm', 'md', 'lg', 'xl', 'full'
  children,
}) => {
  return (
    <ChakraModal
      size={size ? size : 'md'}
      isCentered
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent sx={{ borderRadius: 0 }}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <MyButton>
            Авторизация
          </MyButton>
        </ModalBody>
        <ModalFooter>
          <Button
            sx={{ borderRadius: 0 }}
            colorScheme="blue"
            mr={3}
            onClick={onClose}
          >
            {mainActionText}
          </Button>
          {secondaryActionText && (
            <Button sx={{ borderRadius: 0 }} variant="ghost">
              {secondaryActionText}
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
