import styles from '../styles/homeMenu.module.css';
export default function HomeMenu() {
    return (
        <>
        
        <section className={styles.menu}>
        
        
            <div className={`${styles.menuImg} ${styles.fixedBg}`}>
               <h2 className={styles.secTitle}>MENU</h2>
            </div>
        
         
         
            <div className={`${styles.menuContent} ${styles.wrapper}`}>
              <div className={styles.menuItem}>
                 <h3 className={styles.itemTitle}>DRINK</h3>
                 <dl>
                 
                 <dt>ブレンドコーヒー（Hot/Ice）</dt>
                 <dd>¥450</dd>
                 <dt>脂肪燃焼コーヒー（Hot）</dt>
                 <dd>¥500</dd>
                 <dt>カフェインレスコーヒー（Hot）</dt>
                 <dd>¥520</dd>
                 <dt>カフェラテ（Hot/Ice）</dt>
                 <dd>¥500</dd>
                 <dt>抹茶ティーラテ（Hot/Ice）</dt>
                 <dd>¥500</dd>
                 <dt>ほうじ茶ラテ（Hot/Ice）</dt>
                 <dd>¥500</dd>
                 <dt>黒ごまラテ（Hot/Ice）</dt>
                 <dd>¥500</dd>
                 <dt>ココア（Hot/Ice）</dt>
                 <dd>¥500</dd>
                 <dt>紅茶（Hot/Ice）</dt>
                 <dd>¥450</dd>
                 <dt>レモンティー（Hot/Ice）</dt>
                 <dd>¥470</dd>
                 </dl>
               </div>
            
            <div className={styles.menuItem}>
                <h3 className={styles.itemTitle}>FOOD</h3>
                <dl className={styles.food}>
                  <dt>トースト</dt>
                  <dd>¥320</dd>
                  <dt>おひるごはん</dt>
                  <dd>¥900</dd>
                  <dt>カレー</dt>
                  <dd>¥900</dd>
                  <dt>カツカレー</dt>
                  <dd>¥1100</dd>
                  <dt>無水カレー</dt>
                  <dd>¥1000</dd>
                  <dt>無水カツカレー</dt>
                  <dd>¥1200</dd>
                </dl>
                <h3 className={styles.itemTitle}>DESERT</h3>
               <dl>
                  <dt>シフォンケーキ各種</dt>
                  <dd>¥500</dd>
                  <dt>アップルパイ</dt>
                  <dd>¥500</dd>
                  <dt>チーズケーキ</dt>
                  <dd>¥500</dd>
                  <dt>ミニパフェ</dt>
                  <dd>¥600</dd>
                  <dt>パフェ</dt>
                  <dd>¥800</dd>
               </dl>
            </div>
         </div>
         
        </section>

    <section className={styles.location}>
        <div className={`${styles.locationImg} ${styles.fixedBg}`}>
          <h2 className={styles.secTitle}>LOCATION</h2>
        </div>

        <div className={`${styles.locationContent} ${styles.wrapper}`}>
          <div className={styles.locationItem}>
            <h3 className={styles.itemTitle}>OUR STORE</h3>
            <div className={styles.itemMap}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.0159337655564!2d137.09568001825235!3d36.71144593720814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff79b4f0c840001%3A0x5bc2cd1641c06ce4!2z44Or44OB44Oj44OK!5e0!3m2!1sja!2sjp!4v1702453681961!5m2!1sja!2sjp" ></iframe>
            </div>
            <div className={styles.itemInfo}>
              
               <p> Kosugi, Hibari, Toyama 939-0351</p>
                <p>富山県射水市戸破 字後宝1463</p>
              
              
              <p>定休日 月曜日,火曜日</p>
              <p>8:30am to 15:00pm</p> 
              
              <p>Tel : 0766-75-1648</p>
            </div>
          </div>
        </div>
    </section>
        
        </>
       
    )
}