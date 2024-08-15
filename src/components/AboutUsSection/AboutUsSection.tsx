import style from "./AboutUsSection.module.css";

function AboutUsSection() {
  const startSeconds = 30;
  return (
    <section className={style.aboutUsSection}>
      <h2 className={style.headerTitle}>About us</h2>
      <div className={style.videoWrapper}>
        <iframe
          className={style.iframeWrapper}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/921VbEMAwwY?start=${startSeconds}&showinfo=1&controls=2&rel=0`}
          title="Starship mission to mars"
          allow="accelerometer; encrypted-media; gyroscope;"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default AboutUsSection;
