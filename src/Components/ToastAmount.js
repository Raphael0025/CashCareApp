import React, { useState } from 'react';
import { Box, Text, Modal } from 'native-base';
import Colors from '../data/color';
import {View} from 'react-native'

const ToastAmount = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <Modal isOpen={isVisible} onClose={handleClose}>
        <Box w="1/2" h="1/6" bg={Colors.widgetBG} p={4} borderRadius="md" justifyContent="center" alignItems="flex-start" gap="2">
        <Text bold fontSize="md" color={Colors.title_color}>Alert!</Text>
        <View style={{ width: "100%", borderBottomColor: Colors.gray, borderBottomWidth: 1 }} />
        <Text color={Colors.secondary_txt}>'Please Add more Cash amount soon.'</Text>
        </Box>
    </Modal>
  );
};

export default ToastAmount;
