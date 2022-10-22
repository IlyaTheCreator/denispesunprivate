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
import { useState } from 'react';

const Modal = ({
  isOpen,
  onClose,
  mainActionText,
  secondaryActionText,
  title,
  size, // 'xs', 'sm', 'md', 'lg', 'xl', 'full'
  children,
}) => {
  const [data, setData] = useState('');

  const getData = () => {
    setData(data);
    console.log(data);
  };
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
            sx={{ borderRadius: 0 }}
            colorScheme="blue"
            mr={3}
            onClick={getData}
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
