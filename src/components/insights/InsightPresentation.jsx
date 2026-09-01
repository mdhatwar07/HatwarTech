import { useState } from "react";
import { Icon } from "../ui/Icon";
import styles from "./InsightPresentation.module.css";

function Slide({ slide }) {
  if (slide.layout === "title") {
    return (
      <div className={styles.slideTitle}>
        {slide.icon && (
          <span className={styles.titleIcon}>
            <Icon name={slide.icon} size={28} />
          </span>
        )}
        {slide.kicker && <span className={styles.kicker}>{slide.kicker}</span>}
        <h3 className={styles.slideHeading}>{slide.title}</h3>
        {slide.body && <p className={styles.slideBody}>{slide.body}</p>}
      </div>
    );
  }

  return (
    <div className={styles.slide}>
      <h3 className={styles.slideHeading}>{slide.title}</h3>
      {slide.body && <p className={styles.slideBody}>{slide.body}</p>}

      {slide.layout === "columns" && (
        <div
          className={styles.columns}
          style={{ "--col-count": slide.columns.length }}
        >
          {slide.columns.map((col) => (
            <div key={col.title} className={styles.column}>
              {col.icon && (
                <span className={styles.columnIcon}>
                  <Icon name={col.icon} size={18} />
                </span>
              )}
              <h4>{col.title}</h4>
              {col.text && <p>{col.text}</p>}
              {col.items && (
                <ul>
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {slide.layout === "matrix" && (
        <div className={styles.matrixWrap}>
          <span className={styles.axisY}>{slide.yLabel}</span>
          <div className={styles.matrix}>
            {["tl", "tr", "bl", "br"].map((pos) => {
              const q = slide.quadrants?.[pos];
              return (
                <div key={pos} className={styles.quadrant}>
                  {q && (
                    <>
                      <strong>{q.title}</strong>
                      <span>{q.sub}</span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <span className={styles.axisX}>{slide.xLabel}</span>
        </div>
      )}

      {slide.layout === "stats" && (
        <div className={styles.stats}>
          {slide.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statValue}>{stat.value}</span>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      )}

      {slide.layout === "table" && (
        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                {slide.table.headers.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slide.table.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={i}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {slide.verdict && <p className={styles.verdict}>{slide.verdict}</p>}
    </div>
  );
}

export function InsightPresentation({ slides }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const go = (delta) => {
    setIndex((current) => Math.min(Math.max(current + delta, 0), total - 1));
  };

  return (
    <div className={styles.deck}>
      <div className={styles.frame} aria-live="polite">
        <Slide slide={slides[index]} />
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.navButton}
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label="Previous slide"
        >
          <Icon name="arrowRight" className={styles.iconLeft} size={18} />
        </button>

        <div className={styles.dots}>
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.navButton}
          onClick={() => go(1)}
          disabled={index === total - 1}
          aria-label="Next slide"
        >
          <Icon name="arrowRight" size={18} />
        </button>
      </div>

      <span className={styles.counter}>
        {index + 1} / {total}
      </span>
    </div>
  );
}
