import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [imageUrl, setImageUrl] = useState('');

  /*  function handleOpenModal(url: string): void {
    onOpen();
    setImageUrl(url);
  } */

  const handleOpenModal = (url: string): void => {
    onOpen();
    setImageUrl(url);
  };

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="48px">
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleOpenModal} />
        ))}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} imgUrl={imageUrl} onClose={onClose} />
    </>
  );
}
