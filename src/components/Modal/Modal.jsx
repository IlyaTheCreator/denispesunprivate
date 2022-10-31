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
  mainAction,
  secondaryActionText,
  title,
  size, // 'xs', 'sm', 'md', 'lg', 'xl', 'full', etc
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
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button
            onClick={mainAction}
            sx={{ borderRadius: 0 }}
            colorScheme="blue"
            mr={3}
          >
            {mainActionText}
          </Button>
          {secondaryActionText && (
            <Button
              sx={{ borderRadius: 0 }}
              variant="ghost"
              onClick={onClose}
            >
              {secondaryActionText}
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
