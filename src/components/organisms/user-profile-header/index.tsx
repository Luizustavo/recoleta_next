import { ServerUserData } from '@/types/api-related-types';
import Container from '@/components/atoms/container';

interface UserProfileProps {
  userData: ServerUserData;
}

export const UserProfileHeader: React.FC<UserProfileProps> = ({ userData }) => {
  return (
    <Container
      applyBorder
      borderStyles="border border-gray-300"
      roundedCorners="rounded-none"
      applyShadowEffect
      shadowEffect="shadow-lg"
      additionalTWStyles="p-2"
    >
      <h1>
        Bem Vindo, {userData.firstName} {userData.lastName}
      </h1>
      <div className="flex-col">
        <div>
          <span>Primeiro Nome: {userData.firstName}</span>
        </div>
        <div>
          <span>Ultimo Nome: {userData.lastName}</span>
        </div>
        <div>
          <span>Email: {userData.email}</span>
        </div>
        <div>
          <span>Tipo de Usuário: {userData.userType}</span>
        </div>
      </div>
    </Container>
  );
};
