import styles from './index.module.css';
const Cart: React.FC = () => {
  return (
    <div>
      <section>
        <div className={styles.table}>
          <div className={styles.tableHead}>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>
                <span>
                  {' '}
                  <input type="checkbox" />
                  <label>전체선택</label>
                </span>
              </div>

              <div className={styles.tableCell}>상품정보</div>
              <div className={styles.tableCell}>수량</div>
              <div className={styles.tableCell}>주문금액</div>
              <div className={styles.tableCell}>쿠폰</div>
            </div>
          </div>
          <div className={styles.table}>
            <div className={styles.tableBody}>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>
                  <span>
                    <input type="checkbox" />
                    <label>선택</label>
                  </span>
                </div>
                <div className={(styles.tableCell, styles.productDetail)}>
                  <div>
                    <a>
                      <img />
                    </a>
                    <div>
                      <div>브랜드명</div>
                      <div>상품명</div>
                      <div>가격</div>
                      <div>옵션</div>
                    </div>
                  </div>
                  <button>삭제</button>
                </div>
                <div className={styles.tableCell}>
                  <div>{'-'}</div>
                  <div>수량</div>
                  <div>{'+'}</div>
                </div>
                <div className={styles.tableCell}>
                  <div>
                    <span>가격</span>원
                  </div>
                  <button> buy now</button>
                </div>
                <div className={styles.tableCell}>
                  <div>
                    <span>쿠폰내용</span>
                  </div>
                  <button>셀렉창</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {' '}
          <div>
            {' '}
            <button>선택상품 삭제</button>
          </div>
          <p>새로고침할때까지 저장됩니다.</p>
        </div>
      </section>
      <section>
        <div>
          <div>
            <div>총주문금액</div>
            <div>쿠폰금액</div>
            <div>총결제금액</div>
          </div>
          <div>
            <div>
              <span>
                <strong>금액</strong>원
              </span>
              <span>층 1개</span>
            </div>
            <div>
              <i>{'+'}</i>
              <span>
                <strong>금액</strong>원
              </span>
            </div>
            <div>
              <i>{'='}</i>
              <span>
                <strong>금액</strong>원
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Cart;
