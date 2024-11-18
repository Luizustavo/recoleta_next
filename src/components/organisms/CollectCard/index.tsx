import Container from '@/components/atoms/container';

export interface CollectProps {
  id: string;
  eventName: string;
  description: string;
  createdBy: { firstName: string; lastName: string };
  isSigned: boolean;
}

export interface CollectCardProps {
  collect: CollectProps;
}

export const CollectCard: React.FC<CollectCardProps> = ({ collect }) => {
  return (
    <Container
      applyBorder
      isFluid={false}
      borderStyles="border border-gray-300"
      roundedCorners="rounded-none"
      applyShadowEffect
      shadowEffect="shadow-lg"
      additionalTWStyles="p-2 text-center"
      width="200px"
    >
      <div>
        <span className="font-bold">{collect.eventName}</span>
      </div>
      <div>
        <span>{collect.description}</span>
      </div>
      <div>
        <span>
          Created by: {collect.createdBy.firstName} {collect.createdBy.lastName}
        </span>
      </div>
      <div>
        <span>Status: {collect.isSigned ? 'Signed' : 'Available'}</span>
      </div>
    </Container>
  );
};
