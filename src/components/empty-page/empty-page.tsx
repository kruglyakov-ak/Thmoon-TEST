import Header from '../header/header';
import * as S from './empty-page.styled';

function EmptyPage() {
  return (
    <>
      <Header />
      <S.Main>
        <h2>Ошибка загрузки данных о фильмах. Попробуйте подключить VPN</h2>
      </S.Main>
    </>
  );
}

export default EmptyPage;
