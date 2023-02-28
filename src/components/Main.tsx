import styles from 'style/Main.module.scss';

const Main: React.FC = () => {
  const dummy: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={styles.wrap}>
      메인
      <div className={styles.intro}>간단한 설명</div>
      <div className={styles.buttonWrap}>
        <button>코스 둘러보기</button>
        <button>시작스</button>
      </div>
      <div className={styles.list}>
        {dummy.map((el) => {
          return <div id={el.toString()} className={styles.listItem}></div>;
        })}
      </div>
    </div>
  );
};

export default Main;
