import styles from 'style/Header.module.scss';
import {Link} from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className={styles.wrap}>
      헤더헤더
      <Link to="/mypage">로그인페이지</Link>
    </div>
  );
};

export default Header;
