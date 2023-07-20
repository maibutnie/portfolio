import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import "./Progressbarstyle.css";

const ProgressBar = ({
  label,
  backgroundColor = "#e5e5e5",
  visualParts = [
    {
      percentage: "0%",
      color: "white"
    }
  ]
}) => {
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  const [ref, inView] = useInView({
    triggerOnce: true, // Анимация будет проигрываться только один раз при появлении на экране
    threshold: 0.1 // Порог видимости, задает, насколько видимый должен быть элемент
  });

  useEffect(() => {
    if (inView) {
      requestAnimationFrame(() => {
        setWidths(
          visualParts.map(item => {
            return item.percentage;
          })
        );
      });
    }
  }, [inView, visualParts]);

  return (
    <div ref={ref}>
      <div className="progressLabel">{label}</div>
      <div
        className="progressVisualFull"
        style={{
          backgroundColor
        }}
      >
        {visualParts.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: widths[index],
                backgroundColor: item.color
              }}
              className="progressVisualPart"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
